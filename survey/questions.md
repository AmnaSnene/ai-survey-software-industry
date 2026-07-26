# Questionnaire — AI Usage in the Software Industry

This is the canonical, human-readable version of the survey. The Google Form
is generated from `create-form.gs`, which must stay in sync with this file
(see [CONTRIBUTING.md](../CONTRIBUTING.md)).

Design goals:

- **Under 10 minutes** to complete (39 questions, mostly multiple choice)
- **Fully anonymous** — no email, no name, no IP-based tracking beyond Google's defaults
- **Analysis-ready** — every closed question maps 1:1 to a dashboard chart
- **Inclusive** — covers industry roles (dev, DevOps/SRE, QA, management, data/ML, security)
  **and** academia (students, researchers)
- **Never boxed in** — every question offers an opt-out: an explicit
  **"Prefer not to say"** option on all choice-based questions, **"Other"**
  (free text) where Forms supports it, and **optional scales** (Forms can't
  add options to scale questions, so skipping is the opt-out)

---

## Section 0 — Consent (page 1)

| # | Question | Type | Required | Notes |
|---|----------|------|----------|-------|
| 0 | This survey is anonymous and all responses will be published as open data (CC0). Do you agree to participate? | Multiple choice | Yes | Single option: "Yes, I agree". The only question without an opt-out — it's the participation gate. |

## Section 1 — About you (page 2)

Demographics enable the most valuable cross-tabs (e.g. adoption by role × seniority).
All questions here accept "Prefer not to say".

| # | Question | Type | Options | Required | Rationale |
|---|----------|------|---------|----------|-----------|
| 1 | Which best describes your current role? | Multiple choice + "Other" | Software engineer / Developer · DevOps / SRE / Platform engineer · QA / Test engineer · Engineering manager / Tech lead · Data / ML engineer · Security engineer · Student · Researcher / Academic · Prefer not to say | Yes | Primary segmentation axis. |
| 2 | How many years of experience do you have in the software industry? | Multiple choice | Student / not yet working in the industry · Less than 2 years · 2–5 years · 6–10 years · 11–15 years · 16+ years · Prefer not to say | Yes | Seniority axis; buckets aligned with common survey conventions. |
| 3 | What is your employment situation? | Multiple choice | Employed full-time · Employed part-time · Freelance / contractor · Student · Between jobs · Other · Prefer not to say | Yes | Distinguishes freelancers (tool choice freedom) from employees. |
| 4 | How large is your organization? | Multiple choice | 1–10 · 11–50 · 51–200 · 201–1,000 · 1,001–5,000 · More than 5,000 · Not applicable · Prefer not to say | Yes | Company size strongly affects AI policy/budget. |
| 5 | In which industry do you work (or study)? | Multiple choice + "Other" | Software / SaaS · IT services & consulting · Finance & banking · Telecommunications · E-commerce / retail · Healthcare & biotech · Gaming & media · Manufacturing / industrial · Government & public sector · Education / academia · Energy & utilities · Prefer not to say | Yes | Industry segmentation for the final report. |
| 6 | In which region are you based? | Dropdown | Africa · Asia · Europe · North America · South America · Oceania · Prefer not to say | Yes | Region-level geo analysis without privacy risk. |
| 7 | Which country? (optional) | Short answer | — | No | Finer granularity for those willing to share; normalized at analysis time. |

## Section 2 — AI tools & adoption (page 3)

