## Goal

Adopt the interaction & component language from `/design-ui-inspo` (Axion Studio) across the entire Omni Life Care Foundation site — pill nav, text-roll CTA buttons with arrow-circle suffix, numbered "chapter" section intros, expanding pill hovers on cards, bottom-sheet mobile menu — **while keeping Omni's brand identity** (Deep Teal `#0B3B3C`, Clinical Coral `#D9573F`, Source Serif + Inter, editorial gravitas). Axion's orange becomes Omni Coral; Axion's gray-900 becomes Omni Deep Teal.

## What changes

### 1. New shared primitives (`src/components/ui-axion/`)
- `PillButton.tsx` — the signature CTA: `rounded-full pl-5 pr-2 py-2`, text in `overflow-hidden h-[20px]` with vertical duplicate roll on `group-hover`, trailing arrow-in-circle that rotates `-45deg`. Variants: `primary` (Deep Teal bg / white circle / teal arrow), `action` (Coral bg / white circle / coral arrow), `ghost` (white bg / teal circle / white arrow).
- `SectionIntro.tsx` — numbered dark circle + bordered pill label ("01 · Our Approach"). Replaces ad-hoc eyebrows on every section.
- `ExpandingPill.tsx` — absolute-positioned circle that expands to a labelled pill on `group-hover` with icon rotating from `-45deg` to `0`. Two tones (light / dark) for use over imagery and cards.
- `TextRoll.tsx` — reusable hover text-roll wrapper.
- Easing token: `--ease-axion: cubic-bezier(0.25,0.1,0.25,1)` and `--ease-sheet: cubic-bezier(0.32,0.72,0,1)` in `styles.css`.

### 2. Header refactor (`src/components/Header.tsx`)
- Drop the utility bar; consolidate everything into one **pill-shaped white nav** floating inside `max-w-[1440px]` with `p-2 sm:p-3` outer padding.
- Left: small dark-teal circular logo mark (replaces current bar logo, keep SVG glyph), then text links (`Who We Are / What We Do / Programs / Impact / Get Involved / Newsroom`).
- Right (md+): "Working across X states" status text + live IST clock (Asia/Kolkata, `useIndiaTime` hook mirroring Axion's London clock) + `PillButton` "Partner with Us".
- Mobile: dark teal circular Menu/X toggle → **bottom-sheet drawer** (`rounded-2xl mx-3 mb-3`, slide-up with sheet easing, black/60 backdrop), large 28px nav links, "Partner with Us" + "Donate" pill buttons, compliance chips at bottom.
- Sticky on scroll with `bg-white/95 backdrop-blur` + subtle shadow.

### 3. Footer & MobileCTABar
- `MobileCTABar`: convert to pill-button styling for consistency.
- `Footer`: keep IA, restyle email-signup CTA as a `PillButton`.

### 4. Section intro pattern (site-wide)
Replace existing `eyebrow` headers on every page section (home + all sub-pages) with `<SectionIntro number="01" label="Our Approach" />` followed by a `font-medium leading-[1.12] tracking-[-0.02em]` headline. Numbering resets per page.

### 5. Buttons everywhere
Sweep all current `btn btn-primary` / `btn btn-secondary` usages and replace with `<PillButton>`. This covers:
- Hero CTAs on `index.tsx`, all `about/*`, `what-we-do/*`, `programs/*`, `impact/*`, `get-involved/*`, `partner/csr`, `donate`, `contact`, `newsroom`.
- `CTABand` component.
- `ProgramCard` "Learn more" → use `ExpandingPill` over the photo (light variant on dark images, dark variant on light).
- Story cards on `impact.stories` → `ExpandingPill`.

### 6. Card & media interactions
- `ProgramCard`: add `group` to photo container, overlay `ExpandingPill` bottom-left ("Explore program" → arrow), keep current text block beneath.
- Newsroom article cards and Story cards: same treatment.
- Add `rounded-2xl` consistency on all media (some are currently `rounded-xl`).

### 7. Typography rhythm tune-up (`styles.css`)
- Keep Source Serif for `display-*` editorial headlines (Omni's gravitas — don't switch to sans like Axion).
- Adopt Axion's tighter sizing scale for sub-section headlines: add `.headline-axion` utility (`font-sans font-medium leading-[1.08] tracking-[-0.03em]`, clamp sizing) for use on CTA bands and card titles where the serif feels too heavy.
- Tighten button text to `text-[13px]` / `text-[14px]` per Axion spec.

### 8. Color mapping (no palette change)
| Axion | Omni equivalent |
|---|---|
| `#F26522` orange | `#D9573F` Clinical Coral |
| `gray-900` | `#0B3B3C` Deep Teal |
| `#EFEFEF` / `#F5F5F5` bg | existing `--canvas` / `--sage` |
| white nav pill | white on canvas |

No new colors introduced; everything routes through existing tokens.

### 9. Out of scope (deliberate)
- **No shader background** on Omni pages — Axion's shader stack is decorative agency flair and would undercut Omni's institutional credibility (Gates/PATH/Tata reference set). Hero stays photographic.
- No font change to Axion's system sans. Source Serif + Inter stays.
- No content rewrites — purely visual/interaction refactor.
- Route structure, SEO, and forms untouched.

## Technical details

```text
src/
├── components/
│   ├── ui-axion/
│   │   ├── PillButton.tsx        ← variants: primary | action | ghost, size sm|md
│   │   ├── ExpandingPill.tsx     ← absolute hover pill for cards/media
│   │   ├── SectionIntro.tsx      ← numbered circle + bordered label
│   │   └── TextRoll.tsx
│   ├── Header.tsx                ← rebuilt as floating pill nav + bottom-sheet
│   ├── Footer.tsx                ← swap btns → PillButton
│   ├── MobileCTABar.tsx          ← PillButton styling
│   ├── ProgramCard.tsx           ← add ExpandingPill overlay
│   └── CTABand.tsx               ← PillButton + SectionIntro
├── hooks/
│   └── use-india-time.ts         ← IST clock for header
└── styles.css                    ← --ease-axion, --ease-sheet, .headline-axion
```

- Sweep order: primitives → Header/Footer → CTABand → ProgramCard → page sweep (home first, then about, what-we-do, programs, impact, get-involved, donate, partner, contact, newsroom, legal pages).
- After sweep: `tsc --noEmit` clean, visual QA at mobile + desktop, verify no `btn-primary` / `btn-secondary` className remains via ripgrep.

## Acceptance check

- Every CTA on every route uses `PillButton` with the text-roll + arrow-circle interaction.
- Every page section opens with a numbered `SectionIntro`.
- Header is a floating white pill on all routes; mobile menu is a bottom sheet.
- Program/story/news cards show the expanding pill on hover.
- Brand colors and typography unchanged; no shader added.
- Zero TypeScript errors; no broken routes.
