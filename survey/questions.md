# Questionnaire — AI Usage in the Software Industry

This is the canonical, human-readable version of the survey. The Google Form
is generated from `create-form.gs`, which must stay in sync with this file
(see [CONTRIBUTING.md](../CONTRIBUTING.md)).

Design goals:

- **~5 minutes** to complete (35 questions, mostly multiple choice)
- **Fully anonymous** — no email, no name, no IP-based tracking beyond Google's defaults
- **Zero pressure** — every question is optional except the consent gate;
  choice-based questions also offer an explicit **"Prefer not to say"**, and
  many offer a free-text **"Other"**
- **Analysis-ready** — every closed question maps 1:1 to a dashboard chart
- **Inclusive** — covers industry roles (dev, DevOps/SRE, QA, management, data/ML, security)
  **and** academia (students, researchers)

---

## Section 0 — Consent (page 1)

| # | Question | Type | Required | Notes |
|---|----------|------|----------|-------|
| 0 | This survey is anonymous and all responses will be published as open data (CC0). Do you agree to participate? | Multiple choice | **Yes** (only required question) | Single option: "Yes, I agree". The participation gate. |

## Section 1 — About you (page 2)

Demographics enable the most valuable cross-tabs (e.g. adoption by role × seniority).

| # | Question | Type | Options | Rationale |
|---|----------|------|---------|-----------|
| 1 | Which best describes your current role? | Multiple choice + "Other" | Software engineer / Developer · DevOps / SRE / Platform engineer · QA / Test engineer · Engineering manager / Tech lead · Data / ML engineer · Security engineer · Student · Researcher / Academic · Prefer not to say | Primary segmentation axis. |
| 2 | How many years of experience do you have in the software industry? | Multiple choice | Student / not yet working in the industry · Less than 2 years · 2–5 years · 6–10 years · 11–15 years · 16+ years · Prefer not to say | Seniority axis; buckets aligned with common survey conventions. |
| 3 | What is your employment situation? | Multiple choice | Employed full-time · Employed part-time · Freelance / contractor · Student · Between jobs · Other · Prefer not to say | Distinguishes freelancers (tool choice freedom) from employees. |
| 4 | How large is your organization? | Multiple choice | 1–10 · 11–50 · 51–200 · 201–1,000 · 1,001–5,000 · More than 5,000 · Not applicable · Prefer not to say | Company size strongly affects AI policy/budget. |
| 5 | In which industry do you work (or study)? | Multiple choice + "Other" | Software / SaaS · IT services & consulting · Finance & banking · Telecommunications · E-commerce / retail · Healthcare & biotech · Gaming & media · Manufacturing / industrial · Government & public sector · Education / academia · Energy & utilities · Prefer not to say | Industry segmentation for the final report. |
| 6 | In which region are you based? | Dropdown | Africa · Asia · Europe · North America · South America · Oceania · Prefer not to say | Region-level geo analysis without privacy risk. |
| 7 | Which country? (optional) | Short answer | — | Finer granularity for those willing to share; normalized at analysis time. |

## Section 2 — AI tools & adoption (page 3)

