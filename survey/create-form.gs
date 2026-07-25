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
  'Windsurf / Codeium',
  'Amazon Q Developer',
  'Tabnine',
  'JetBrains AI Assistant',
  'Microsoft 365 Copilot',
  'Perplexity',
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

function createSurveyForm() {
  var form = FormApp.create('AI Usage in the Software Industry — 2026');
  form.setDescription(
    'How do software engineers, developers, DevOps/SREs, QA, students and researchers ' +
    'really use AI? This anonymous, open survey collects ~5 minutes of your experience ' +
    'and publishes ALL results as open data (CC0) with a real-time public dashboard. ' +
    'No email or personal data is collected.'
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
    .setShowOther(true)
    .setRequired(true);
  roleItem.setChoiceValues(ROLES);

  form.addMultipleChoiceItem()
    .setTitle('How many years of experience do you have in the software industry?')
    .setChoiceValues([
      'Student / not yet working in the industry',
      'Less than 2 years',
      '2-5 years',
      '6-10 years',
      '11-15 years',
      '16+ years'
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
      'Other'
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
      'Not applicable'
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
      'Energy & utilities'
    ])
    .setShowOther(true)
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
      'Prefer not to say'
    ])
    .setRequired(true);

  form.addTextItem()
    .setTitle('Which country? (optional)');

  // ---------- Page 3: AI tools & adoption ----------
  form.addPageBreakItem().setTitle('AI tools & adoption');

  var usage = form.addMultipleChoiceItem()
    .setTitle('Do you use AI tools for your work or studies?')
    .setRequired(true);
  // Choices (with skip logic) are attached at the end, once the target page exists.

  form.addCheckboxItem()
    .setTitle('Which AI tools do you use? (select all that apply)')
    .setChoiceValues(AI_TOOLS)
    .setShowOther(true)
    .setRequired(true);

  form.addListItem()
    .setTitle('Which one do you rely on the most?')
    .setChoiceValues(AI_TOOLS)
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('How often do you use AI tools?')
    .setChoiceValues([
      'Multiple times per day',
      'About once a day',
      'A few times a week',
      'A few times a month',
      'Rarely'
    ])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('Who pays for the AI tools you use?')
    .setChoiceValues([
      'My employer provides paid tools',
      'I pay for them personally',
      'I only use free tiers',
      'A mix of employer and personal'
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
      'Mobile app'
    ])
    .setRequired(true);

  // ---------- Page 4: How you use AI ----------
  form.addPageBreakItem().setTitle('How you use AI');

  form.addCheckboxItem()
    .setTitle('For which tasks do you use AI? (select all that apply)')
    .setChoiceValues(TASKS)
    .setShowOther(true)
    .setRequired(true);

  form.addListItem()
    .setTitle('Which task benefits the most from AI?')
    .setChoiceValues(TASKS)
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('How much time does AI save you per week?')
    .setChoiceValues([
      'None',
      'Less than 1 hour',
      '1-5 hours',
      '6-10 hours',
      'More than 10 hours'
    ])
    .setRequired(true);

  // ---------- Page 5: Impact on your work ----------
  form.addPageBreakItem().setTitle('Impact on your work');

  addEffectScale(form, 'Overall, what effect has AI had on your productivity?');
  addEffectScale(form, 'What effect has AI had on the quality of your work?');
  addEffectScale(form, 'What effect has AI had on your learning and skill growth?');
  addEffectScale(form, 'What effect has AI had on your job satisfaction?');

  form.addMultipleChoiceItem()
    .setTitle('Do you review AI-generated code before using it?')
    .setChoiceValues(['Always', 'Usually', 'Sometimes', 'Rarely', 'Never'])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('Has AI-generated output ever caused a bug or incident that reached production?')
    .setChoiceValues([
      'Yes, a serious incident',
      'Yes, minor issues',
      'No',
      'Not sure'
    ])
    .setRequired(true);

  // ---------- Page 6: Your organization ----------
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
      'Not applicable'
    ])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('Does your organization provide AI training?')
    .setChoiceValues([
      'Yes, formal training',
      'Yes, informal (tips, lunch & learns...)',
      'No',
      "I don't know"
    ])
    .setRequired(true);

  form.addTextItem()
    .setTitle('Which AI tools (if any) are explicitly banned where you work or study?');

  // ---------- Page 7: Concerns & outlook (all respondents) ----------
  var pageOutlook = form.addPageBreakItem()
    .setTitle('Concerns & outlook');

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
      'None of these'
    ])
    .setRequired(true);

  form.addScaleItem()
    .setTitle("How worried are you about AI's impact on your job or career prospects?")
    .setBounds(1, 5)
    .setLabels('Not worried at all', 'Extremely worried')
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle("In 3 years, how do you expect AI's role in your daily work to evolve?")
    .setChoiceValues([
      'It will shrink',
      'It will stay about the same',
      'It will grow somewhat',
      'It will grow significantly',
      'AI will perform most of my current tasks'
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
      "I haven't had the chance to try"
    ])
    .setShowOther(true);

  form.addParagraphTextItem()
    .setTitle('What is the biggest change AI has made in the way you work? (optional)');

  // ---------- Skip logic ----------
  // Non-users jump from the adoption question straight to "Concerns & outlook".
  usage.setChoices([
    usage.createChoice('Yes, regularly'),
    usage.createChoice('Yes, occasionally'),
    usage.createChoice('I tried, but stopped', pageOutlook),
    usage.createChoice('No, never', pageOutlook)
  ]);

  // ---------- Responses spreadsheet (linked automatically) ----------
  var sheet = SpreadsheetApp.create('AI Survey - Responses (open data)');
  form.setDestination(FormApp.DestinationType.SPREADSHEET, sheet.getId());

  Logger.log('=== Survey created ===');
  Logger.log('Edit form:        ' + form.getEditUrl());
  Logger.log('Public form URL:  ' + form.getPublishedUrl());
  Logger.log('Responses sheet:  ' + sheet.getUrl());
  Logger.log('Next steps: see survey/setup.md');
}

/** Adds a required 1-5 "Much worse / Much better" scale question. */
function addEffectScale(form, title) {
  form.addScaleItem()
    .setTitle(title)
    .setBounds(1, 5)
    .setLabels('Much worse', 'Much better')
    .setRequired(true);
}
