# Calculated fields — copy-paste list for Looker Studio

Checkbox answers ("select all that apply") arrive as one comma-separated cell,
so charts need one **calculated field per option**: each is 1 when the
respondent selected that option, 0 otherwise. Then a bar chart of **SUM** of
these fields = the popularity ranking.

## How to create a calculated field

1. Open your report → **Resource → Manage added data sources** → **Edit** your
   Sheets data source.
2. Click **ADD A FIELD** (top right).
3. Give it the **Field name** from the lists below, paste the **Formula**, save.
4. Repeat. (Yes, it's ~40 of them — 15 minutes of copy-paste, done once.)

**Two important tips:**

- When typing a formula, insert the question column by picking it from the
  **autocomplete dropdown** (start typing a few letters of the question title,
  e.g. "Which AI tools"). Don't try to type the full question title by hand.
- For most options a simple `CONTAINS_TEXT` works. The only trap is
  **"Claude" vs "Claude Code"** (one contains the other), so Claude uses a
  boundary-safe `REGEXP_MATCH` instead — use the formulas below as written.

---

## Q9 — Which AI tools do you use? (10 fields)

Replace `Q9_FIELD` with the actual field *"Which AI tools do you use? (select
all that apply)"* via autocomplete.

```
tool_chatgpt        CASE WHEN CONTAINS_TEXT(Q9_FIELD, "ChatGPT") THEN 1 ELSE 0 END
tool_copilot        CASE WHEN CONTAINS_TEXT(Q9_FIELD, "GitHub Copilot") THEN 1 ELSE 0 END
tool_claude         CASE WHEN REGEXP_MATCH(Q9_FIELD, "(^|, )Claude(,|$)") THEN 1 ELSE 0 END
tool_gemini         CASE WHEN CONTAINS_TEXT(Q9_FIELD, "Google Gemini") THEN 1 ELSE 0 END
tool_cursor         CASE WHEN CONTAINS_TEXT(Q9_FIELD, "Cursor") THEN 1 ELSE 0 END
tool_claude_code    CASE WHEN CONTAINS_TEXT(Q9_FIELD, "Claude Code") THEN 1 ELSE 0 END
tool_codex          CASE WHEN CONTAINS_TEXT(Q9_FIELD, "OpenAI Codex") THEN 1 ELSE 0 END
tool_deepseek       CASE WHEN CONTAINS_TEXT(Q9_FIELD, "DeepSeek") THEN 1 ELSE 0 END
tool_qwen           CASE WHEN CONTAINS_TEXT(Q9_FIELD, "Qwen") THEN 1 ELSE 0 END
tool_selfhosted     CASE WHEN CONTAINS_TEXT(Q9_FIELD, "Self-hosted") THEN 1 ELSE 0 END
```

## Q15 — For which tasks do you use AI? (15 fields)

Replace `Q15_FIELD` with *"For which tasks do you use AI? (select all that apply)"*.

```
task_new_code       CASE WHEN CONTAINS_TEXT(Q15_FIELD, "Writing new code") THEN 1 ELSE 0 END
task_debugging      CASE WHEN CONTAINS_TEXT(Q15_FIELD, "Debugging and fixing bugs") THEN 1 ELSE 0 END
task_review         CASE WHEN CONTAINS_TEXT(Q15_FIELD, "Code review") THEN 1 ELSE 0 END
task_tests          CASE WHEN CONTAINS_TEXT(Q15_FIELD, "Writing or maintaining tests") THEN 1 ELSE 0 END
task_refactoring    CASE WHEN CONTAINS_TEXT(Q15_FIELD, "Refactoring") THEN 1 ELSE 0 END
task_docs           CASE WHEN CONTAINS_TEXT(Q15_FIELD, "Documentation") THEN 1 ELSE 0 END
task_learning       CASE WHEN CONTAINS_TEXT(Q15_FIELD, "Learning a new language or framework") THEN 1 ELSE 0 END
task_cicd           CASE WHEN CONTAINS_TEXT(Q15_FIELD, "CI/CD pipelines") THEN 1 ELSE 0 END
task_iac            CASE WHEN CONTAINS_TEXT(Q15_FIELD, "Infrastructure as Code") THEN 1 ELSE 0 END
task_incidents      CASE WHEN CONTAINS_TEXT(Q15_FIELD, "Incident diagnosis") THEN 1 ELSE 0 END
task_monitoring     CASE WHEN CONTAINS_TEXT(Q15_FIELD, "Monitoring and alerting") THEN 1 ELSE 0 END
task_security       CASE WHEN CONTAINS_TEXT(Q15_FIELD, "Security analysis") THEN 1 ELSE 0 END
task_architecture   CASE WHEN CONTAINS_TEXT(Q15_FIELD, "Architecture and design") THEN 1 ELSE 0 END
task_data           CASE WHEN CONTAINS_TEXT(Q15_FIELD, "Data analysis") THEN 1 ELSE 0 END
task_communication  CASE WHEN CONTAINS_TEXT(Q15_FIELD, "Communication") THEN 1 ELSE 0 END
```

