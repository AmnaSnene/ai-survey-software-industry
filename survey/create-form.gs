/**
 * AI Usage in the Software Industry — survey generator.
 *
 * Creates the full Google Form (and its responses spreadsheet) programmatically,
 * so the survey is reproducible and version-controlled.
 *
 * Usage:
 *   1. Go to https://script.google.com and create a new project.
 *   2. Paste this file, save, and run createSurveyForm().
 *   3. Authorize the requested scopes when prompted.
 *   4. Check the execution log for the form edit URL, public URL, and
 *      responses spreadsheet URL.
 *
 * IMPORTANT: if you edit questions here, keep survey/questions.md and
 * data/data-dictionary.md in sync (see CONTRIBUTING.md).
 */

var AI_TOOLS = [
  'ChatGPT',
  'GitHub Copilot',
  'Claude',
  'Google Gemini',
  'Cursor',
  'Claude Code',
  'OpenAI Codex',
  'DeepSeek',
  'Qwen',
  'Self-hosted / local models (Ollama, LM Studio...)'
];

var TASKS = [
  'Writing new code',
  'Debugging and fixing bugs',
  'Code review',
  'Writing or maintaining tests',
  'Refactoring',
  'Documentation',
  'Learning a new language or framework',
  'CI/CD pipelines',
  'Infrastructure as Code',
  'Incident diagnosis / log analysis',
  'Monitoring and alerting',
  'Security analysis',
  'Architecture and design',
  'Data analysis',
  'Communication (emails, specs, tickets)'
];

var EDITORS = [
  'VS Code',
  'Cursor',
  'JetBrains IDEs (IntelliJ, PyCharm...)',
  'Visual Studio',
  'Neovim / Vim',
  'Zed',
  'Windsurf',
  'Emacs',
  'Other',
  'I mostly do not use an IDE or editor anymore'
];

var ROLES = [
  'Software engineer / Developer',
  'DevOps / SRE / Platform engineer',
  'QA / Test engineer',
  'Engineering manager / Tech lead',
  'Data / ML engineer',
  'Security engineer',
  'Student',
  'Researcher / Academic'
];

// Explicit opt-out offered on every question where Forms allows it.
var PNTS = 'Prefer not to say';

