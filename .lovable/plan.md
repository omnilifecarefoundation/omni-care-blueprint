# Palette Refresh v2 — Indigo + Yellow

## Why
The current palette still reads as one strong electric blue everywhere. Your reference brand kit is built on three indigos (light, dark, deep) on white. We'll adopt that indigo family as the dominant brand color and keep bright yellow as the single accent — so the site stays warm and "community in India" yellow moments still pop.

## New Core Palette (from your brand kit + yellow)

| Role | Hex | Source |
|---|---|---|
| Canvas / White | `#FFFFFF` | Kit white |
| Soft canvas | `#F4F2FE` | Tint of light indigo for section bands |
| Hairline | `#E4E0F7` | Soft indigo border |
| Ink (headings/body) | `#1C0060` | Kit "Deep Indigo" |
| Ink muted | `#5A4E8C` | Desaturated deep indigo |
| **Primary — Light Indigo** | `#735BF6` | Kit "Light Indigo" — buttons, links, focus |
| **Primary deep — Dark Indigo** | `#3F00AC` | Kit "Dark Indigo" — hover, navy headings |
| Primary darkest | `#1C0060` | Kit "Deep Indigo" — footer bg, strong text |
| **Accent — Yellow** | `#FFD600` | Kept from previous decision |
| Accent deep (yellow hover) | `#E6C000` | Hover for yellow CTAs |

Net effect: indigo replaces the loud cyan-blue, depth comes from layering three indigos instead of stacking similar mid-blues, and yellow stays as the single warm spark.

## Per-Pillar Accents (distinct, harmonized to indigo + yellow)

| Pillar | Color | Hex | Rationale |
|---|---|---|---|
| Mental Wellbeing | Yellow | `#FFD600` | Warmth, vitality |
| Social Growth | Light Indigo | `#735BF6` | Brand primary, partnerships |
| Inclusive Care | Magenta | `#DD1367` | SDG 10, only non-indigo/yellow accent so it doesn't collapse into the indigo family |
| Human Potential | Deep Indigo | `#1C0060` | Depth, knowledge |

## Where Each Color Shows Up

- **White**: page canvas, cards
- **Deep indigo `#1C0060`**: all headings, body text, footer background
- **Light indigo `#735BF6`**: primary buttons, links, focus ring, "Social Growth" pillar
- **Dark indigo `#3F00AC`**: button hover, secondary accents, navigation active states
- **Yellow `#FFD600`**: hero italic accent ("community in India"), stat numbers, secondary CTA, "Mental Wellbeing" pillar
- **Magenta**: only on "Inclusive Care" pillar chip/icon
- **Soft indigo bands**: alternating section backgrounds (replaces flat white-on-white blocks for rhythm)

## Files to Change

**`src/styles.css`** — single source of truth. Update tokens in `:root`:
- `--primary` → `#735BF6`, `--primary-glow` → `#9485F9`, `--primary-deep` → `#3F00AC`
- `--ink` → `#1C0060`, `--ink-muted` → `#5A4E8C`, `--hairline` → `#E4E0F7`
- `--secondary` / `--sage` → `#F4F2FE`
- `--pillar-mental` `#FFD600`, `--pillar-social` `#735BF6`, `--pillar-inclusive` `#DD1367`, `--pillar-human` `#1C0060`
- `--gold` stays `#FFD600`
- shadcn mappings (`--background`, `--foreground`, `--muted`, `--accent`, `--border`, `--ring`, etc.) repointed to new palette
- Hex literals in `.btn-primary:hover`, `.btn-coral:hover`, `.btn-on-dark:hover`, card hover shadow → repointed to `#3F00AC` / `#E6C000` / indigo-tinted shadow

**No component changes needed** — every component reads from tokens, so the swap propagates automatically.

## Out of Scope
- No typography change in this round. (The brand kit suggests General Sans + Excon; if you want me to also swap to those fonts, say so and I'll add it as a follow-up.)
- No layout or copy changes
- Hero "community in India" stays bright yellow italic
- Logo image stays as-is (multicolor mark)

## Verification
After the swap I'll screenshot homepage hero, pillars section, and footer to confirm the page reads as **white-dominant, deep-indigo text, light-indigo accents, yellow highlights**, with four visually distinct pillars and no leftover electric blue.