| # | Question | Type | Options | Required | Rationale |
|---|----------|------|---------|----------|-----------|
| 8 | Do you use AI tools for your work or studies? | Multiple choice | Yes, regularly · Yes, occasionally · I tried, but stopped · No, never · Prefer not to say | Yes | **Branching question.** "Stopped"/"Never"/"Prefer not to say" jump to Section 7. |
| 9 | Which AI tools do you use? (select all) | Checkboxes + "Other" | ChatGPT · GitHub Copilot · Claude · Google Gemini · Cursor · Windsurf / Codeium · Amazon Q Developer · Tabnine · JetBrains AI Assistant · Microsoft 365 Copilot · Perplexity · Self-hosted / local models (Ollama, LM Studio…) · Prefer not to say | Yes | Market-share view of tools. |
| 10 | Which one do you rely on the most? | Dropdown | Same list as Q9 + Other · Prefer not to say | Yes | Forces a single "primary" tool → clean comparisons. |
| 11 | How often do you use AI tools? | Multiple choice | Multiple times per day · About once a day · A few times a week · A few times a month · Rarely · Prefer not to say | Yes | Adoption intensity. |
| 12 | Who pays for the AI tools you use? | Multiple choice | My employer provides paid tools · I pay for them personally · I only use free tiers · A mix of employer and personal · Not applicable · Prefer not to say | Yes | Employer funding vs. shadow usage. |
| 13 | How do you mainly interact with AI tools? (select all) | Checkboxes | IDE / editor integration · Web chat interface · CLI / terminal · API in my own scripts or tools · AI agents in CI/CD · Mobile app · Prefer not to say | Yes | Measures embedded-in-workflow vs. copy-paste usage. |
| 14 | Which best describes your AI workflow? | Multiple choice | Chat - I ask questions and copy/paste answers · Editor assistance - autocomplete and inline suggestions as I type · Agentic - the AI edits files, runs commands, and completes multi-step tasks · A mix of the above · Prefer not to say | Yes | Distinguishes conversational AI from agentic workflows — the key emerging-practice metric. |
| 15 | Which IDE or editor do you mainly use? | Dropdown | VS Code · Cursor · JetBrains IDEs (IntelliJ, PyCharm…) · Visual Studio · Neovim / Vim · Zed · Windsurf · Emacs · Other · I mostly do not use an IDE or editor anymore · Prefer not to say | Yes | Tests whether AI is augmenting or replacing the IDE. |

## Section 3 — How you use AI (page 4)

| # | Question | Type | Options | Required | Rationale |
|---|----------|------|---------|----------|-----------|
| 16 | For which tasks do you use AI? (select all) | Checkboxes + "Other" | Writing new code · Debugging and fixing bugs · Code review · Writing or maintaining tests · Refactoring · Documentation · Learning a new language or framework · CI/CD pipelines · Infrastructure as Code · Incident diagnosis / log analysis · Monitoring and alerting · Security analysis · Architecture and design · Data analysis · Communication (emails, specs, tickets) · Prefer not to say | Yes | The core "use cases by role" dataset. DevOps-specific tasks included. |
| 17 | Which task benefits the most from AI? | Dropdown | Same list as Q16 + Other · Prefer not to say | Yes | Forces ranking → headline finding. |
| 18 | How much time does AI save you per week? | Multiple choice | None · Less than 1 hour · 1–5 hours · 6–10 hours · More than 10 hours · Prefer not to say | Yes | Quantified productivity claim. |

## Section 4 — Impact on your work (page 5)

Scale questions are optional (skipping = prefer not to say).

| # | Question | Type | Scale / Options | Required | Rationale |
|---|----------|------|-----------------|----------|-----------|
| 19 | Overall, what effect has AI had on your productivity? | Scale 1–5 | 1 = Much worse, 5 = Much better | No | Headline metric. |
| 20 | What effect has AI had on the quality of your work? | Scale 1–5 | 1 = Much worse, 5 = Much better | No | Quality vs. speed trade-off. |
| 21 | What effect has AI had on your learning and skill growth? | Scale 1–5 | 1 = Much worse, 5 = Much better | No | Tests the "skill erosion" hypothesis. |
| 22 | What effect has AI had on your job satisfaction? | Scale 1–5 | 1 = Much worse, 5 = Much better | No | Well-being angle. |
| 23 | Since using AI, do you feel more or less challenged by your work? | Scale 1–5 | 1 = Much less challenged, 5 = Much more challenged | No | Intellectual stimulation: does AI remove the interesting parts or the boring parts? |
| 24 | What effect has AI had on how deeply you think about problems? | Scale 1–5 | 1 = I think much less deeply, 5 = I think much more deeply | No | The "do you feel you think less" question — cognitive engagement. |
| 25 | What effect has AI had on your motivation at work? | Scale 1–5 | 1 = Much less motivated, 5 = Much more motivated | No | Direct motivation metric, complements satisfaction (Q22). |
| 26 | If you could, would you go back to working without AI? | Multiple choice | Definitely not · Probably not · Not sure · Probably yes · Definitely yes · Not applicable · Prefer not to say | Yes | Revealed preference: satisfaction with vs. without AI. |
| 27 | Has AI-generated output ever caused a bug or incident that reached production? | Multiple choice | Yes, a serious incident · Yes, minor issues · No · Not sure · Not applicable · Prefer not to say | Yes | Real-world risk measurement. |

