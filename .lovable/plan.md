## Goal
On the home page "Aligned with the UN SDGs" section, give each SDG card a subtle indicator using that goal's official UN color. Keep the existing card layout, hierarchy, and primary (SDG 03) ink treatment intact — just make the colors readable at a glance.

## Official UN SDG colors to use
- SDG 03 Good Health: `#4C9F38` (green)
- SDG 04 Quality Education: `#C5192D` (red)
- SDG 05 Gender Equality: `#FF3A21` (orange-red)
- SDG 10 Reduced Inequalities: `#DD1367` (magenta)
- SDG 16 Peace & Justice: `#00689D` (blue)
- SDG 17 Partnerships: `#19486A` (deep blue)

## Design moves (applies make-interfaces-feel-better)
1. **Color dot before "SDG NN"**: 8px circle in the official color, sitting left of the eyebrow label. On the primary (ink) card the dot stays full-color — it pops against dark.
2. **Top accent bar**: a 3px full-width bar at the top of each card in the SDG color, with `border-radius` matching the card's inner top corners (concentric radius). Subtle but unmistakable as an indicator.
3. **Hover lift uses the SDG color**: card border on hover shifts from `border-hairline` to a 20% alpha of the SDG color; hover shadow tinted with the same color at low opacity. Keeps depth via layered shadows instead of hard borders.
4. **Tabular-nums + balanced wrap** already present — keep.
5. **Reduced-motion + a11y**: dot gets `aria-hidden`; SDG number remains in text; contrast preserved (titles stay `text-ink` / `text-snow`).

## Implementation
- Edit only `src/routes/index.tsx` `SDGs()` component (~lines 497–562).
- Add `color` field to each goal object with the hex above.
- Render top accent bar as an absolutely positioned `<span>` inside the card (card becomes `relative overflow-hidden`).
- Render dot as inline `<span>` with `style={{ backgroundColor: g.color }}`.
- Use inline `style` for the SDG hexes (they are data, not theme tokens) — semantic tokens still drive the card chrome.
- No new files, no token changes in `styles.css`, no copy changes.

## Out of scope
- Other sections, programme pages, what-we-do pillar pages.
- Adding SDG icons/illustrations.
- Changing the SDG list or descriptions.