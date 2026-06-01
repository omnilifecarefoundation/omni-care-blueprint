## Site map (current pages, by hierarchy)

```text
Home  /
│
├─ About  /about
│   ├─ Vision & Mission       /about/vision-mission
│   ├─ Omni Care Model        /about/omni-care-model
│   ├─ Values                 /about/values
│   ├─ Our Story              /about/our-story
│   ├─ Leadership             /about/leadership
│   ├─ Compliance & Trust     /about/compliance
│   └─ Careers                /about/careers
│
├─ What We Do  /what-we-do                 ← 4 pillars
│   ├─ Mental Wellbeing       /what-we-do/mental-wellbeing
│   ├─ Social Growth          /what-we-do/social-growth
│   ├─ Inclusive Care         /what-we-do/inclusive-care
│   └─ Human Potential        /what-we-do/human-potential
│
├─ Programmes  /programs                   ← 9 programs
│   ├─ Community Mental Health
│   ├─ Preventive Health Outreach
│   ├─ Women's Health & Life-Cycle
│   ├─ Disability & Elderly Care
│   ├─ Women's Wellness
│   ├─ Training & Capacity Building
│   ├─ Research & Impact Assessment        /programs/research-impact-assessment
│   ├─ Scholarships & Education
│   └─ CHW Development
│
├─ Impact  /impact
│   └─ Stories                /impact/stories
│
├─ Get Involved  /get-involved
│   ├─ Volunteer              /get-involved/volunteer
│   ├─ Partner (CSR)          /partner/csr
│   └─ Donate                 /donate
│
├─ Newsroom    /newsroom
├─ Contact     /contact
│
└─ Utility footer-only
    Accessibility · Privacy · Terms · Donation Policy · Safeguarding · Sitemap
```

## Header information architecture (6 top-level slots)

```text
[Logo]   About ▾   What We Do ▾   Programmes ▾   Impact ▾   Get Involved ▾   Newsroom        [Donate] [Partner with Us]
```

Mega-menu contents:
- **About** — 2 col: links list (7 pages) + featured card "Omni Care Model"
- **What We Do** — 4 pillar tiles with pillar colour swatch + 1-line description
- **Programmes** — 3 col grouped by pillar (Mental / Social / Inclusive / Human) + footer link "All programmes →"
- **Impact** — Overview, Stories, + featured stat card "1,20,000+ lives reached"
- **Get Involved** — Volunteer, Partner (CSR), Donate cards with icons + role tag

Mobile: bottom-sheet (current pattern) extended with expandable accordion sections per top-level item.

## Design plan (skills: make-interfaces-feel-better + frontend-design)

**Aesthetic** — keep the editorial Omni system: `bg-canvas` pill nav, `text-ink`, `text-gold` accent, hairline borders, Tillana serif italic accents. The mega-panel is a single `bg-snow` sheet floating below the pill with `border-hairline`, layered shadow (no hard border): `0 1px 0 rgba(28,0,96,0.04), 0 24px 48px -24px rgba(28,0,96,0.18)`.

**Interactions**
- Hover-intent: 80 ms open delay, 180 ms close delay to prevent flicker between trigger and panel.
- Single shared panel container that morphs height with `transition: height 220ms cubic-bezier(0.2,0,0,1)` — content cross-fades (`opacity` + `translateY(4px)`, staggered 40 ms per column).
- `initial={false}` equivalent — panel hidden on first paint, no entrance flash.
- Pointer follows: small underline indicator slides between active triggers (`transition: transform, width` only — never `all`).
- Keyboard: Esc closes, ↓ enters panel, ↑/↓/←/→ navigate within columns, Tab cycles, focus rings via `outline-gold`.
- Click outside / route change → close.
- Scroll lock only on mobile sheet.

**Micro-details (per skill checklist)**
- Concentric radius: pill nav `rounded-full`, inner items `rounded-[14px]` (pill padding 5 + 9 inner = 14).
- Triggers: 40×40 min hit area; chevron rotates 180° on open with `cubic-bezier(0.2,0,0,1)`.
- Active route gets `text-primary` + 2 px underline; hover gets ink-muted → ink colour transition only.
- Featured card images use 1 px `outline outline-ink/5`.
- All CTAs use existing `PillButton`, `active:scale-[0.96]`.
- Tabular nums on the IST clock.
- `text-wrap: balance` on mega-panel headings, `pretty` on descriptions.
- Shadow over border for panel + scrolled-state nav.
- Transitions specify exact props (`transition-[color,background-color,transform]`), never `transition-all`.

**Scroll states**
- Top of page: transparent wrapper, pill on bare canvas.
- Scrolled >40 px: `bg-canvas/80 backdrop-blur` + faint hairline shadow (already wired — keep).

**Accessibility**
- `role="menubar"` triggers with `aria-haspopup="true"`, `aria-expanded`, `aria-controls`.
- Panel `role="menu"` with grouped `role="group"` and `aria-label` per column.
- Visible focus ring (`focus-visible:outline-2 outline-gold`).
- `prefers-reduced-motion` → no translate/blur, only opacity.

## Implementation steps (technical)

1. Extend `src/lib/site.ts` with a `MEGA_NAV` structure: `{ key, label, href, columns: [{ heading, items: [{ label, href, description?, badge? }] }], feature? }`. Derive `What We Do` from `PILLARS`, `Programmes` grouped from `PROGRAMS`.
2. New components in `src/components/nav/`:
   - `MegaNav.tsx` — desktop menubar + shared panel container with hover-intent timers, keyboard handling, route-change close.
   - `MegaPanel.tsx` — column renderer (links / pillar tiles / feature card variants).
   - `MobileNav.tsx` — refactor existing bottom-sheet to use accordion sections from same data.
3. Refactor `src/components/Header.tsx` to compose `MegaNav` + `MobileNav`; keep clock, compliance row, scrolled state, logo, and right-side CTAs (`Donate` ghost + `Partner with Us` PillButton primary).
4. Add CSS tokens to `src/styles.css` if needed: `--shadow-panel`, `--ease-axion` already exists, reuse.
5. Verify build, run a visual pass at 1440 / 1024 / 390 viewports, confirm Esc + keyboard nav, confirm route-change auto-close.

**Files touched**: `src/lib/site.ts`, `src/components/Header.tsx`, `src/components/nav/MegaNav.tsx` (new), `src/components/nav/MegaPanel.tsx` (new), `src/components/nav/MobileNav.tsx` (new), maybe small additions to `src/styles.css`.
