## Plan: Replace Purple with Electric Blue

### Scope
Swap the current purple/indigo brand palette (`#3F00AC` family) for an electric blue family. No layout, typography, or component logic changes.

### Color mapping

| Current (purple) | Electric blue replacement |
|---|---|
| `#3F00AC` | `#0066FF` |
| `#735BF6` | `#4D9FFF` |
| `#1C0060` | `#003D99` |
| `#9B86FA` | `#80B3FF` |
| `#F1EEFE` | `#E8F2FF` |
| `#E5E0F5` | `#D4E4FF` |
| `#5A4E8C` | `#4A6FA5` |
| `rgba(63,0,172,0.10)` | `rgba(0,102,255,0.10)` |

### Files to edit

1. **`src/styles.css`**
   - Update all `:root` CSS custom properties that reference purple hex values:
     `--primary`, `--primary-glow`, `--primary-deep`, `--secondary`, `--secondary-foreground`, `--ink`, `--ink-muted`, `--hairline`, `--sage`, `--sandstone`, `--coral`, `--pillar-mental`, `--pillar-social`, `--pillar-inclusive`, `--pillar-human`, `--foreground`, `--card-foreground`, `--popover-foreground`, `--muted`, `--muted-foreground`, `--accent`, `--border`, `--input`, `--ring`
   - Update `.dark` `--foreground`
   - Update hardcoded hover states: `.btn-primary:hover`, `.btn-coral:hover`, `.btn-on-dark:hover`
   - Update card shadow: `.card-editorial:hover` `rgba(63,0,172,0.10)` → `rgba(0,102,255,0.10)`

2. **`src/routes/__root.tsx`**
   - Change `theme-color` meta tag from `#3F00AC` to `#0066FF`

3. **`src/components/Header.tsx`**
   - In the `Logo` SVG, change the first `<rect>` fill from `#7A6F9B` (muted purple) to `#4D9FFF`

4. **`src/components/OmniCareDiagram.tsx`**
   - Change the `mental` pillar color from `#7A6F9B` to `#4D9FFF`

### Out of scope
- Green-tinted rgba shadows (`rgba(11,59,60,...)`) — these are legacy green branding, not purple
- Orange/coral action button hover (`#C24A33`)
- Any non-purple hardcoded colors

### Verification
After build, spot-check: primary buttons, hero italic accent, pillar cards, mobile menu close button, logo icon, focus rings, and the CSR band text accents.