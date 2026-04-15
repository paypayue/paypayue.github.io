---
name: sync-translations
description: "Syncs Docusaurus i18n translation files. Use when: adding or updating <Translate> IDs in MDX files; checking for missing translation keys; updating code.json translation files for locales en, es, pt; keeping i18n in sync after editing MDX content. Detects new Translate IDs, reports missing entries per locale, and adds translations to all code.json files."
argument-hint: "Optional: path to a specific MDX file or folder to scope the scan"
---

# Sync Translations

Keeps `i18n/*/code.json` files in sync with all `<Translate id="...">` entries used across the MDX docs.

## When to Use

- After adding or editing `<Translate>` components in any `.mdx` file
- Before building/deploying to catch missing translation keys
- When asked to "update translations", "sync i18n", or "add translation IDs"

## Workspace Layout

| Path | Purpose |
|------|---------|
| `docs/**/*.mdx` | Primary source — Portuguese default text |
| `i18n/*/docusaurus-plugin-content-docs/current/**/*.mdx` | Locale-specific MDX overrides |
| `i18n/pt/code.json` | Portuguese translations (matches MDX default text) |
| `i18n/en/code.json` | English translations |
| `i18n/es/code.json` | Spanish translations |

## Procedure

### Step 1 — Run the detection script

Run the script from the workspace root to identify all missing IDs:

```powershell
cd <workspace-root>
powershell -ExecutionPolicy Bypass -File .github/skills/sync-translations/scripts/find-missing-translations.ps1
```

The script outputs JSON with two keys:
- `foundIds` — every `<Translate>` ID found, with its Portuguese default text
- `missing` — per-locale map of IDs not yet present in `code.json`

### Step 2 — Review the report

Inspect the `missing` object. If all counts are 0, the files are already in sync — done.

### Step 3 — Add missing entries to each locale's code.json

For each locale that has missing entries, append the new keys **before the closing `}`** of `code.json`.

Follow this JSON entry format exactly:

```json
"<id>": {
  "message": "<translated text>",
  "description": "Translation for <id>"
}
```

#### Translation rules by locale

| Locale | Source for `message` value |
|--------|---------------------------|
| `pt`   | Copy the default text verbatim from the MDX (it is already in Portuguese) |
| `en`   | Translate the Portuguese default text to **English** |
| `es`   | Translate the Portuguese default text to **Spanish** |

> **Important:** Preserve proper nouns, brand names (MB WAY, MULTIBANCO, HPOS, WooCommerce, PayPay), and technical abbreviations unchanged in all locales.

### Step 4 — Validate

After editing, confirm the JSON is valid (no trailing commas, correct closing braces).
Re-run the script to confirm output shows `0 missing IDs` for every locale.

## Entry Template

```json
"integrations.woocommerce.features.example": {
  "message": "Translated text here",
  "description": "Translation for integrations.woocommerce.features.example"
}
```

## Notes

- The script scans both `docs/` and `i18n/` subtrees to catch IDs defined in locale-specific MDX overrides.
- IDs that already exist in `code.json` are never modified — only new ones are added.
- The `code.json` must remain valid JSON; always add a comma after the last existing entry before appending new ones.
