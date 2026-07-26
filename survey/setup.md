# Launching the survey — step by step

You only need a Google account. Total time: ~15 minutes.

## 1. Generate the Google Form

1. Go to <https://script.google.com> → **New project**.
2. Delete the default code and paste the contents of [`create-form.gs`](create-form.gs).
3. Save, then select the `createSurveyForm` function and click **Run**.
4. Google will ask you to authorize the script (Forms + Sheets scopes) — accept.
5. Open **Executions** (left sidebar) or **View → Logs**: you'll find three URLs:
   - **Edit form** — your admin link
   - **Public form URL** — the link to share with respondents
   - **Responses sheet** — a Google Sheet already linked to the form

## 2. Verify the form

Open the **Public form URL** and submit one test response. Check that:

- [ ] The consent question is required
- [ ] Answering "No, never" or "I tried, but stopped" to *"Do you use AI tools…"* skips you directly to **Concerns & outlook**
- [ ] The test row appears in the responses sheet
- [ ] No email is requested anywhere

Then delete the test row from the sheet (right-click the row → Delete).

## 3. Make the data public (open data)

The responses Sheet is the single source of truth for the dashboard and for
anyone who wants the raw data.

1. Open the responses sheet → **Share** → **General access** →
   **Anyone with the link** → **Viewer**.
2. Copy the sharing link and paste it in the README (replace the `TODO` placeholders).

> Only the sheet is public. Respondents' Google identities are never collected,
> so nothing personal is exposed.

## 4. Build the public dashboard

Follow [`analysis/looker-studio-setup.md`](../analysis/looker-studio-setup.md).
~30 minutes, no code.

## 5. Share the survey

Suggested channels: LinkedIn, X/Twitter, Reddit (r/programming, r/devops,
r/ExperiencedDevs), Hacker News (Show HN), Discords/Slacks, your university
mailing lists. When posting, emphasize:

- 100% anonymous, under 10 minutes
- Results are **open data**, published in **real time** on a public dashboard

## 6. During collection

- **Do not edit questions in the live form.** Editing a question renames the
  column in the sheet and breaks the dashboard mapping. Batch changes instead:
  close edition N, duplicate the form, apply changes, open edition N+1.
- Check occasionally for junk responses (the form is anonymous; obvious spam
  rows can be deleted from the sheet).
- Export a CSV snapshot of the sheet weekly into `data/exports/` (File →
  Download → CSV) so the raw data is versioned in this repo too.