function createSurveyForm() {
  Logger.log('create-form.gs v1.11 - starting...');
  var form = FormApp.create('AI Usage in the Software Industry — 2026');
  form.setDescription(
    'How do software engineers, developers, DevOps/SREs, QA, students and researchers ' +
    'really use AI? This anonymous, open survey collects ~6 minutes of your experience ' +
    'and publishes ALL results as open data (CC0) with a real-time public dashboard. ' +
    'No email or personal data is collected. ' +
    'The live dashboard is public — but please answer before checking it, so your answers stay yours.'
  );
  form.setCollectEmail(false);
  form.setAllowResponseEdits(false);
  form.setLimitOneResponsePerUser(false);
  form.setProgressBar(true);
  form.setConfirmationMessage('Thank you! Results will be published on the public dashboard.');

  // ---------- Page 1: Consent ----------
  form.addMultipleChoiceItem()
    .setTitle('This survey is anonymous and all responses will be published as open data (CC0). Do you agree to participate?')
    .setChoiceValues(['Yes, I agree'])
    .setRequired(true);

  // ---------- Page 2: About you ----------
  form.addPageBreakItem().setTitle('About you');

  var roleItem = form.addMultipleChoiceItem()
    .setTitle('Which best describes your current role?')
    .showOtherOption(true)
    .setRequired(true);
  roleItem.setChoiceValues(ROLES.concat([PNTS]));

  form.addMultipleChoiceItem()
    .setTitle('How many years of experience do you have in the software industry?')
    .setChoiceValues([
      'Student / not yet working in the industry',
      'Less than 2 years',
      '2-5 years',
      '6-10 years',
      '11-15 years',
      '16+ years',
      PNTS
    ])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('What is your employment situation?')
    .setChoiceValues([
      'Employed full-time',
      'Employed part-time',
      'Freelance / contractor',
      'Student',
      'Between jobs',
      'Other',
      PNTS
    ])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('How large is your organization?')
    .setChoiceValues([
      '1-10',
      '11-50',
      '51-200',
      '201-1,000',
      '1,001-5,000',
      'More than 5,000',
      'Not applicable',
      PNTS
    ])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('In which industry do you work (or study)?')
    .setChoiceValues([
      'Software / SaaS',
      'IT services & consulting',
      'Finance & banking',
      'Telecommunications',
      'E-commerce / retail',
      'Healthcare & biotech',
      'Gaming & media',
      'Manufacturing / industrial',
      'Government & public sector',
      'Education / academia',
      'Energy & utilities',
      PNTS
    ])
    .showOtherOption(true)
    .setRequired(true);

  form.addListItem()
    .setTitle('In which region are you based?')
    .setChoiceValues([
      'Africa',
      'Asia',
      'Europe',
      'North America',
      'South America',
      'Oceania',
      PNTS
    ])
    .setRequired(true);

  form.addTextItem()
    .setTitle('Which country? (optional)');

  // ---------- Page 3: AI tools & adoption ----------
  form.addPageBreakItem().setTitle('AI tools & adoption');

  form.addMultipleChoiceItem()
    .setTitle('Do you use AI tools for your work or studies?')
    .setRequired(true);
  // Choices (with skip logic) are attached at the end, once the target page exists.

  form.addCheckboxItem()
    .setTitle('Which AI tools do you use? (select all that apply)')
    .setChoiceValues(AI_TOOLS.concat([PNTS]))
    .showOtherOption(true)
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('How often do you use AI tools?')
    .setChoiceValues([
      'Multiple times per day',
      'About once a day',
      'A few times a week',
      'A few times a month',
      'Rarely',
      PNTS
    ])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('Who pays for the AI tools you use?')
    .setChoiceValues([
      'My employer provides paid tools',
      'I pay for them personally',
      'I only use free tiers',
      'A mix of employer and personal',
      'Not applicable',
      PNTS
    ])
    .setRequired(true);

  form.addCheckboxItem()
    .setTitle('How do you mainly interact with AI tools? (select all that apply)')
    .setChoiceValues([
      'IDE / editor integration',
      'Web chat interface',
      'CLI / terminal',
      'API in my own scripts or tools',
      'AI agents in CI/CD',
      'Mobile app',
      PNTS
    ])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('Which best describes your AI workflow?')
    .setChoiceValues([
      'Chat - I ask questions and copy/paste answers',
      'Editor assistance - autocomplete and inline suggestions as I type',
      'Agentic - the AI edits files, runs commands, and completes multi-step tasks',
      'A mix of the above',
      PNTS
    ])
    .setRequired(true);

  var ideItem = form.addListItem()
    .setTitle('Which IDE or editor do you mainly use?')
    .setRequired(true);
  ideItem.setChoiceValues(EDITORS.concat([PNTS]));

  // ---------- Page 4: How you use AI ----------
  form.addPageBreakItem().setTitle('How you use AI');

  form.addCheckboxItem()
    .setTitle('For which tasks do you use AI? (select all that apply)')
    .setChoiceValues(TASKS.concat([PNTS]))
    .showOtherOption(true)
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('How much time does AI save you per week?')
    .setChoiceValues([
      'None',
      'Less than 1 hour',
      '1-5 hours',
      '6-10 hours',
      'More than 10 hours',
      PNTS
    ])
    .setRequired(true);

  // ---------- Page 5: Impact on your work ----------
  form.addPageBreakItem()
    .setTitle('Impact on your work')
    .setHelpText('All scales are optional - skip any you prefer not to answer.');

  addEffectScale(form, 'Overall, what effect has AI had on your productivity?');
  addEffectScale(form, 'What effect has AI had on the quality of your work?');
  addEffectScale(form, 'What effect has AI had on your learning and skill growth?');

  form.addScaleItem()
    .setTitle('Since using AI, do you feel more or less challenged by your work?')
    .setBounds(1, 5)
    .setLabels('Much less challenged', 'Much more challenged')
    .setRequired(false);

  form.addScaleItem()
    .setTitle('What effect has AI had on how deeply you think about problems?')
    .setBounds(1, 5)
    .setLabels('I think much less deeply', 'I think much more deeply')
    .setRequired(false);

  form.addScaleItem()
    .setTitle('What effect has AI had on your motivation at work?')
    .setBounds(1, 5)
    .setLabels('Much less motivated', 'Much more motivated')
    .setRequired(false);

  var goBackItem = form.addMultipleChoiceItem()
    .setTitle('If you could, would you go back to working without AI?')
    .setRequired(true);
  goBackItem.setChoiceValues([
    'Definitely not',
    'Probably not',
    'Not sure',
    'Probably yes',
    'Definitely yes',
    'Not applicable',
    PNTS
  ]);

  form.addMultipleChoiceItem()
    .setTitle('Has AI-generated output ever caused a bug or incident that reached production?')
    .setChoiceValues([
      'Yes, a serious incident',
      'Yes, minor issues',
      'No',
      'Not sure',
      'Not applicable',
      PNTS
    ])
    .setRequired(true);

  // ---------- Page 6: AI-generated code & verification ----------
  form.addPageBreakItem()
    .setTitle('AI-generated code & verification')
    .setHelpText('If AI does not generate code for you (for example you only use it for documentation or ops), feel free to pick "Not applicable".');

  var reviewItem = form.addMultipleChoiceItem()
    .setTitle('Do you review AI-generated code before using it?')
    .showOtherOption(true)
    .setRequired(true);
  reviewItem.setChoiceValues(['Always', 'Usually', 'Sometimes', 'Rarely', 'Never', 'Not applicable', PNTS]);

  var readItem = form.addMultipleChoiceItem()
    .setTitle('How much of the AI-generated code do you actually read?')
    .showOtherOption(true)
    .setRequired(true);
  readItem.setChoiceValues([
    'Every line',
    'Most of it',
    'I skim through it',
    'Only the risky or critical parts',
    'Almost none',
    'Not applicable',
    PNTS
  ]);

  var teamReviewItem = form.addMultipleChoiceItem()
    .setTitle('Does your team still do code reviews for AI-generated code?')
    .showOtherOption(true)
    .setRequired(true);
  teamReviewItem.setChoiceValues([
    'Yes, same as for human-written code',
    'Yes, but lighter than before',
    'No, AI-generated code skips review',
    "I don't have a team",
    'Not applicable',
    PNTS
  ]);

  var testItem = form.addCheckboxItem()
    .setTitle('How do you test AI-generated code? (select all that apply)')
    .showOtherOption(true)
    .setRequired(true);
  testItem.setChoiceValues([
    'I write and run unit tests',
    'I run the existing test suite',
    'Manual testing',
    'I ask the AI to write tests for its own code',
    'Code review only',
    "I don't specifically test it",
    'Not applicable',
    PNTS
  ]);

  // ---------- Page 7: AI & your team ----------
  form.addPageBreakItem()
    .setTitle('AI & your team')
    .setHelpText('Students: think about classmates and project teams.');

  addEffectScale(form, 'Overall, what effect has AI had on collaboration within your team?');

  form.addMultipleChoiceItem()
    .setTitle('Since using AI, how often do you ask colleagues for help?')
    .setChoiceValues([
      'Much less often',
      'Less often',
      'About the same',
      'More often',
      'Much more often',
      'Not applicable',
      PNTS
    ])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('How has AI affected knowledge sharing in your team (mentoring, pair programming, asking questions)?')
    .setChoiceValues([
      'Greatly reduced it',
      'Somewhat reduced it',
      'No change',
      'Somewhat increased it',
      'Greatly increased it',
      'Not applicable',
      PNTS
    ])
    .setRequired(true);

  var shareItem = form.addMultipleChoiceItem()
    .setTitle('Do you share AI prompts, workflows, or custom agents with your teammates?')
    .showOtherOption(true)
    .setRequired(true);
  shareItem.setChoiceValues([
    'Regularly',
    'Sometimes',
    'Never',
    "I don't have teammates",
    PNTS
  ]);

  // ---------- Page 8: Your organization ----------
  form.addPageBreakItem()
    .setTitle('Your organization')
    .setHelpText('Students and researchers: answer about your university or program.');

  form.addMultipleChoiceItem()
    .setTitle("Which best describes your organization's AI policy?")
    .setChoiceValues([
      'AI use is encouraged and funded',
      'Allowed with restrictions',
      'Allowed, but no official guidance',
      'Discouraged or banned',
      'There is no policy',
      "I don't know",
      'Not applicable',
      PNTS
    ])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('Does your organization provide AI training?')
    .setChoiceValues([
      'Yes, formal training',
      'Yes, informal (tips, lunch & learns...)',
      'No',
      "I don't know",
      'Not applicable',
      PNTS
    ])
    .setRequired(true);

  form.addTextItem()
    .setTitle('Which AI tools (if any) are explicitly banned where you work or study?');

  // ---------- Page 9: Concerns & outlook (all respondents) ----------
  form.addPageBreakItem().setTitle('Concerns & outlook');

  form.addCheckboxItem()
    .setTitle('What are your biggest concerns about AI in software work? (select all that apply)')
    .setChoiceValues([
      'Security vulnerabilities',
      'Data privacy / leaks',
      'Intellectual property & licensing',
      'Job displacement',
      'Skill erosion',
      'Over-reliance on AI',
      'Incorrect output / hallucinations',
      'Bias & ethics',
      'Environmental impact',
      'None of these',
      PNTS
    ])
    .setRequired(true);

  form.addScaleItem()
    .setTitle("How worried are you about AI's impact on your job or career prospects?")
    .setBounds(1, 5)
    .setLabels('Not worried at all', 'Extremely worried')
    .setRequired(false);

  form.addMultipleChoiceItem()
    .setTitle("In 3 years, how do you expect AI's role in your daily work to evolve?")
    .setChoiceValues([
      'It will shrink',
      'It will stay about the same',
      'It will grow somewhat',
      'It will grow significantly',
      'AI will perform most of my current tasks',
      PNTS
    ])
    .setRequired(true);

  form.addCheckboxItem()
    .setTitle('If you do NOT currently use AI tools, why not? (select all that apply - skip if you use AI)')
    .setChoiceValues([
      'Company policy forbids it',
      'Privacy or security concerns',
      'Not useful for my work',
      'Output quality concerns',
      'Ethical concerns',
      'Cost',
      "I haven't had the chance to try",
      PNTS
    ])
    .showOtherOption(true);

  form.addParagraphTextItem()
    .setTitle('What is the biggest change AI has made in the way you work? (optional)');

  // ---------- Skip logic ----------
  // Non-users (and those who prefer not to say) jump from the adoption question
  // straight to "Concerns & outlook".
  // GUARANTEE: the options are created no matter what. If navigation wiring
  // fails (twice), we fall back to plain options + loud manual instructions.
  var usageOptions = ['Yes, regularly', 'Yes, occasionally', 'I tried, but stopped', 'No, never', PNTS];
  var skipLogicOk = false;
  for (var attempt = 1; attempt <= 2 && !skipLogicOk; attempt++) {
    try {
      var usageItem = findMultipleChoiceByTitle(form, 'Do you use AI tools');
      var outlookPage = findPageBreakByTitle(form, 'Concerns & outlook');
      usageItem.setChoices([
        usageItem.createChoice(usageOptions[0]),
        usageItem.createChoice(usageOptions[1]),
        usageItem.createChoice(usageOptions[2], outlookPage),
        usageItem.createChoice(usageOptions[3], outlookPage),
        usageItem.createChoice(usageOptions[4], outlookPage)
      ]);
      skipLogicOk = (usageItem.getChoices().length === usageOptions.length);
    } catch (e) {
      Logger.log('Skip logic attempt ' + attempt + ' failed: ' + e);
      if (attempt < 2) Utilities.sleep(2000);
    }
  }
  if (skipLogicOk) {
    Logger.log('Skip logic: OK - "Do you use AI tools..." has 5 options, the last 3 jump to "Concerns & outlook".');
  } else {
    var fallbackItem = findMultipleChoiceByTitle(form, 'Do you use AI tools');
    fallbackItem.setChoiceValues(usageOptions);
    Logger.log('!!! The 5 options of "Do you use AI tools..." were created WITHOUT skip logic.');
    Logger.log('!!! Wire it manually (2 min): form editor -> that question -> three-dot menu -> ' +
      '"Go to section based on answer" -> set "I tried, but stopped", "No, never" and ' +
      '"Prefer not to say" to the section "Concerns & outlook".');
  }

  // ---------- Responses spreadsheet (linked automatically) ----------
  var sheet = SpreadsheetApp.create('AI Survey - Responses (open data)');
  var sheetNote = sheet.getUrl() + ' (linked automatically)';
  try {
    form.setDestination(FormApp.DestinationType.SPREADSHEET, sheet.getId());
  } catch (e) {
    sheetNote = sheet.getUrl() +
      ' (NOT linked - link it manually: form editor -> Responses -> Link to Sheets)';
  }

  Logger.log('=== Survey created ===');
  Logger.log('Edit form:        ' + form.getEditUrl());
  Logger.log('Public form URL:  ' + form.getPublishedUrl());
  Logger.log('Responses sheet:  ' + sheetNote);
  Logger.log('Next steps: see survey/setup.md');
}

/** Adds a 1-5 "Much worse / Much better" scale question (optional - skippable). */
function addEffectScale(form, title) {
  form.addScaleItem()
    .setTitle(title)
    .setBounds(1, 5)
    .setLabels('Much worse', 'Much better')
    .setRequired(false);
}

/** Re-fetches a fresh MultipleChoiceItem handle by title prefix. */
function findMultipleChoiceByTitle(form, titlePrefix) {
  var items = form.getItems(FormApp.ItemType.MULTIPLE_CHOICE);
  for (var i = 0; i < items.length; i++) {
    if (items[i].getTitle().indexOf(titlePrefix) === 0) {
      return items[i].asMultipleChoiceItem();
    }
  }
  throw new Error('Multiple choice item not found: ' + titlePrefix);
}

/** Re-fetches a fresh PageBreakItem handle by exact title. */
function findPageBreakByTitle(form, title) {
  var items = form.getItems(FormApp.ItemType.PAGE_BREAK);
  for (var i = 0; i < items.length; i++) {
    if (items[i].getTitle() === title) {
      return items[i].asPageBreakItem();
    }
  }
  throw new Error('Page break not found: ' + title);
}
