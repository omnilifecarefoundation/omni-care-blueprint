
# Home page audit — cards & surface polish

Audit run against `make-interfaces-feel-better` + `frontend-design`. Scope: cards and small surface details only. Hero copy, section order, dark-band rhythm and the §07 closing all stay untouched.

## What's off right now

The page is sharp-cornered everywhere. Every card and tile uses `border-radius: 0` (the design tokens are 4–16px but the components never apply them). For a non-profit aimed at warmth + trust, square 90°-corner cards read cold and "wireframe-y." Three specific failures:

1. **What we do** (pillar grid) — flat 4-up tiles, no radius, no shadow, separated only by 1px `bg-hairline` lines. Looks like a spreadsheet.
2. **Programmes** — cards have border + hover shadow, but `border-radius: 0` on both the outer card and the image, so the concentric-radius rule is violated (image and card share the same hard corner).
3. **Partner band** (dark) — same flat 3-up grid pattern, 1px snow/10 dividers, no radius. The dark indigo deserves softer, more deliberate card shapes to feel premium.

Other smaller misses:
- Hero photo uses `rounded-md` (~4px) — too tight against the generous spacing around it.
- Compliance / Trust 3-up uses the same flat-tile pattern as pillars.
- Newsletter input is `rounded-full` but the submit button is also `rounded-full` and the same height — fine, but the input border darkens on focus only; no resting-state warmth.
- Pillar tiles have a `gap-px` divider system AND no inner radius — so we can't just round corners without re-thinking the grid (rounded children inside a `gap-px` strip look broken).

## What to change

### 1. Programmes cards (biggest visual win)
- Outer card: `rounded-2xl` (16px), keep border, keep hover lift.
- Inner image wrapper: `rounded-t-2xl` only (concentric — same 16px on top corners).
- Add a subtle resting shadow `shadow-[0_1px_2px_rgba(28,0,96,0.04),0_8px_24px_-16px_rgba(28,0,96,0.12)]` so cards float a touch even before hover.
- Hover shadow stays, hover lift goes to `-translate-y-1` (more felt feedback).

### 2. Pillar grid (What we do)
- Drop the `gap-px` divider grid. Switch to `gap-4 lg:gap-5` between actual rounded tiles.
- Each tile: `rounded-2xl bg-snow border border-hairline p-7`.
- Hover: border darkens to `ink/30`, tile lifts `-translate-y-0.5`, subtle shadow appears.
- Keep the colored pill rail at top (`h-1.5 w-10 rounded-full`) — it already reads well.

### 3. Partner band cards (dark)
- Drop `gap-px` divider for `gap-4 lg:gap-5` rounded tiles.
- Each tile: `rounded-2xl bg-snow/[0.04] border border-snow/12 p-8`.
- Hover: `bg-snow/[0.07]` + border `snow/25`. Keeps the dark-band feel but tiles now read as distinct objects.
- Gold CTA arrow stays.

### 4. Trust / Compliance 3-up
- Same treatment: `gap-4` between `rounded-xl bg-snow border border-hairline p-6` tiles. Smaller radius (12px) than primary cards — they're secondary content.

### 5. Hero photo
- Bump `rounded-md` → `rounded-2xl` (16px). Matches programme cards and feels intentional against the wide negative space.

### 6. Newsletter
- Input gets a subtle inner shadow `shadow-[inset_0_1px_2px_rgba(28,0,96,0.04)]` at rest.
- Submit button: add `hover:shadow-[0_4px_12px_-4px_rgba(28,0,96,0.4)]` for tactile lift.

## Surface details checklist (applied to all touched cards)

- [x] Concentric radius — image wrapper top corners match card radius.
- [x] Shadows over hard borders — at rest, cards get a faint layered shadow so they don't rely on the border alone.
- [x] `outline outline-1 -outline-offset-1 outline-ink/10` on all card images (already present, verified kept).
- [x] All hover transitions remain specific (`transition-[border-color,box-shadow,transform,background-color]`), no `transition: all`.
- [x] Cards keep `text-balance` on titles, `text-pretty` on body.
- [x] Hit areas — all card `<Link>`s are full-tile, already ≥44px. Verified.

## Files touched

- **Edit only**: `src/routes/index.tsx` — four card grids (WhatWeDo, Programmes, PartnerBand, Trust), hero photo radius, newsletter input/button.
- No changes to copy, section order, dark/light rhythm, header, footer, or tokens in `styles.css`.

## Out of scope (per your "rest I like everything")

- Hero copy, dark-indigo brand surface, §07 closing band, founders' note, eyebrow style, typography pairing, color tokens.

## Verification after build

- Visually scan the home page top-to-bottom — every card should have rounded corners. No remaining 90° card on the page.
- Hover any programme card: lifts, deeper shadow, image scales — all three should fire together smoothly with no jank.
- Mobile (<768px): rounded tiles stack with proper gap, no edge-to-edge bleed, no horizontal scroll.
