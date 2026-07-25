# Questionnaire — AI Usage in the Software Industry

This is the canonical, human-readable version of the survey. The Google Form
is generated from `create-form.gs`, which must stay in sync with this file
(see [CONTRIBUTING.md](../CONTRIBUTING.md)).

Design goals:

- **5–7 minutes** to complete (~30 questions, mostly multiple choice)
- **Fully anonymous** — no email, no name, no IP-based tracking beyond Google's defaults
- **Analysis-ready** — every closed question maps 1:1 to a dashboard chart
- **Inclusive** — covers industry roles (dev, DevOps/SRE, QA, management, data/ML, security)
  **and** academia (students, researchers)

---

## Section 0 — Consent (page 1)

| # | Question | Type | Required | Notes |
|---|----------|------|----------|-------|
| 0 | This survey is anonymous and all responses will be published as open data (CC0). Do you agree to participate? | Multiple choice | Yes | Single option: "Yes, I agree". Legal basis for publishing the data. |

## Section 1 — About you (page 2)

Demographics enable the most valuable cross-tabs (e.g. adoption by role × seniority).

| # | Question | Type | Options | Required | Rationale |
|---|----------|------|---------|----------|-----------|
| 1 | Which best describes your current role? | Multiple choice + "Other" | Software engineer / Developer · DevOps / SRE / Platform engineer · QA / Test engineer · Engineering manager / Tech lead · Data / ML engineer · Security engineer · Student · Researcher / Academic | Yes | Primary segmentation axis. |
| 2 | How many years of experience do you have in the software industry? | Multiple choice | Student / not yet working in the industry · Less than 2 years · 2–5 years · 6–10 years · 11–15 years · 16+ years | Yes | Seniority axis; buckets aligned with common survey conventions. |
| 3 | What is your employment situation? | Multiple choice | Employed full-time · Employed part-time · Freelance / contractor · Student · Between jobs · Other | Yes | Distinguishes freelancers (tool choice freedom) from employees. |
| 4 | How large is your organization? | Multiple choice | 1–10 · 11–50 · 51–200 · 201–1,000 · 1,001–5,000 · More than 5,000 · Not applicable | Yes | Company size strongly affects AI policy/budget. |
| 5 | In which industry do you work (or study)? | Multiple choice + "Other" | Software / SaaS · IT services & consulting · Finance & banking · Telecommunications · E-commerce / retail · Healthcare & biotech · Gaming & media · Manufacturing / industrial · Government & public sector · Education / academia · Energy & utilities | Yes | Industry segmentation for the final report. |
| 6 | In which region are you based? | Dropdown | Africa · Asia · Europe · North America · South America · Oceania · Prefer not to say | Yes | Region-level geo analysis without privacy risk. |
| 7 | Which country? (optional) | Short answer | — | No | Finer granularity for those willing to share; normalized at analysis time. |

## Section 2 — AI tools & adoption (page 3)

| # | Question | Type | Options | Required | Rationale |
|---|----------|------|---------|----------|-----------|
| 8 | Do you use AI tools for your work or studies? | Multiple choice | Yes, regularly · Yes, occasionally · I tried, but stopped · No, never | Yes | **Branching question.** "Stopped"/"Never" jump to Section 6 — non-users still answer concerns & outlook. |
| 9 | Which AI tools do you use? (select all) | Checkboxes + "Other" | ChatGPT · GitHub Copilot · Claude · Google Gemini · Cursor · Windsurf / Codeium · Amazon Q Developer · Tabnine · JetBrains AI Assistant · Microsoft 365 Copilot · Perplexity · Self-hosted / local models (Ollama, LM Studio…) | Yes | Market-share view of tools. |
| 10 | Which one do you rely on the most? | Dropdown | Same list as Q9 | Yes | Forces a single "primary" tool → clean comparisons. |
| 11 | How often do you use AI tools? | Multiple choice | Multiple times per day · About once a day · A few times a week · A few times a month · Rarely | Yes | Adoption intensity. |
| 12 | Who pays for the AI tools you use? | Multiple choice | My employer provides paid tools · I pay for them personally · I only use free tiers · A mix of employer and personal | Yes | Employer funding vs. shadow usage. |
| 13 | How do you mainly interact with AI tools? (select all) | Checkboxes | IDE / editor integration · Web chat interface · CLI / terminal · API in my own scripts or tools · AI agents in CI/CD · Mobile app | Yes | Measures embedded-in-workflow vs. copy-paste usage. |

## Section 3 — How you use AI (page 4)

