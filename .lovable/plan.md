# Homepage Redesign — Omni Life Care Foundation

A full rewrite of `src/routes/index.tsx` using three skills: **ogilvy-copywriting** (positioning + promise + honest facts), **frontend-design** (a single cohesive editorial direction), and **make-interfaces-feel-better** (staggered reveals, optical detail, tactile feedback).

## The honesty problem (must fix)

The current homepage advertises **"1.2M+ lives reached, 210 CHWs trained, 6 states active"** and "Live · Field operations active across 6 states." You're a **newly registered Mumbai-based foundation** — these numbers are fabricated and will destroy donor/CSR trust the moment it's checked. Ogilvy's rule: *the product must actually deliver the promise.*

Every fabricated stat will be removed. We replace them with what is **actually true and persuasive for a new org**: statutory compliance, the four-pillar model, the founders' commitment, Mumbai roots, and an open invitation to be a founding partner.

## Positioning & promise (Ogilvy)

- **Position:** Mumbai-born foundation building an **integrated continuum of care** — mental wellbeing, social growth, inclusive care, human potential — for India's underserved communities. Aimed at CSR teams, institutional partners, and individuals who want to fund a model from day one, not a brand from year ten.
- **Single promise:** *Four pillars of care, designed to work as one system — built with communities, not for them.*
- **Big idea (headline candidate, ~12 words):** **"Health doesn't live in silos. Neither should the care that reaches you."**

## Aesthetic direction (frontend-design)

**Editorial / quiet-luxury manifesto** — picks up the existing serif italic accents, ink-on-canvas palette, and pillar color tokens already in `styles.css`. Confident restraint, not maximalism. References: long-form magazine editorial, charity:water annual-report layouts, Rolls-Royce-era Ogilvy long copy.

- Asymmetric 12-column grids, oversized italic numerals, hairline rules as a structural device.
- Display serif italic for emphasis words; sans for structure; mono for metadata/labels.
- Pillar colors used as **single sharp accents** (color rail, dot, underline), never as fills.
- Subtle gradient-mesh + grain backdrops on hero and "Founding Moment" sections; everything else is canvas/sage with hairlines.

## New section order

```text
1.  Hero — "Health doesn't live in silos…" + founding-moment badge (not fake "live ops")
2.  Founding Moment — honest "what we are right now" strip (replaces fake counters)
3.  Why We Exist — Ogilvy-style problem framing with one specific Mumbai-rooted fact
4.  The Omni Care Model — four pillars, editorial rows (already redesigned, keep)
5.  Our Four Programs in Motion — the 4 pillar programs from the questionnaire
6.  A Letter from the Founders — long-copy editorial (Ogilvy: long copy sells)
7.  Be a Founding Partner — CSR / institutional / individual paths (replaces "Impact Split")
8.  Compliance & Transparency — 12A/80G/CSR-1 with what each means, plainly
9.  CTA Band — single promise, two actions
10. Newsletter — "Quarterly field notes from Mumbai" (honest cadence)
```

Sections being removed/merged: `ImpactCounters` (fake numbers), `StoriesSection` (no real stories yet), `ResearchTeaser`, `NewsroomStrip` (nothing to show yet — empty press strips signal a dead org). Page-level fake "1.2M / 210 / 6 states" trio is deleted from the hero.

## Section-by-section copy & design

### 1. Hero
- Eyebrow chip: `Est. 2026 · Mumbai, India` (replaces the fake "Live · Field operations active" badge)
- H1: **"Health doesn't live in silos. *Neither should the care that reaches you.*"** (italic on second clause)
- Sub: *"Omni Life Care Foundation is a newly registered Mumbai-based public charitable trust building an integrated model of mental wellbeing, social growth, inclusive care, and human potential — designed with the communities it will serve."*
- CTAs: **Partner with us** (primary) · **Read our mission** (ghost)
- Below-the-fold strip (replaces fake stats): `12A registered` · `80G applied` · `CSR-1 in progress` · `Headquartered in Mumbai` — honest signals only.
- Right column: keep the framed hero image + floating compliance card (already well-done).

