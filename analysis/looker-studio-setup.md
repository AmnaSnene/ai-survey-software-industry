# Public dashboard with Looker Studio (~30 min, no code)

Looker Studio (free) reads the responses Google Sheet directly and gives an
interactive, filterable, embeddable dashboard that refreshes automatically.

## 1. Connect the data

1. Go to <https://lookerstudio.google.com> → **Create → Data source**.
2. Choose **Google Sheets** → select `AI Survey - Responses (open data)` →
   worksheet `Form Responses 1` → **Add**. Keep *"Use first row as headers"* checked.
3. In the field list, check types:
   - `Timestamp` → **Date & Time**
   - Scale questions (effect on productivity/quality/learning/satisfaction, worry level) → **Number**
   - Everything else → **Text**

## 2. Handle "select all that apply" questions

Checkbox answers arrive as one comma-separated cell
(`"ChatGPT, Cursor, Self-hosted / local models (...)"`).
Looker Studio can't split these natively — instead create one **calculated field
per option** (Add a field → formula):

```
CASE WHEN CONTAINS_TEXT(Which AI tools do you use? (select all that apply), "ChatGPT") THEN 1 ELSE 0 END
```

Name it e.g. `tool_chatgpt`. Repeat for each tool, and for the tasks (Q14) and
concerns (Q26) questions you want to chart. Then use **SUM** of each field in a
bar chart. (Field names = the exact column headers; see
[`data/data-dictionary.md`](../data/data-dictionary.md).)

## 3. Recommended report layout

Add these controls at the top of every page (Add a control → Drop-down list,
dimension: role / experience / region / industry) and enable **cross-filtering**
so clicking any chart filters the whole page.

### Page 1 — Overview
- **Scorecards**: total responses (Record count), % using AI
  (ratio of `Do you use AI tools…` = "Yes, regularly" or "Yes, occasionally")
- Time series: responses over time (dimension `Timestamp`)
- Donut chart: responses by role
- Bar chart: responses by region

### Page 2 — Tools & adoption
- Bar chart: SUM of each `tool_*` calculated field (tool popularity)
- Pie: frequency of use (Q11)
- Stacked bar: who pays (Q12) by role
- Bar: AI workflow type (Q14) — chat vs editor assistance vs agentic
- Bar: IDE/editor usage (Q15), highlighting "I mostly do not use an IDE anymore"

### Page 3 — Use cases
- Bar chart: SUM of each `task_*` calculated field
- Stacked bar: top tasks **by role** (breakdown dimension) — the chart people
  will screenshot
- Bar: time saved per week (Q18)

### Page 4 — Impact
- 100% stacked bars for the four 1–5 effect scales (Q19–Q22)
- 100% stacked bars for the challenge / deep-thinking / motivation scales (Q23–Q25)
- Bar: "would you go back to working without AI?" (Q26), breakdown by role
- Bar: production incidents (Q27)

### Page 5 — AI code verification
- Stacked bar: review habits (Q28) by role
- Bar: how much AI-generated code people actually read (Q29)
- Stacked bar: team review practices (Q30) by company size
- Bar: SUM of each `test_*` calculated field (Q31)

### Page 6 — Team collaboration
- 100% stacked bar: overall collaboration effect (Q32)
- Stacked bar: asking colleagues for help (Q33) by role or seniority
- Bar: knowledge sharing change (Q34)
- Bar: sharing prompts/workflows with teammates (Q35)

### Page 7 — Organization
- Stacked bar: AI policy (Q36) by company size (Q4)
- Bar: training offered (Q37)

### Page 8 — Concerns & outlook
- Bar: SUM of each `concern_*` calculated field
- Stacked bar: worry level (Q40) by role or experience
- Bar: 3-year outlook (Q41)
- Optional word-frequency table over the open question (Q43)

## 4. Keep it real-time

- Resource → **Manage added data sources** → edit the Sheets source →
  **Data freshness: 15 minutes** (minimum available).
- Share → **Anyone with the link can view**. Disable "viewers can download"
  only if you want people to use the repo/Sheet for raw data instead.

## 5. Publish

1. **Share** → copy the public link → paste it in the README.
2. Optional: File → **Embed report** gives an `<iframe>` you can put anywhere.
3. Tip: once the report is stable, **File → Make a copy** creates a template
   snapshot; contributors can then replicate the whole dashboard in one click.