| # | Question | Type | Options | Required | Rationale |
|---|----------|------|---------|----------|-----------|
| 14 | For which tasks do you use AI? (select all) | Checkboxes + "Other" | Writing new code · Debugging and fixing bugs · Code review · Writing or maintaining tests · Refactoring · Documentation · Learning a new language or framework · CI/CD pipelines · Infrastructure as Code · Incident diagnosis / log analysis · Monitoring and alerting · Security analysis · Architecture and design · Data analysis · Communication (emails, specs, tickets) | Yes | The core "use cases by role" dataset. DevOps-specific tasks included. |
| 15 | Which task benefits the most from AI? | Dropdown | Same list as Q14 | Yes | Forces ranking → headline finding. |
| 16 | How much time does AI save you per week? | Multiple choice | None · Less than 1 hour · 1–5 hours · 6–10 hours · More than 10 hours | Yes | Quantified productivity claim. |

## Section 4 — Impact on your work (page 5)

| # | Question | Type | Scale / Options | Required | Rationale |
|---|----------|------|-----------------|----------|-----------|
| 17 | Overall, what effect has AI had on your productivity? | Scale 1–5 | 1 = Much worse, 5 = Much better | Yes | Headline metric. |
| 18 | What effect has AI had on the quality of your work? | Scale 1–5 | 1 = Much worse, 5 = Much better | Yes | Quality vs. speed trade-off. |
| 19 | What effect has AI had on your learning and skill growth? | Scale 1–5 | 1 = Much worse, 5 = Much better | Yes | Tests the "skill erosion" hypothesis. |
| 20 | What effect has AI had on your job satisfaction? | Scale 1–5 | 1 = Much worse, 5 = Much better | Yes | Well-being angle. |
| 21 | Do you review AI-generated code before using it? | Multiple choice | Always · Usually · Sometimes · Rarely · Never | Yes | Trust/verification behavior. |
| 22 | Has AI-generated output ever caused a bug or incident that reached production? | Multiple choice | Yes, a serious incident · Yes, minor issues · No · Not sure | Yes | Real-world risk measurement. |

## Section 5 — Your organization (page 6)

Students and researchers: answer about your university or program.

| # | Question | Type | Options | Required | Rationale |
|---|----------|------|---------|----------|-----------|
| 23 | Which best describes your organization's AI policy? | Multiple choice | AI use is encouraged and funded · Allowed with restrictions · Allowed, but no official guidance · Discouraged or banned · There is no policy · I don't know · Not applicable | Yes | Policy landscape. |
| 24 | Does your organization provide AI training? | Multiple choice | Yes, formal training · Yes, informal (tips, lunch & learns…) · No · I don't know | Yes | Enablement gap. |
| 25 | Which AI tools (if any) are explicitly banned where you work or study? | Short answer | — | No | Free text; aggregated manually. |

## Section 6 — Concerns & outlook (page 7, all respondents)

| # | Question | Type | Options | Required | Rationale |
|---|----------|------|---------|----------|-----------|
| 26 | What are your biggest concerns about AI in software work? (select all) | Checkboxes | Security vulnerabilities · Data privacy / leaks · Intellectual property & licensing · Job displacement · Skill erosion · Over-reliance on AI · Incorrect output / hallucinations · Bias & ethics · Environmental impact · None of these | Yes | Risk ranking; includes non-users' reasons. |
| 27 | How worried are you about AI's impact on your job or career prospects? | Scale 1–5 | 1 = Not worried at all, 5 = Extremely worried | Yes | Anxiety metric, comparable across roles. |
| 28 | In 3 years, how do you expect AI's role in your daily work to evolve? | Multiple choice | It will shrink · It will stay about the same · It will grow somewhat · It will grow significantly · AI will perform most of my current tasks | Yes | Future outlook. |
| 29 | If you do NOT currently use AI tools, why not? (select all — skip if you use AI) | Checkboxes + "Other" | Company policy forbids it · Privacy or security concerns · Not useful for my work · Output quality concerns · Ethical concerns · Cost · I haven't had the chance to try | No | Non-adoption barriers; only reachable meaningfully by non-users via branching. |
| 30 | What is the biggest change AI has made in the way you work? (optional) | Paragraph | — | No | Qualitative color for the final report. |

---

## Branching logic

```
Page 1 Consent
  → Page 2 About you
  → Page 3 Tools & adoption
       Q8 = "Yes, regularly" / "Yes, occasionally" → Page 4 → Page 5 → Page 6 → Page 7
       Q8 = "I tried, but stopped" / "No, never"  ────────────────→ Page 7 (submit)
```

Non-users skip tools/use-cases/impact/org sections but still provide demographics,
concerns, outlook, and their reasons for not using AI (Q29) — which is valuable data.