| # | Question | Type | Options | Rationale |
|---|----------|------|---------|-----------|
| 8 | Do you use AI tools for your work or studies? | Multiple choice | Yes, regularly · Yes, occasionally · I tried, but stopped · No, never · Prefer not to say | **Branching question.** "Stopped"/"Never"/"Prefer not to say" jump to Section 8. If skipped, the respondent simply sees all pages. |
| 9 | Which AI tools do you use? (select all) | Checkboxes + "Other" | ChatGPT · GitHub Copilot · Claude · Google Gemini · Cursor · Claude Code · OpenAI Codex · DeepSeek · Qwen · Self-hosted / local models (Ollama, LM Studio…) · Prefer not to say | Deliberately short: the top tools only. The long tail is captured via free-text "Other"; frequently written-in tools get promoted to the list in future editions. |
| 10 | How often do you use AI tools? | Multiple choice | Multiple times per day · About once a day · A few times a week · A few times a month · Rarely · Prefer not to say | Adoption intensity. |
| 11 | Who pays for the AI tools you use? | Multiple choice | My employer provides paid tools · I pay for them personally · I only use free tiers · A mix of employer and personal · Not applicable · Prefer not to say | Employer funding vs. shadow usage. |
| 12 | How do you mainly interact with AI tools? (select all) | Checkboxes | IDE / editor integration · Web chat interface · CLI / terminal · API in my own scripts or tools · AI agents in CI/CD · Mobile app · Prefer not to say | Measures embedded-in-workflow vs. copy-paste usage. |
| 13 | Which best describes your AI workflow? | Multiple choice | Chat - I ask questions and copy/paste answers · Editor assistance - autocomplete and inline suggestions as I type · Agentic - the AI edits files, runs commands, and completes multi-step tasks · A mix of the above · Prefer not to say | Distinguishes conversational AI from agentic workflows — the key emerging-practice metric. |
| 14 | Which IDE or editor do you mainly use? | Dropdown | VS Code · Cursor · JetBrains IDEs (IntelliJ, PyCharm…) · Visual Studio · Neovim / Vim · Zed · Windsurf · Emacs · Other · I mostly do not use an IDE or editor anymore · Prefer not to say | Tests whether AI is augmenting or replacing the IDE. |

## Section 3 — How you use AI (page 4)

| # | Question | Type | Options | Rationale |
|---|----------|------|---------|-----------|
| 15 | For which tasks do you use AI? (select all) | Checkboxes + "Other" | Writing new code · Debugging and fixing bugs · Code review · Writing or maintaining tests · Refactoring · Documentation · Learning a new language or framework · CI/CD pipelines · Infrastructure as Code · Incident diagnosis / log analysis · Monitoring and alerting · Security analysis · Architecture and design · Data analysis · Communication (emails, specs, tickets) · Prefer not to say | The core "use cases by role" dataset. DevOps-specific tasks included. |
| 16 | How much time does AI save you per week? | Multiple choice | None · Less than 1 hour · 1–5 hours · 6–10 hours · More than 10 hours · Prefer not to say | Quantified productivity claim. |

## Section 4 — Impact on your work (page 5)

| # | Question | Type | Scale / Options | Rationale |
|---|----------|------|-----------------|-----------|
| 17 | What effect has AI had on your learning and skill growth? | Scale 1–5 | 1 = Much worse, 5 = Much better | Tests the "skill erosion" hypothesis. |
| 18 | Since using AI, do you feel more or less challenged by your work? | Scale 1–5 | 1 = Much less challenged, 5 = Much more challenged | Intellectual stimulation: does AI remove the interesting parts or the boring parts? |
| 19 | What effect has AI had on your motivation at work? | Scale 1–5 | 1 = Much less motivated, 5 = Much more motivated | Direct motivation metric. |
| 20 | Has AI-generated output ever caused a bug or incident that reached production? | Multiple choice | Yes, a serious incident · Yes, minor issues · No · Not sure · Not applicable · Prefer not to say | Real-world risk measurement. |

## Section 5 — AI-generated code & verification (page 6)

| # | Question | Type | Options | Rationale |
|---|----------|------|---------|-----------|
| 21 | Do you review AI-generated code before using it? | Multiple choice + "Other" | Always · Usually · Sometimes · Rarely · Never · Not applicable · Prefer not to say | Personal trust/verification behavior. |
| 22 | How much of the AI-generated code do you actually read? | Multiple choice + "Other" | Every line · Most of it · I skim through it · Only the risky or critical parts · Almost none · Not applicable · Prefer not to say | Reading depth — finer signal than "review yes/no". |
| 23 | Does your team still do code reviews for AI-generated code? | Multiple choice + "Other" | Yes, same as for human-written code · Yes, but lighter than before · No, AI-generated code skips review · I don't have a team · Not applicable · Prefer not to say | Team-level practice: is review culture surviving AI? |
| 24 | How do you test AI-generated code? (select all) | Checkboxes + "Other" | I write and run unit tests · I run the existing test suite · Manual testing · I ask the AI to write tests for its own code · Code review only · I don't specifically test it · Not applicable · Prefer not to say | Verification toolkit; "AI tests itself" is a notable pattern. |

