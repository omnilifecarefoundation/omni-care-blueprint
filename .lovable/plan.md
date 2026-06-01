
# Home page v3 — international NGO, plain English

## What's wrong with the current home page

- Reads like a literary magazine, not a non-profit. Ogilvy says talk like a human — "Health doesn't live in silos. Neither should the care that reaches you." is a writer's sentence, not a donor's sentence.
- Visual language is one note: cream canvas + thin hairlines + italic display serif on every section. That's "vibe-coded editorial template," not international-NGO. Gates, BRAC, charity:water, Wellcome, MSF all alternate dark/light bands, use real photography, and put **one** number or **one** quote per section, not paragraphs of italics.
- The only section the user actually likes is §07 Closing CTA — the dark indigo band. That should become the page's signature, not a one-off footer.
- Eyebrows like "§01 — Founding Moment" and the oversized outline numerals look "designed at" the user.

## The new direction

Reference vocabulary: **Gates Foundation** (confident dark hero, big plain headline, real photo), **charity:water** (full-bleed image + 1-sentence promise), **BRAC** (clean stat blocks, no italics), **Wellcome** (mixed light/dark sections with strong typographic hierarchy).

Three rules for this pass:
1. **Dark-ink (deep indigo `--ink` / `--primary-deep`) becomes the dominant brand surface** — used in hero, the partner band, and the closing CTA. Cream is the connective tissue, not the hero.
2. **Plain English everywhere.** Sentences a 14-year-old understands. No "the care that reaches you." No "§ §." No oversized outline italics.
3. **One idea per section.** Either one number, one photo, one quote, or one short paragraph. Never all four.

## New section order

```text
1. Hero (dark indigo)        Big plain headline + sub + 2 CTAs + real photo
2. What we do (light)        4 pillars as a clean 4-up grid, plain labels
3. Why this matters (light)  3 sourced facts about India's care gap — 1 line each
4. Our programmes (light)    4 flagship programmes, simple cards w/ photo
5. From the founders (light) Short letter — 120-160 words, signed, no italics
6. Partner with us (dark)    3 audiences: CSR / Institutions / Individuals
7. Trust & compliance        12A / 80G / CSR-1 with 1-line plain explanation
8. Closing CTA (dark)        Keep this — the section the user likes
9. Newsletter strip          Single line + email field
```

Removed: Founding Moment editorial strip, Omni Care diagram section (moved to /about), oversized italic numerals, "§" eyebrows, the founders' 5-commitment manifesto block (compressed into the short letter).

## Copy rewrites (representative)

| Old | New |
|---|---|
| "Health doesn't live in silos. *Neither should the care that reaches you.*" | **"Better health, closer to home."** Sub: "We're a new Mumbai-based non-profit building four kinds of care — mental health, community health, inclusive care, and women's health — that work together instead of separately." |
| "§01 — Founding Moment" | "What we are today" |
| "Four pillars. One integrated system of care." | "Four kinds of care. One team." |
| "You can fund a foundation at year ten. Or you can help shape one at month one." | **"Help build it from day one."** Sub: "We're registered, ready, and looking for our first partners." |
| Newsletter: "Quarterly field notes from Mumbai…" | "Get an update every three months. No spam." |

Tone target: clear, warm, factually honest. No literary flourishes. No more than one italic word per section.

## Visual system changes (frontend-design)

- **Hero**: full-width band, `bg-ink` (deep indigo), white text, real community photo on the right with a soft inner outline. Headline `font-sans` weight 600 — no italics. Below the CTAs: a single thin row of compliance chips (`12A · 80G applied · CSR-1 in progress · Mumbai`).
- **Section rhythm**: light → light → light → dark (Partner) → light → dark (Closing). Two dark anchors instead of one.
- **Cards**: square-ish 4:5 photo on top, 1-line label, 1-sentence description. Hover = photo zoom 1.03, card lifts 2px, hairline darkens. No expanding pills, no rotating arrows.
- **Numerals / stats**: when used, `font-sans` tabular, big but not italic. Replaces the outline-italic numerals.
- **Removed visual tropes**: §-eyebrows, oversized outline italics, color-rail-on-hover, rotating circular arrows in the pillars row.

## Make-interfaces-feel-better pass

- Stagger reveals 80ms per item in each grid (max 4 stops, then stop staggering).
- All images: `outline outline-1 -outline-offset-1 outline-ink/10` + lazy-loaded.
- All buttons via `PillButton` (already has `active:scale-[0.96]`).
- `tabular-nums` on every number.
- `text-wrap: balance` on H1/H2, `text-wrap: pretty` on body paragraphs.
- Specific transitions only — never `transition-all`.
- Min 44px hit area on every link/button, including footer mono links.
- Verify single H1, alt text on hero + programme photos, retain `<head>` SEO.

## Files touched

- **Rewrite**: `src/routes/index.tsx` (sole code file).
- **No changes** to `styles.css`, tokens, components, or routes. Dark hero/partner bands use existing `--ink` and `--snow` tokens.
- Pillars + programmes data continues to come from `@/lib/site`.

## Out of scope

- No new sub-routes, no new images generated, no real impact numbers (we still have none), no `styles.css` token changes.

## Verification after build

- Scan rendered page for: "§", "doesn't live in silos", outline italic numerals — must be zero.
- Headlines should read naturally when said out loud — no literary inversions.
- Mobile (<768px): dark hero stacks photo below, CTAs full-width, compliance chips wrap cleanly, no horizontal scroll.
- The §07 closing band stays visually intact — that's the user's anchor.
