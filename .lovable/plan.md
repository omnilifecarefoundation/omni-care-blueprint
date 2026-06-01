## Typography swap

Replace the current General Sans / Excon stack with the pairing from your reference:

- **Fira Sans** (700) — headings (h1–h4)
- **Tillana** (500/600 italic) — display accents / italic emphasis (e.g. the italicized "dignified care" in the hero, section intro eyebrows where italic is used)
- **Telex** (400) — body copy, lead paragraphs, UI text

All three are available on Google Fonts.

### Changes

**`src/routes/__root.tsx`**
- Replace the Fontshare `<link>` tags (General Sans + Excon) with Google Fonts preconnect + a single stylesheet link for:
  - `Fira+Sans:wght@400;500;600;700`
  - `Tillana:wght@500;600;700`
  - `Telex` (single weight 400)

**`src/styles.css`**
- `--font-sans` → `"Fira Sans", system-ui, sans-serif` (headings + UI)
- `--font-body` → `"Telex", system-ui, sans-serif` (body)
- `--font-serif` → `"Tillana", Georgia, serif` (used by `.italic` display moments / accent type)
- Keep `--font-mono` as-is.
- Adjust headline tuning for Fira Sans: `font-weight: 600` on h1–h4 (Fira Sans 500 reads light at display sizes), keep `letter-spacing: -0.02em`. Body stays at default weight (Telex only ships 400).
- Where the design uses `italic` inside a headline (hero "dignified care"), add a utility/class so italic spans pick up `var(--font-serif)` (Tillana) instead of italicizing Fira Sans — Fira Sans italic looks very different from the reference; Tillana provides the warm italic shown in your image.

### Out of scope
- No color, layout, or component changes.
- No logo or copy changes.

### Verification
- After build, spot-check hero headline (Fira Sans bold + Tillana italic accent), section intros, body paragraphs (Telex), buttons/pills (Fira Sans), and the mobile CTA bar.
