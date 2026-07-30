# Data dictionary

Column headers are the exact question titles produced by
[`survey/create-form.gs`](../survey/create-form.gs) — Google Forms uses the
question text as the header. Keep this file in sync with the script.

**Every question is optional except consent** — any cell may be empty
(skip = opt-out). Choice-based questions also offer `Prefer not to say`.

| # | Column header | Type | Allowed values / notes |
|---|---------------|------|------------------------|
| — | Timestamp | datetime | Added automatically by Google Forms |
| 0 | This survey is anonymous and all responses will be published as open data (CC0). Do you agree to participate? | text | `Yes, I agree` |
| 1 | Which best describes your current role? | text | Software engineer / Developer · DevOps / SRE / Platform engineer · QA / Test engineer · Engineering manager / Tech lead · Data / ML engineer · Security engineer · Student · Researcher / Academic · Prefer not to say · free text (Other) |
| 2 | How many years of experience do you have in the software industry? | text | Student / not yet working in the industry · Less than 2 years · 2-5 years · 6-10 years · 11-15 years · 16+ years · Prefer not to say |
| 3 | What is your employment situation? | text | Employed full-time · Employed part-time · Freelance / contractor · Student · Between jobs · Other · Prefer not to say |
| 4 | How large is your organization? | text | 1-10 · 11-50 · 51-200 · 201-1,000 · 1,001-5,000 · More than 5,000 · Not applicable · Prefer not to say |
| 5 | In which industry do you work (or study)? | text | Software / SaaS · IT services & consulting · Finance & banking · Telecommunications · E-commerce / retail · Healthcare & biotech · Gaming & media · Manufacturing / industrial · Government & public sector · Education / academia · Energy & utilities · Prefer not to say · free text (Other) |
| 6 | In which region are you based? | text | Africa · Asia · Europe · North America · South America · Oceania · Prefer not to say |
| 7 | Which country? (optional) | text | Free text; may be empty. Normalize casing/spelling before analysis. |
| 8 | Do you use AI tools for your work or studies? | text | Yes, regularly · Yes, occasionally · I tried, but stopped · No, never · Prefer not to say |
| 9 | Which AI tools do you use? (select all that apply) | text (multi) | Comma-separated subset of `AI_TOOLS` + Prefer not to say; may include free text (Other). Empty for non-users. |
| 10 | How often do you use AI tools? | text | Multiple times per day · About once a day · A few times a week · A few times a month · Rarely · Prefer not to say |
| 11 | Who pays for the AI tools you use? | text | My employer provides paid tools · I pay for them personally · I only use free tiers · A mix of employer and personal · Not applicable · Prefer not to say |
| 12 | How do you mainly interact with AI tools? (select all that apply) | text (multi) | IDE / editor integration · Web chat interface · CLI / terminal · API in my own scripts or tools · AI agents in CI/CD · Mobile app · Prefer not to say |
| 13 | Which best describes your AI workflow? | text | Chat - I ask questions and copy/paste answers · Editor assistance - autocomplete and inline suggestions as I type · Agentic - the AI edits files, runs commands, and completes multi-step tasks · A mix of the above · Prefer not to say |
| 14 | Which IDE or editor do you mainly use? | text | VS Code · Cursor · JetBrains IDEs (IntelliJ, PyCharm...) · Visual Studio · Neovim / Vim · Zed · Windsurf · Emacs · Other · I mostly do not use an IDE or editor anymore · Prefer not to say |
| 15 | For which tasks do you use AI? (select all that apply) | text (multi) | Comma-separated subset of `TASKS` + Prefer not to say; may include free text (Other). |
| 16 | How much time does AI save you per week? | text | None · Less than 1 hour · 1-5 hours · 6-10 hours · More than 10 hours · Prefer not to say |
| 17 | What effect has AI had on your learning and skill growth? | integer 1–5 | 1 = Much worse … 5 = Much better |
| 18 | Since using AI, do you feel more or less challenged by your work? | integer 1–5 | 1 = Much less challenged … 5 = Much more challenged |
| 19 | What effect has AI had on your motivation at work? | integer 1–5 | 1 = Much less motivated … 5 = Much more motivated |
| 20 | Has AI-generated output ever caused a bug or incident that reached production? | text | Yes, a serious incident · Yes, minor issues · No · Not sure · Not applicable · Prefer not to say |
| 21 | Do you review AI-generated code before using it? | text | Always · Usually · Sometimes · Rarely · Never · Not applicable · Prefer not to say · free text (Other) |
| 22 | How much of the AI-generated code do you actually read? | text | Every line · Most of it · I skim through it · Only the risky or critical parts · Almost none · Not applicable · Prefer not to say · free text (Other) |
| 23 | Does your team still do code reviews for AI-generated code? | text | Yes, same as for human-written code · Yes, but lighter than before · No, AI-generated code skips review · I don't have a team · Not applicable · Prefer not to say · free text (Other) |
| 24 | How do you test AI-generated code? (select all that apply) | text (multi) | I write and run unit tests · I run the existing test suite · Manual testing · I ask the AI to write tests for its own code · Code review only · I don't specifically test it · Not applicable · Prefer not to say · free text (Other) |
| 25 | Overall, what effect has AI had on collaboration within your team? | integer 1–5 | 1 = Much worse … 5 = Much better |
| 26 | Since using AI, how often do you ask colleagues for help? | text | Much less often · Less often · About the same · More often · Much more often · Not applicable · Prefer not to say |
| 27 | How has AI affected knowledge sharing in your team (mentoring, pair programming, asking questions)? | text | Greatly reduced it · Somewhat reduced it · No change · Somewhat increased it · Greatly increased it · Not applicable · Prefer not to say |
| 28 | Which best describes your organization's AI policy? | text | AI use is encouraged and funded · Allowed with restrictions · Allowed, but no official guidance · Discouraged or banned · There is no policy · I don't know · Not applicable · Prefer not to say |
| 29 | Does your organization provide AI training? | text | Yes, formal training · Yes, informal (tips, lunch & learns...) · No · I don't know · Not applicable · Prefer not to say |
| 30 | Which AI tools (if any) are explicitly banned where you work or study? | text | Free text; may be empty. |
| 31 | What are your biggest concerns about AI in software work? (select all that apply) | text (multi) | Security vulnerabilities · Data privacy / leaks · Intellectual property & licensing · Job displacement · Skill erosion · Over-reliance on AI · Incorrect output / hallucinations · Bias & ethics · Environmental impact · None of these · Prefer not to say |
| 32 | How worried are you about AI's impact on your job or career prospects? | integer 1–5 | 1 = Not worried at all … 5 = Extremely worried |
| 33 | In 3 years, how do you expect AI's role in your daily work to evolve? | text | It will shrink · It will stay about the same · It will grow somewhat · It will grow significantly · AI will perform most of my current tasks · Prefer not to say |
| 34 | If you do NOT currently use AI tools, why not? (select all that apply - skip if you use AI) | text (multi) | Company policy forbids it · Privacy or security concerns · Not useful for my work · Output quality concerns · Ethical concerns · Cost · I haven't had the chance to try · Prefer not to say · free text (Other). Usually empty for users. |
| 35 | What is the biggest change AI has made in the way you work? (optional) | text | Free text; may be empty. |

## Notes

- **"text (multi)"** = Google Forms checkbox answers: a single cell containing
  comma-separated values. Note that free-text "Other" answers may themselves
  contain commas — split on `, ` only for the known fixed options, or use
  `CONTAINS_TEXT` per known option (see the Looker Studio guide).
- Questions 9–30 are empty for respondents who answered "I tried, but stopped",
  "No, never", or "Prefer not to say" in Q8 (they skip sections 2–7 by design).
- When charting, exclude `Prefer not to say` and empty cells from averages —
  treat them as missing data, not as a neutral answer.
- **Edition history:** the survey was trimmed mid-edition based on respondent
  feedback. Early responses may contain up to 8 extra columns, removed for
  redundancy or length: `Which one do you rely on the most?`,
  `Which task benefits the most from AI?`,
  `What effect has AI had on your job satisfaction?`,
  `Overall, what effect has AI had on your productivity?`,
  `What effect has AI had on how deeply you think about problems?`,
  `If you could, would you go back to working without AI?`,
  `Do you share AI prompts, workflows, or custom agents with your teammates?`,
  and `What effect has AI had on the quality of your work?`.
  The data in these columns remains valid, just incomplete.