## Section 6 — AI & your team (page 7)

Students: think about classmates and project teams.

| # | Question | Type | Options | Rationale |
|---|----------|------|---------|-----------|
| 25 | Overall, what effect has AI had on collaboration within your team? | Scale 1–5 | 1 = Much worse, 5 = Much better | Headline team metric. |
| 26 | Since using AI, how often do you ask colleagues for help? | Multiple choice | Much less often · Less often · About the same · More often · Much more often · Not applicable · Prefer not to say | The "AI replaces the colleague" hypothesis — concrete help-seeking behavior. |
| 27 | How has AI affected knowledge sharing in your team (mentoring, pair programming, asking questions)? | Multiple choice | Greatly reduced it · Somewhat reduced it · No change · Somewhat increased it · Greatly increased it · Not applicable · Prefer not to say | Informal learning/mentoring channel. |

## Section 7 — Your organization (page 8)

Students and researchers: answer about your university or program.

| # | Question | Type | Options | Rationale |
|---|----------|------|---------|-----------|
| 28 | Which best describes your organization's AI policy? | Multiple choice | AI use is encouraged and funded · Allowed with restrictions · Allowed, but no official guidance · Discouraged or banned · There is no policy · I don't know · Not applicable · Prefer not to say | Policy landscape. |
| 29 | Does your organization provide AI training? | Multiple choice | Yes, formal training · Yes, informal (tips, lunch & learns…) · No · I don't know · Not applicable · Prefer not to say | Enablement gap. |
| 30 | Which AI tools (if any) are explicitly banned where you work or study? | Short answer | — | Free text; aggregated manually. |

## Section 8 — Concerns & outlook (page 9, all respondents)

| # | Question | Type | Options | Rationale |
|---|----------|------|---------|-----------|
| 31 | What are your biggest concerns about AI in software work? (select all) | Checkboxes | Security vulnerabilities · Data privacy / leaks · Intellectual property & licensing · Job displacement · Skill erosion · Over-reliance on AI · Incorrect output / hallucinations · Bias & ethics · Environmental impact · None of these · Prefer not to say | Risk ranking; includes non-users' reasons. |
| 32 | How worried are you about AI's impact on your job or career prospects? | Scale 1–5 | 1 = Not worried at all, 5 = Extremely worried | Anxiety metric, comparable across roles. |
| 33 | In 3 years, how do you expect AI's role in your daily work to evolve? | Multiple choice | It will shrink · It will stay about the same · It will grow somewhat · It will grow significantly · AI will perform most of my current tasks · Prefer not to say | Future outlook. |
| 34 | If you do NOT currently use AI tools, why not? (select all — skip if you use AI) | Checkboxes + "Other" | Company policy forbids it · Privacy or security concerns · Not useful for my work · Output quality concerns · Ethical concerns · Cost · I haven't had the chance to try · Prefer not to say | Non-adoption barriers; only reachable meaningfully by non-users via branching. |
| 35 | What is the biggest change AI has made in the way you work? (optional) | Paragraph | — | Qualitative color for the final report. |

---

## Branching logic

```
Page 1 Consent
  → Page 2 About you
  → Page 3 Tools & adoption
       Q8 = "Yes, regularly" / "Yes, occasionally" → Pages 4 → 5 → 6 → 7 → 8 → 9
       Q8 = "I tried, but stopped" / "No, never" / "Prefer not to say" ──→ Page 9 (submit)
       Q8 = skipped (optional) → continues through all pages
```

Non-users skip tools/use-cases/impact/verification/team/org sections but still provide
demographics, concerns, outlook, and their reasons for not using AI (Q34) —
which is valuable data.
