# Apply Skills + Refine Hero (Ogilvy copy + interface polish)

## Why
You uploaded three reusable skill bundles. Step one: install them under `.agents/skills/` and activate so any future session can pull them by name. Step two: actually use them right now on the homepage hero — Ogilvy for copy, frontend-design + make-interfaces-feel-better for visual refinement.

## Part A — Save the skills (reusable)

Create three skill directories from your uploads:

```
.agents/skills/
├── ogilvy-copywriting/
│   └── SKILL.md                    (from first upload, 208 lines)
├── frontend-design/
│   └── SKILL.md                    (from second upload, 42 lines)
└── make-interfaces-feel-better/
    ├── SKILL.md                    (from upload, 122 lines)
    └── references/
        ├── typography.md           (123 lines)
        ├── surfaces.md             (247 lines)
        ├── animations.md           (379 lines)
        └── performance.md          (full file)
```

Then call `skills--apply_draft` on each of the three skill roots so they become active and retrievable by name in future sessions.

## Part B — Hero copy rewrite (Ogilvy)

Current hero is generic and feature-led. Ogilvy says: **positioning first, then one big promise, then specifics.**

**Positioning:** Omni Lifecare Foundation is for Indian families in underserved communities who deserve the same standard of care any city hospital offers — not a charity case, but care delivered with dignity.

**The promise (one, not many):** Every life gets care it can trust — at the doorstep.

**Hero rewrite (proposed):**

- Eyebrow chip: keep "Live · Field operations active across 6 states in India" (proof, not claim)
- Headline (H1, replaces current): **"Care that reaches every doorstep in India."** with *"every doorstep"* in the bright-yellow display-italic accent — concrete, specific, makes the promise.
- Subhead (replaces current lead paragraph): **"For 1.2 million people across 6 states, dignified healthcare is no longer a question of where you live. It's already on the way."** — quantified, benefit-first, ends with momentum (Ogilvy: "long copy sells").
- CTAs (verbs, not vague labels): primary "Partner with Us" → keep; secondary changes from "Make a Donation" → **"Fund a Community"** (specific outcome, not generic ask).
- Stats strip stays — Ogilvy loves specifics, and "1.2M+ / 210 / 6" is exactly that.
- Image caption (italic strip on photo): replace "Care meets community…" with **"Where India lives, care arrives."** — shorter, parallel construction, rhythmic.

Net effect: every line either makes a promise, proves a promise, or asks for action. No filler adjectives ("equitable, dignified, inclusive, community-centred" all collapsed into one specific claim).

## Part C — Hero visual refinement (frontend-design + make-interfaces-feel-better)

Aesthetic direction: **editorial / magazine**, refined indigo+yellow, calm density. Not maximalist, not generic AI-soft.

Concrete polish moves, each tied to a skill rule:

| Rule | Fix |
|---|---|
| **text-wrap: balance** on H1 | Add `text-balance` to the headline so "every doorstep in India" doesn't orphan |
| **text-wrap: pretty** on lead | Add `text-pretty` to the subhead paragraph |
| **Stagger enter animations** | Replace the three identical `<FadeUp>` wrappers with a single staggered group: eyebrow (0ms) → headline (100ms) → subhead (200ms) → CTAs (300ms) → stats strip (400ms). Use the existing `FadeUp` with `delay` prop if it accepts one; otherwise pass inline staggered delays. |
| **Interruptible transitions, no `transition-all`** | Audit hero buttons and pill chip — replace any `transition` or `transition-all` with explicit properties (`transition-[scale,background-color]`) |
| **Concentric border radius** | The image card uses `rounded-2xl` (16px) with no inner padding, so OK. The floating compliance card uses `rounded-xl` (12px) — inner badges should drop to `rounded-md` (6px) so the math reads concentric |
| **Shadows over borders** | The image card currently mixes `border border-hairline` with a heavy shadow — drop the border, layer two shadows: tight (`0 1px 2px rgba(28,0,96,0.08)`) + diffuse (`0 24px 60px -20px rgba(28,0,96,0.25)`) |
| **Image outline** | Add a 1px inset `box-shadow: inset 0 0 0 1px rgba(255,255,255,0.08)` to the hero image so it doesn't melt into a light background |
| **Tabular numbers** | Stats strip already uses `tabular` — keep, and add `font-variant-numeric: tabular-nums` to CountUp output globally if missing |
| **Optical alignment** | PillButton already has asymmetric padding via the trailing circle — verify the arrow icon sits centered, nudge `-translate-x-px` if needed |
| **Subtle exit, soft enter** | Use `opacity + translateY(8px) + blur(4px)` for enter, no exit needed on hero |
| **Hit area** | Compliance card chips should be at least 44px tall on touch — current `gap-2.5` grid is fine, just verify |

## Files to Change

- **Create**: `.agents/skills/ogilvy-copywriting/SKILL.md`, `.agents/skills/frontend-design/SKILL.md`, `.agents/skills/make-interfaces-feel-better/SKILL.md` + 4 references
- **Apply**: `skills--apply_draft` × 3
- **Edit**: `src/routes/index.tsx` — hero section only (lines ~59-180). Headline, lead, CTA label, image caption, FadeUp stagger, `text-balance`/`text-pretty`, border→shadow swap on image card, concentric radius on compliance card badges
- **Edit (small)**: `src/components/FadeUp.tsx` — only if it doesn't already accept a `delay` prop (will check during build)

## Out of Scope
- No palette change (indigo + yellow stays)
- No new sections, no layout restructure beyond the hero
- No copy changes outside the hero (Ogilvy pass on other sections is a separate follow-up — say the word and I'll do it)
- No font swap (the brand-kit General Sans / Excon pair is a separate task)

## Verification
After the edit I'll screenshot the hero at the current 889×541 viewport and at desktop width, and confirm: headline balances on two lines, yellow accent sits inside the headline, stagger reads top-to-bottom, image card has no harsh border, no `transition-all` left in the hero, and the three skills appear active in future sessions by name.