## Section 5 — AI-generated code & verification (page 6)

| # | Question | Type | Options | Required | Rationale |
|---|----------|------|---------|----------|-----------|
| 28 | Do you review AI-generated code before using it? | Multiple choice + "Other" | Always · Usually · Sometimes · Rarely · Never · Not applicable · Prefer not to say | Yes | Personal trust/verification behavior. |
| 29 | How much of the AI-generated code do you actually read? | Multiple choice + "Other" | Every line · Most of it · I skim through it · Only the risky or critical parts · Almost none · Not applicable · Prefer not to say | Yes | Reading depth — finer signal than "review yes/no". |
| 30 | Does your team still do code reviews for AI-generated code? | Multiple choice + "Other" | Yes, same as for human-written code · Yes, but lighter than before · No, AI-generated code skips review · I don't have a team · Not applicable · Prefer not to say | Yes | Team-level practice: is review culture surviving AI? |
| 31 | How do you test AI-generated code? (select all) | Checkboxes + "Other" | I write and run unit tests · I run the existing test suite · Manual testing · I ask the AI to write tests for its own code · Code review only · I don't specifically test it · Not applicable · Prefer not to say | Yes | Verification toolkit; "AI tests itself" is a notable pattern. |

## Section 6 — Your organization (page 7)

Students and researchers: answer about your university or program.

| # | Question | Type | Options | Required | Rationale |
|---|----------|------|---------|----------|-----------|
| 32 | Which best describes your organization's AI policy? | Multiple choice | AI use is encouraged and funded · Allowed with restrictions · Allowed, but no official guidance · Discouraged or banned · There is no policy · I don't know · Not applicable · Prefer not to say | Yes | Policy landscape. |
| 33 | Does your organization provide AI training? | Multiple choice | Yes, formal training · Yes, informal (tips, lunch & learns…) · No · I don't know · Not applicable · Prefer not to say | Yes | Enablement gap. |
| 34 | Which AI tools (if any) are explicitly banned where you work or study? | Short answer | — | No | Free text; aggregated manually. |

## Section 7 — Concerns & outlook (page 8, all respondents)

| # | Question | Type | Options | Required | Rationale |
|---|----------|------|---------|----------|-----------|
| 35 | What are your biggest concerns about AI in software work? (select all) | Checkboxes | Security vulnerabilities · Data privacy / leaks · Intellectual property & licensing · Job displacement · Skill erosion · Over-reliance on AI · Incorrect output / hallucinations · Bias & ethics · Environmental impact · None of these · Prefer not to say | Yes | Risk ranking; includes non-users' reasons. |
| 36 | How worried are you about AI's impact on your job or career prospects? | Scale 1–5 | 1 = Not worried at all, 5 = Extremely worried | No | Anxiety metric, comparable across roles. |
| 37 | In 3 years, how do you expect AI's role in your daily work to evolve? | Multiple choice | It will shrink · It will stay about the same · It will grow somewhat · It will grow significantly · AI will perform most of my current tasks · Prefer not to say | Yes | Future outlook. |
| 38 | If you do NOT currently use AI tools, why not? (select all — skip if you use AI) | Checkboxes + "Other" | Company policy forbids it · Privacy or security concerns · Not useful for my work · Output quality concerns · Ethical concerns · Cost · I haven't had the chance to try · Prefer not to say | No | Non-adoption barriers; only reachable meaningfully by non-users via branching. |
| 39 | What is the biggest change AI has made in the way you work? (optional) | Paragraph | — | No | Qualitative color for the final report. |

---

## Branching logic

```
Page 1 Consent
  → Page 2 About you
  → Page 3 Tools & adoption
       Q8 = "Yes, regularly" / "Yes, occasionally" → Pages 4 → 5 → 6 → 7 → 8
       Q8 = "I tried, but stopped" / "No, never" / "Prefer not to say" ──→ Page 8 (submit)
```

Non-users skip tools/use-cases/impact/verification/org sections but still provide
demographics, concerns, outlook, and their reasons for not using AI (Q38) —
which is valuable data.
