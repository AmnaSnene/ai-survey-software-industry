# Open data

All survey responses are published as **open data under
[CC0 1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/)** —
public domain dedication. Anyone may use, remix, and republish the data,
including commercially, without asking permission. Attribution is appreciated
but not required.

## Access

| What | Where |
|------|-------|
| Raw responses (live Google Sheet) | `TODO: paste shared sheet link after launch` |
| CSV snapshots (versioned) | `data/exports/` in this repo (exported weekly during collection) |
| Interactive dashboard | `TODO: paste Looker Studio link` |

## Privacy guarantees

- The form **does not collect emails, names, or any account identifier**.
- The only free-text fields are: country (optional), banned tools (optional),
  and the final open question. Before publishing exports, skim these columns
  and redact anything that could identify a person or a specific company.
- Timestamps are kept at minute precision, which carries no re-identification
  risk at the expected scale.

## Column reference

See [`data-dictionary.md`](data-dictionary.md).

## Reuse ideas

- Cross-tabulate tool adoption by role, seniority, region, or company size
- Compare reported time saved (Q16) with impact scores (learning Q17,
  challenge Q18, motivation Q19)
- Compare chat vs agentic workflows (Q13) with impact scores and IDE usage (Q14)
- Study verification habits: reviewing (Q21) and reading depth (Q22) vs.
  reported production incidents (Q20)
- Explore team effects: collaboration change (Q25) vs. help-seeking (Q26)
  and knowledge sharing (Q27)
- Study non-adopters: concerns (Q31) vs. stated reasons (Q34)
- Track responses over time after each wave of promotion
