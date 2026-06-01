# Palette Refresh — Omni Life Care Foundation

## Why
The current site leans almost entirely on electric blue (`#0066FF` + 4 blue tints). It reads corporate/tech rather than care-led, and the four pillars all share blue shades so they aren't visually distinguishable. You want SDG-aligned colors: **yellow, blue, dark blue, white**, with each of the four pillars getting its own accent.

## New Core Palette (SDG-aligned)

| Role | Hex | Notes |
|---|---|---|
| Canvas / Snow | `#FFFFFF` | Page background |
| Soft canvas | `#F5F8FC` | Section bands, muted surfaces |
| Ink (headings/body) | `#0A2A5E` | Deep navy — replaces current `#003D99` ink, slightly richer |
| Ink muted | `#5A6B85` | Neutral secondary text (not blue-tinted) |
| Hairline | `#E1E7F0` | Borders, dividers |
| **Primary — Blue** | `#0A6FD8` | SDG-style mid blue, slightly less neon than `#0066FF` |
| **Primary deep — Dark blue** | `#0A2A5E` | CTA hover, navy headings |
| **Accent — Yellow** | `#FFD600` | Bright yellow, kept from your last decision |
| Accent deep (yellow hover) | `#E6C000` | Hover state for yellow CTAs |

Net effect: still blue-led (trust, health), but warmer because white + yellow carry more weight; dark blue replaces "more blue" for depth instead of stacking 4 blue tints.

## Per-Pillar Accents (distinct, SDG-derived)

Each pillar gets its own identity color used in chips, icons, and section accents. All chosen to sit harmoniously with blue + yellow + white.

| Pillar | Color | Hex | SDG link |
|---|---|---|---|
| Mental Wellbeing | Yellow | `#FFD600` | SDG 3 vitality, warmth |
| Social Growth | Mid Blue | `#0A6FD8` | SDG 17 Partnerships |
| Inclusive Care | Magenta | `#DD1367` | SDG 10 Reduced Inequalities |
| Human Potential | Dark Blue | `#0A2A5E` | SDG 4 / 16 — depth, knowledge |

(Magenta is the one non-yellow-non-blue accent — needed so Inclusive Care doesn't collapse into the same blue family. It's pulled directly from official SDG 10 color.)

## Where Each Color Shows Up

- **White**: page canvas, cards
- **Dark blue (`#0A2A5E`)**: all headings, body text, primary navigation text, footer background
- **Blue (`#0A6FD8`)**: primary buttons, links, focus ring, "Social Growth" pillar
- **Yellow (`#FFD600`)**: hero italic accent ("community in India"), key stat numbers, secondary CTA, "Mental Wellbeing" pillar
- **Magenta**: only on "Inclusive Care" pillar chip/icon
- **Hairline grey**: borders, section dividers (replaces current `#D4E4FF` blue-tinted hairline so the page reads less blue overall)

## Files to Change

1. **`src/styles.css`** — single source of truth. Update tokens in `:root`:
   - `--primary`, `--primary-glow`, `--primary-deep`
   - `--ink`, `--ink-muted`, `--hairline`, `--sage`, `--secondary`
   - `--pillar-mental`, `--pillar-social`, `--pillar-inclusive`, `--pillar-human`
   - `--gold` stays `#FFD600`
   - shadcn mappings (`--background`, `--foreground`, `--muted`, `--accent`, `--border`, `--ring`, `--destructive` etc.) updated to match
   - button hover hex literals (`.btn-primary:hover`, `.btn-coral:hover`, `.btn-on-dark:hover`) repointed to new dark blue
   - card hover shadow tint updated from blue glow to neutral

2. **No component file changes needed** — every component already reads from tokens (`text-ink`, `bg-primary`, `text-gold`, `bg-pillar-*` etc.), so the palette swap propagates automatically.

## Out of Scope
- No layout changes
- No typography changes (Fira Sans / Tillana / Telex stay)
- No copy changes
- Hero "community in India" stays bright yellow italic as you set last turn

## Verification
After the edit I'll screenshot the homepage hero, pillars section, and footer to confirm the new balance reads as **white-dominant, dark-blue text, blue accents, yellow highlights** with four visually distinct pillars.