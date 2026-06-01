
# Site-wide card system — roll out the home page pattern

Apply the rounded, soft-shadow card language from the home page across every route and shared component. Audited via `make-interfaces-feel-better` (concentric radius, shadows over hard borders, specific transitions, hit areas) and `frontend-design` (consistent surface vocabulary).

## The system (lock these tokens — every card on the site must use one of three)

| Tier | Use for | Classes |
|---|---|---|
| **Primary card** | Programmes, features, anything with media | `rounded-2xl bg-snow border border-hairline overflow-hidden shadow-[0_1px_2px_rgba(28,0,96,0.04),0_8px_24px_-16px_rgba(28,0,96,0.12)] transition-[border-color,box-shadow,transform] duration-300 ease-out hover:-translate-y-1 hover:border-ink/40 hover:shadow-[0_4px_8px_rgba(28,0,96,0.06),0_22px_44px_-22px_rgba(28,0,96,0.32)]` |
| **Secondary card** | Compliance items, stat tiles, info blocks | `rounded-xl bg-snow border border-hairline p-6 shadow-[0_1px_2px_rgba(28,0,96,0.04)] transition-[border-color,box-shadow] duration-300 ease-out hover:border-ink/25 hover:shadow-[0_1px_2px_rgba(28,0,96,0.04),0_10px_24px_-18px_rgba(28,0,96,0.18)]` |
| **Dark-band card** | Cards on `bg-ink` sections | `rounded-2xl border border-snow/15 bg-snow/[0.04] p-7 lg:p-8 transition-[background-color,border-color,transform] duration-300 ease-out hover:-translate-y-0.5 hover:border-snow/30 hover:bg-snow/[0.08]` |

Plus three universal rules:
1. **No `gap-px` divider grids** — replace with real gaps (`gap-4` / `gap-5` / `gap-6`).
2. **Concentric radius** — images inside primary cards: card uses `overflow-hidden rounded-2xl`, image fills it (no separate radius on the image).
3. **All hero / large feature photos**: `rounded-2xl` (not `rounded-md` or `rounded-lg`).

## Shared components (highest impact — touch first)

| File | Change |
|---|---|
| `src/components/ProgramCard.tsx` | Wrap the whole card in primary-card classes; remove `rounded-2xl` from inner image (let parent clip). Photo block becomes `aspect-[5/3]` to match new home page. |
| `src/components/CTABand.tsx` | Apply dark-band card style if it uses tiles. |
| `src/components/PageHero.tsx` | If it renders a photo, bump radius to `rounded-2xl`. |
| `src/components/Footer.tsx` | Any boxed CTA blocks → secondary card. |
| `src/components/MobileCTABar.tsx` | Pill chrome stays, but any `rounded-md` → `rounded-full` consistency check. |

## Routes to update

Group by what they show. Each gets a sweep applying the table above.

**A. Routes with media cards → primary card**
- `src/routes/programs.index.tsx` (uses `ProgramCard` — fixed by component edit)
- `src/routes/programs.$slug.tsx`
- `src/routes/what-we-do.index.tsx`
- `src/routes/what-we-do.$pillar.tsx`
- `src/routes/about.leadership.tsx` (people cards)
- `src/routes/impact.index.tsx` / `impact.stories.tsx` (story cards)
- `src/routes/newsroom.tsx`

**B. Routes with info tiles → secondary card**
- `src/routes/about.compliance.tsx`
- `src/routes/about.omni-care-model.tsx`
- `src/routes/about.values.tsx`
- `src/routes/about.vision-mission.tsx`
- `src/routes/about.our-story.tsx`
- `src/routes/about.careers.tsx`
- `src/routes/donation-policy.tsx`, `privacy-policy.tsx`, `terms.tsx`, `safeguarding-policy.tsx`, `accessibility.tsx` (any boxed callout)

**C. Routes with dark CTA sections → dark-band card**
- `src/routes/partner.csr.tsx`
- `src/routes/get-involved.index.tsx` / `get-involved.volunteer.tsx`
- `src/routes/donate.tsx`

**D. Form pages → secondary card + rounded inputs**
- `src/routes/contact.tsx`
- `src/routes/donate.tsx` (form panel)
- All form inputs: keep `rounded-full` for single-line, `rounded-xl` for textareas; add `shadow-[inset_0_1px_2px_rgba(28,0,96,0.04)]` resting state.

**Untouched routes** (no card surfaces or already correct):
- `src/routes/__root.tsx`, `src/routes/index.tsx` (already done), `src/routes/sitemap.tsx`, `src/routes/sitemap[.]xml.ts`, `src/routes/design-ui-inspo.tsx` (internal reference page).

## Make-interfaces-feel-better sweep (every file touched)

- Replace any `transition-all` with specific property lists (`border-color`, `box-shadow`, `transform`, `background-color`).
- All card images get `outline outline-1 -outline-offset-1 outline-ink/10`.
- Card titles use `text-balance`; body uses `text-pretty`.
- Min 44px hit area on every card `<Link>` — full-tile links already satisfy this; verify small mono "Read more" links sit inside the parent tile link, not floating beside it.
- Numbers/stats use `tabular-nums`.

## Frontend-design sweep (every file touched)

- One card tier per grid — never mix primary and secondary radii in the same row.
- Section rhythm rule from home page extended: when a route lives on `bg-canvas`, use **secondary** cards on `bg-snow`; when on `bg-sage`, use **primary** cards on `bg-snow`; when on `bg-ink`, use **dark-band** cards. No new colours.
- Strip any literary italics (`font-display-italic`) in body copy on these routes — keep them only for the single hero word per page, matching home page restraint.

## Out of scope

- Copy rewrites on subpages (only home page got Ogilvy pass).
- Colour token changes.
- shadcn UI primitives in `src/components/ui/*` (they're consumed via wrappers; updating them risks cross-app regressions).
- Header / nav surfaces (they're already pill-based and feel right).

## Verification after build

- Click through each route in the table above; every card should be rounded with a faint resting shadow and a soft hover lift.
- No `gap-px` grids remain (`rg "gap-px" src/routes src/components` should return only `design-ui-inspo.tsx` if anything).
- No `rounded-md` on hero photos or media cards (`rg "rounded-md" src/routes` ≈ zero on photo surfaces).
- Mobile (<768px): rounded tiles stack with proper gap; no edge-to-edge bleed.
- All hover/focus transitions stay smooth — no `transition: all` left on any touched file.

## Files touched (summary)

- 5 shared components (`ProgramCard`, `CTABand`, `PageHero`, `Footer`, `MobileCTABar`)
- ~20 route files across groups A–D
- No new files, no token changes, no shadcn edits
