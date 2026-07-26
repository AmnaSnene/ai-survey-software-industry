# Data dictionary

Column headers are the exact question titles produced by
[`survey/create-form.gs`](../survey/create-form.gs) — Google Forms uses the
question text as the header. Keep this file in sync with the script.

| # | Column header | Type | Allowed values / notes |
|---|---------------|------|------------------------|
| — | Timestamp | datetime | Added automatically by Google Forms |
| 0 | This survey is anonymous and all responses will be published as open data (CC0). Do you agree to participate? | text | `Yes, I agree` |
| 1 | Which best describes your current role? | text | Software engineer / Developer · DevOps / SRE / Platform engineer · QA / Test engineer · Engineering manager / Tech lead · Data / ML engineer · Security engineer · Student · Researcher / Academic · free text (Other) |
| 2 | How many years of experience do you have in the software industry? | text | Student / not yet working in the industry · Less than 2 years · 2-5 years · 6-10 years · 11-15 years · 16+ years |
| 3 | What is your employment situation? | text | Employed full-time · Employed part-time · Freelance / contractor · Student · Between jobs · Other |
| 4 | How large is your organization? | text | 1-10 · 11-50 · 51-200 · 201-1,000 · 1,001-5,000 · More than 5,000 · Not applicable |
| 5 | In which industry do you work (or study)? | text | Software / SaaS · IT services & consulting · Finance & banking · Telecommunications · E-commerce / retail · Healthcare & biotech · Gaming & media · Manufacturing / industrial · Government & public sector · Education / academia · Energy & utilities · free text (Other) |
| 6 | In which region are you based? | text | Africa · Asia · Europe · North America · South America · Oceania · Prefer not to say |
| 7 | Which country? (optional) | text | Free text; may be empty. Normalize casing/spelling before analysis. |
| 8 | Do you use AI tools for your work or studies? | text | Yes, regularly · Yes, occasionally · I tried, but stopped · No, never |
| 9 | Which AI tools do you use? (select all that apply) | text (multi) | Comma-separated subset of the tool list in `create-form.gs` (`AI_TOOLS`); may include free text (Other). Empty for non-users. |
| 10 | Which one do you rely on the most? | text | Single value from `AI_TOOLS`. Empty for non-users. |
| 11 | How often do you use AI tools? | text | Multiple times per day · About once a day · A few times a week · A few times a month · Rarely |
| 12 | Who pays for the AI tools you use? | text | My employer provides paid tools · I pay for them personally · I only use free tiers · A mix of employer and personal |
| 13 | How do you mainly interact with AI tools? (select all that apply) | text (multi) | IDE / editor integration · Web chat interface · CLI / terminal · API in my own scripts or tools · AI agents in CI/CD · Mobile app |
| 14 | Which best describes your AI workflow? | text | Chat - I ask questions and copy/paste answers · Editor assistance - autocomplete and inline suggestions as I type · Agentic - the AI edits files, runs commands, and completes multi-step tasks · A mix of the above |
| 15 | Which IDE or editor do you mainly use? | text | VS Code · Cursor · JetBrains IDEs (IntelliJ, PyCharm...) · Visual Studio · Neovim / Vim · Zed · Windsurf · Emacs · Other · I mostly do not use an IDE or editor anymore |
| 16 | For which tasks do you use AI? (select all that apply) | text (multi) | Comma-separated subset of `TASKS` in `create-form.gs`; may include free text (Other). |
| 17 | Which task benefits the most from AI? | text | Single value from `TASKS`. |
| 18 | How much time does AI save you per week? | text | None · Less than 1 hour · 1-5 hours · 6-10 hours · More than 10 hours |
| 19 | Overall, what effect has AI had on your productivity? | integer 1–5 | 1 = Much worse … 5 = Much better |
| 20 | What effect has AI had on the quality of your work? | integer 1–5 | 1 = Much worse … 5 = Much better |
| 21 | What effect has AI had on your learning and skill growth? | integer 1–5 | 1 = Much worse … 5 = Much better |
| 22 | What effect has AI had on your job satisfaction? | integer 1–5 | 1 = Much worse … 5 = Much better |
| 23 | Do you review AI-generated code before using it? | text | Always · Usually · Sometimes · Rarely · Never |
| 24 | Has AI-generated output ever caused a bug or incident that reached production? | text | Yes, a serious incident · Yes, minor issues · No · Not sure |
| 25 | Which best describes your organization's AI policy? | text | AI use is encouraged and funded · Allowed with restrictions · Allowed, but no official guidance · Discouraged or banned · There is no policy · I don't know · Not applicable |
| 26 | Does your organization provide AI training? | text | Yes, formal training · Yes, informal (tips, lunch & learns...) · No · I don't know |
| 27 | Which AI tools (if any) are explicitly banned where you work or study? | text | Free text; may be empty. |
| 28 | What are your biggest concerns about AI in software work? (select all that apply) | text (multi) | Security vulnerabilities · Data privacy / leaks · Intellectual property & licensing · Job displacement · Skill erosion · Over-reliance on AI · Incorrect output / hallucinations · Bias & ethics · Environmental impact · None of these |
| 29 | How worried are you about AI's impact on your job or career prospects? | integer 1–5 | 1 = Not worried at all … 5 = Extremely worried |
| 30 | In 3 years, how do you expect AI's role in your daily work to evolve? | text | It will shrink · It will stay about the same · It will grow somewhat · It will grow significantly · AI will perform most of my current tasks |
| 31 | If you do NOT currently use AI tools, why not? (select all that apply - skip if you use AI) | text (multi) | Company policy forbids it · Privacy or security concerns · Not useful for my work · Output quality concerns · Ethical concerns · Cost · I haven't had the chance to try · free text (Other). Usually empty for users. |
| 32 | What is the biggest change AI has made in the way you work? (optional) | text | Free text; may be empty. |

## Notes

- **"text (multi)"** = Google Forms checkbox answers: a single cell containing
  comma-separated values. Note that free-text "Other" answers may themselves
  contain commas — split on `, ` only for the known fixed options, or use
  `CONTAINS_TEXT` per known option (see the Looker Studio guide).
- Questions 9–27 are empty for respondents who answered "I tried, but stopped"
  or "No, never" in Q8 (they skip sections 2–5 by design).
