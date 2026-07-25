# Contributing

Thanks for helping improve the survey! Here's how.

## Proposing or changing questions

1. **Open an issue first** describing the question, its options, and what
   analysis it enables. Keep in mind the design goals in
   [`survey/questions.md`](survey/questions.md): ~5 minutes total, anonymous,
   analysis-ready.
2. Once agreed, a PR must update **all three files together** so they never
   drift apart:
   - `survey/questions.md` (human-readable spec)
   - `survey/create-form.gs` (the generator script)
   - `data/data-dictionary.md` (column reference)

### Hard rule: never edit a live form

Editing a question in Google Forms renames the column in the responses sheet
and silently breaks dashboard mappings. Changes are batched between editions:

1. Close the current form to responses.
2. Re-run the updated `create-form.gs` to generate a new edition.
3. Update links in the README and note the edition in `data/`.

## Improving the analysis

- Share interesting cross-tabs or calculated fields for Looker Studio by
  opening an issue or PR against `analysis/`.
- If you publish an analysis based on this data, tell us — we'll link it from
  the README.

## Translations

The survey is English-only for now. If you want to maintain a translation,
open an issue — translated editions should be separate forms generated from a
translated copy of `create-form.gs`.