## Q24 — How do you test AI-generated code? (6 fields)

Replace `Q24_FIELD` with *"How do you test AI-generated code? (select all that apply)"*.

```
test_unit           CASE WHEN CONTAINS_TEXT(Q24_FIELD, "I write and run unit tests") THEN 1 ELSE 0 END
test_suite          CASE WHEN CONTAINS_TEXT(Q24_FIELD, "I run the existing test suite") THEN 1 ELSE 0 END
test_manual         CASE WHEN CONTAINS_TEXT(Q24_FIELD, "Manual testing") THEN 1 ELSE 0 END
test_ai_self        CASE WHEN CONTAINS_TEXT(Q24_FIELD, "I ask the AI to write tests") THEN 1 ELSE 0 END
test_review_only    CASE WHEN CONTAINS_TEXT(Q24_FIELD, "Code review only") THEN 1 ELSE 0 END
test_none           CASE WHEN CONTAINS_TEXT(Q24_FIELD, "I don't specifically test it") THEN 1 ELSE 0 END
```

## Q31 — Biggest concerns (10 fields)

Replace `Q31_FIELD` with *"What are your biggest concerns about AI in software
work? (select all that apply)"*.

```
concern_security     CASE WHEN CONTAINS_TEXT(Q31_FIELD, "Security vulnerabilities") THEN 1 ELSE 0 END
concern_privacy      CASE WHEN CONTAINS_TEXT(Q31_FIELD, "Data privacy") THEN 1 ELSE 0 END
concern_ip           CASE WHEN CONTAINS_TEXT(Q31_FIELD, "Intellectual property") THEN 1 ELSE 0 END
concern_jobs         CASE WHEN CONTAINS_TEXT(Q31_FIELD, "Job displacement") THEN 1 ELSE 0 END
concern_skills       CASE WHEN CONTAINS_TEXT(Q31_FIELD, "Skill erosion") THEN 1 ELSE 0 END
concern_reliance     CASE WHEN CONTAINS_TEXT(Q31_FIELD, "Over-reliance") THEN 1 ELSE 0 END
concern_quality      CASE WHEN CONTAINS_TEXT(Q31_FIELD, "Incorrect output") THEN 1 ELSE 0 END
concern_bias         CASE WHEN CONTAINS_TEXT(Q31_FIELD, "Bias & ethics") THEN 1 ELSE 0 END
concern_environment  CASE WHEN CONTAINS_TEXT(Q31_FIELD, "Environmental impact") THEN 1 ELSE 0 END
concern_none         CASE WHEN CONTAINS_TEXT(Q31_FIELD, "None of these") THEN 1 ELSE 0 END
```

---

## Using the fields in charts

- Add a **bar chart** → no dimension (or dimension = a constant) → add each
  `tool_*` / `task_*` / `test_*` / `concern_*` field as a **metric** with
  aggregation **SUM**. Sort descending.
- To display them as **% of respondents** instead of counts, edit each metric
  and set *Comparison → Percent of total*, or create the same fields with
  `AVG` aggregation and format as percent.
- Everything else in the survey (single-choice, scales) charts directly with
  no calculated fields needed — see `looker-studio-setup.md` for the page layouts.
