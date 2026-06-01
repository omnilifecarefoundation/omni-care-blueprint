## Hero redesign — institutional editorial

The current hero drowns the photo in a heavy electric-blue overlay so the headline disappears and the page reads as corporate, not like a credible non-profit. I'll rebuild the `Hero` component in `src/routes/index.tsx` using the "Institutional editorial" direction — white canvas, split layout, photo framed as a card, compliance badges promoted into a floating trust card.

### Layout (desktop, 7/5 split)

```text
┌──────────────────────────────────────────────────────────────┐
│  • Live · Field operations active in 6 states                │
│                                                              │
│  Equitable, dignified care for every  ┌──────────────────┐   │
│  community in India.                  │                  │   │
│  (Fira Sans bold, ink #003D99,        │  hero-market.jpg │   │
│   "dignified care" in Tillana italic  │  framed, rounded,│   │
│   #0066FF)                            │  caption overlay │   │
│                                       │                  │   │
│  Lead paragraph (Telex, ink-muted)    │                  │   │
│                                       └──────────────────┘   │
│  [Partner with Us]  [Make a Donation]   ┌───────────────┐    │
│  ─────────────────────────────────────  │ Compliance    │    │
│  6 States · 42+ Centers · 1.2M Lives    │ 12A 80G CSR FCRA│  │
│                                         └───────────────┘    │
└──────────────────────────────────────────────────────────────┘
```

### Changes

- **`src/routes/index.tsx` → `Hero()`**: replace the full-bleed image + overlay with a 12-col grid (`lg:grid-cols-12`, `gap-12`):
  - Left col (`lg:col-span-7`): keep status pill (Live + states), headline with `font-display-italic text-primary` on "dignified care", lead paragraph, existing `PillButton` CTAs, then a bordered stat row pulled from `STATS` in `@/lib/site`.
  - Right col (`lg:col-span-5`): `hero-market.jpg` in a rounded `aspect-[3/4]` framed card with soft shadow, subtle offset blue tint layer behind it, and a small italic caption overlay. Floating white compliance card (12A / 80G / CSR-1 / FCRA) absolutely positioned over the bottom-left of the image card.
  - Section background: `bg-canvas` (white), `border-b border-hairline` instead of `bg-ink`. Remove `bg-gradient-to-*` overlays.
- **Mobile**: stack — content first, image card second, compliance card flows below image (not absolute).
- **Tokens**: use only existing CSS vars (`--primary`, `--ink`, `--ink-muted`, `--hairline`, `--sage`, `--primary-glow`). No new colors. No new files. No nav/footer/section changes.

### Out of scope

Header, sections below the hero, design tokens, image asset — all untouched.