### 2. Founding Moment (new — replaces ImpactCounters)
A horizontal editorial strip with four honest facts: **4 pillars defined** · **9 programs designed** · **5 SDGs prioritised** · **Day 001 in Mumbai**. Mono labels, oversized italic numerals, hairline dividers. No fake "lives reached."

### 3. Why We Exist
Two-column: left = oversized pull quote; right = three short facts about India's care gap (verified, sourced — e.g. WHO mental health treatment-gap figures for India). Ends with: *"We won't fix this alone. We're building a system others can plug into."*

### 4. The Omni Care Model
**Keep the redesigned editorial-rows section** (already shipped last turn). Minor copy tightening per Ogilvy: every pillar gets a verb-led promise sentence drawn straight from the questionnaire.

### 5. Four Programs in Motion
2×2 editorial grid of the four flagship programs from the questionnaire:
1. Community Mental Health & Wellbeing
2. Preventive & Community Health Outreach
3. Inclusive Care (Disability + Elderly + Chronic)
4. Women's Health & Life-Cycle Care

Each card: pillar color rail, mono program code, serif title, plain-English "what it does" + "who it serves" + SDG tag. No invented metrics.

### 6. A Letter from the Founders (Ogilvy long copy)
Single-column 65ch editorial, ~250–350 words, signed. Honest framing: *"We are starting today. Here is what we promise…"* Five specific commitments: community-led design, third-party impact audits, open finances, no overhead inflation, public learning. Ends with a hand-set signature block.

### 7. Be a Founding Partner (replaces ImpactSplit)
Three editorial cards on a sage background, each with a verb-led headline (Ogilvy: name your audience):
- **For CSR teams:** "Anchor a pillar. Shape the model." → /partner/csr
- **For institutions:** "Co-design a programme." → /get-involved
- **For individuals:** "Fund the first hundred families." → /donate

### 8. Compliance & Transparency
Already strong. Reframe each badge with a one-line plain-English explanation of what it means for a donor ("12A — your donation is tax-deductible under Indian law"). Add a link to a future Transparency page.

### 9. CTA Band
Replace existing with: **"You can fund a foundation at year ten. Or you can help shape one at month one."** Two buttons: *Become a founding partner* · *Read our model*.

### 10. Newsletter
"Quarterly field notes from Mumbai — what we built, what failed, what we learned." (Honest cadence — no "weekly updates" promise we can't keep.)

## Polish pass (make-interfaces-feel-better)

- Stagger every section's enter reveals at 80–120ms via existing `FadeUp`.
- Heading `text-wrap: balance` already global; verify every new headline benefits.
- All hover surfaces use `transition-[border-color,box-shadow,transform,background-color]` — never `transition-all`.
- Numerals get `tabular-nums` (already in tokens).
- Founders' signature image and program images all get `outline outline-1 -outline-offset-1 outline-ink/10`.
- Pillar arrow buttons keep the rotate-on-hover + concentric-radius pattern from the Approach section.
- All CTAs use `PillButton` (which now has `active:scale-[0.96]`).
- Minimum 44px hit area on every link/button — audit small mono links.

## Files touched

- **Rewrite:** `src/routes/index.tsx` (sole file changed for the redesign itself).
- **Possibly add:** one small `<FoundersLetter />` sub-component inline in `index.tsx` (no new file unless it grows).
- **No changes to** tokens, `styles.css`, routing, or business logic. All copy lives in the route; pillar/program data continues to come from `@/lib/site`.

## Out of scope

- About / Programs / Impact subroutes (the user asked for the home page).
- New illustrations or photography.
- Adding real impact numbers (we have none — that's the point).

## Risks & checks

- **Removing fake stats may feel "emptier."** That's intentional and correct for a new org; we compensate with editorial confidence and Ogilvy long copy.
- After build, scan the rendered home page for any remaining instance of "1.2M", "210", "1.2 million", or "6 states" — these strings must be zero.
- Verify mobile (`<768px`): editorial grids collapse to single column; oversized numerals must not overflow viewport.

