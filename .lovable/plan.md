## Rebrand: Fonts + Color Palette

Apply the General Sans / Excon brand kit across the site.

### 1. Fonts
Load **General Sans** (headings) and **Excon** (body) from Fontshare CDN via `<link>` in `src/routes/__root.tsx` head.

Update `src/styles.css` font tokens:
- `--font-sans` → `"General Sans", system-ui, sans-serif` (UI + headings)
- `--font-serif` → `"General Sans", ...` (replace Source Serif — keep var for compatibility, but headings now use General Sans, removing the editorial serif look)
- `--font-body` (new) → `"Excon", Georgia, serif` applied to `body`

All `h1–h4`, `.display-*`, `.headline-axion*` switch to General Sans. Body copy and `.lead` switch to Excon.

### 2. Color palette
Replace the teal/sage Omni palette with the indigo brand kit in `:root`:

| Token | Old | New |
|---|---|---|
| `--primary` | `#0B3B3C` (teal) | `#3F00AC` (Dark Indigo) |
| `--primary-foreground` | cream | `#FFFFFF` |
| `--ring` | teal | `#3F00AC` |
| (new) `--primary-glow` | — | `#735BF6` (Light Indigo) |
| (new) `--primary-deep` | — | `#1C0060` (Deep Indigo) |
| `--canvas` / `--background` | `#FBFAF6` cream | `#FFFFFF` |
| `--secondary` / `--sage` / `--muted` | sage green | light indigo tint `#F1EEFE` |
| `--accent` / `--sandstone` | sandstone beige | `#735BF6` |
| `--coral` (CTA accent) | `#D9573F` | keep as warm accent OR retire → use `--primary-glow` |
| `--ink` | `#1A1F1E` | `#1C0060` (Deep Indigo) for editorial gravitas |
| `--ink-muted` | `#5A6464` | `#5A4E8C` (muted indigo) |
| `--hairline` / `--border` | warm beige | `#E5E0F5` |

Pillar accents recolored as indigo tints + complementary hues.

### 3. Hover states
Update `.btn-primary:hover`, `.btn-coral:hover`, etc. to use `--primary-glow` (#735BF6) instead of darker teal.

### 4. Components to spot-check
- `src/routes/index.tsx` — hero gradient orbs, "Live" pill, stat numbers
- `src/components/Header.tsx`, `CTABand.tsx`, `MobileCTABar.tsx`, `ProgramCard.tsx`
- `src/components/ui-axion/*` — pills/buttons
- `src/routes/design-ui-inspo.tsx` — keep as-is (separate inspo page)

### Out of scope
- No logo redesign (text wordmark stays).
- No layout changes — purely visual rebrand.

After approval I'll implement in one batch and visually verify in the preview.
