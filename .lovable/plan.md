# Plan — Programme pages (9 total, 8 new)

## Goal
Replace the generic `programs/$slug` fallback with dedicated, editorial-grade pages for every active programme. Match the depth, rhythm, and discipline of the existing `programs/research-impact-assessment` page. Honest copy — Omni Life Care is a new Mumbai foundation; no fabricated stats.

## Scope — 9 programmes

Already built (leave as reference, no changes):
- `research-impact-assessment` (Human Potential)

To build (8 new route files):
1. `community-mental-health` — Mental Wellbeing
2. `preventive-health-outreach` — Human Potential
3. `womens-health-lifecycle` — Inclusive Care
4. `disability-elderly-care` — Inclusive Care
5. `womens-wellness` — Inclusive Care
6. `training-capacity-building` — Human Potential
7. `scholarships-education` — Social Growth
8. `chw-development` — Social Growth

The dynamic `src/routes/programs.$slug.tsx` stays as a fallback for any future slug, but TanStack will prefer the specific file routes.

## Page template (every programme follows this structure)

Locked from `mem://design/home-style-system` and the research page. Section rhythm: `bg-ink → bg-canvas → bg-snow → bg-sage → bg-canvas → bg-snow → bg-ink CTA`. Every light section ends with `border-b border-hairline`.

1. **Hero (`bg-ink`)** — radial atmosphere, back-link to `/what-we-do`, pillar chip with coloured dot, H1 with one italic phrase, lead, two `PillButton`s (Partner / Volunteer or Donate). Per Ogilvy: brand + promise + news in the headline; one promise; specific.

2. **Honest editorial (`bg-canvas`)** — 12-col split (eyebrow left, 2-paragraph case right). States the problem and our position without overclaiming.

3. **Four commitments / method cards (`bg-snow`)** — 2x2 grid of numbered cards (01–04) on a `gap-px` hairline panel, exactly the research-page pattern. Each: what we will do + why it matters. (Five cards become a 2+3 grid only for `community-mental-health`.)

4. **How we work — methods ledger (`bg-sage`)** — definition list of 4 standard instruments / protocols / safeguards used by the programme (validated tools, consent, cost-per-outcome, referral path).

5. **First eighteen months timeline (`bg-canvas`)** — ordered list of 4 quarterly milestones. Honest cadence: methods → first cohort → baseline → public ledger.

6. **Partnerships block (`bg-snow`)** — two-col: who we want to work with (academic, municipal, community) with inline `link-arrow` to `/contact` or `/partner/csr`.

7. **Read next (`bg-canvas`)** — three related cards (pillar page, impact, compliance or sibling programme).

8. **`CTABand` variant="dark"`** — pillar-appropriate close (Partner CSR + Donate, or Partner CSR + Volunteer for workforce programmes).

Every block wrapped in `<FadeUp delay={i*70}>`. Headings use `text-balance`, body `text-pretty`, numbers `tabular-nums`. Buttons are `PillButton` only.

## Copy direction — Ogilvy applied

- **Positioning per programme**: psychological, not demographic. Mental Health = "the village holding its own ground." Preventive = "screening that ends with a treated condition, not a leaflet." Women's Lifecycle = "one record that follows her from menarche to menopause." Disability/Elderly = "the people the clinic hours were never written for." Wellness = "thirty minutes a week, in her own language, with women she trusts." Training = "publish the curriculum; certify the worker; pay her properly." Scholarships = "the scholarship is a job; the job is a health worker." CHW = "a paid livelihood, a trusted neighbour, a stronger PHC."
- **One promise per page** — stated in the H1 and proven in the body.
- **Long copy beats short copy** for an interested reader. Specific facts (NFHS-5, ASER, WHO, Census 2011, NPCDCS) cited inline; no invented numbers.
- **Headlines 8–12 words**, brand-name implicit (this is `omnilifecare.org`), promise + news explicit.
- **No awards/imitation/boredom.** No "transforming lives." No "empowering women" without a verb.

## Honest stance on numbers

Every programme repeats the foundation's truth: we are new, we have no decade of outcomes. Each page therefore lists **what we will measure**, the **cadence we will publish on**, and the **standard instruments** we will use — instead of inventing impact figures. This protects the brand and matches the research-page tone.

## Technical details

- File pattern: `src/routes/programs.<slug>.tsx`, each with `createFileRoute("/programs/<slug>")`, full `head()` (title, description, og:title, og:description, og:url; og:image uses the programme image already imported in `src/lib/site.ts`).
- Components reused: `FadeUp`, `CTABand`, `PillButton` (where buttons appear), `Link` from `@tanstack/react-router`, icons from `lucide-react` chosen per programme (`Brain`, `HeartPulse`, `Stethoscope`, `HeartHandshake`, `Users`, `GraduationCap`, `Coins`, `BookOpenCheck`, etc.).
- Pillar chip colour pulled from `PILLAR_BY_ID[<id>].color`.
- Programme image imported through `PROGRAMS.find(...)` or duplicated import from `@/assets/...` — use existing assets only, no new image generation.
- No edits to `routeTree.gen.ts` (auto-regenerated). No edits to `programs.$slug.tsx` (keeps working as fallback for unknown slugs and for routes I don't create in this batch).
- No changes to `src/lib/site.ts`, `src/styles.css`, or any shared component — pages are additive only.

## Build order (single batch, parallel writes)

All 8 files created in one batch via parallel `code--write` calls, then verified via build output.

## Out of scope

- The 9th already-built `research-impact-assessment` page.
- Touching the `what-we-do/*` pillar pages, navigation, or shared components.
- New imagery, new tokens, or new mega-nav entries.

Skills applied: `ogilvy-copywriting` (positioning + one-promise discipline), `frontend-design` (editorial composition), `make-interfaces-feel-better` (staggered FadeUp, specific transitions, tabular-nums, text-balance/pretty).