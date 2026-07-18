# Caius Engineering Broadsheet

Locked design system for the Caius personal site.  
Derived from public Hallmark reference [custom-04](https://www.usehallmark.com/examples/custom-04/) (The Mend Assembly) — structure, type roles, rule language, and print character only. Content, branding, and illustrations are not copied.

## Provenance

- Source: `https://www.usehallmark.com/examples/custom-04/`
- Attestation: public design reference for Caius’s personal brand (user-authorized study + lock)
- Extracted: broadsheet masthead, off-register display layers, numbered manifesto planks, printer’s colophon, bone paper + vermilion second pass
- Discarded: repair-café copy, repair counts, taped marquee motion as a content device, exact slogan wording

## Genre

Editorial broadsheet · technical publication · tactile print · personal engineering archive.

Not: SaaS landing, Linear UI, Notion clone, Apple cards, glassmorphism, bento dashboard.

## Macrostructure

**Corner-cropped broadsheet** — masthead rule → fold slogan → numbered spine/planks → ledger sections → colophon.

Page families reuse the same furniture with different section compositions:

| Route | Classification | Composition |
| --- | --- | --- |
| `/` | Front page | Fold + manifesto + work ledger + dossier + stack inventory + dispatches |
| `/#experience` | Project / experience | Archive dossier (ResumeSwitcher) |
| `/blog` | Content index | Notes edition + lead + dispatch list |
| `/blog/[slug]` | Long-form article | Title spread + readable column + technical appendix code |
| `/explore` | Photographic archive | Field notes / contact sheet |
| `/about` | Personal / about | Editor’s letter |
| `404` | Utility | Single-sheet notice |

## Grid

- Max sheet width: `1280px`
- Horizontal pad: `clamp(1.25rem, 5vw, 5rem)`
- Primary devices: thick (`3px`) and hairline (`1px`) horizontal rules
- Asymmetric columns on large screens; intentional single-column collapse below ~52–60rem
- Image/grid tracks: `minmax(0, 1fr)` · `min-width: 0` · `overflow-wrap: anywhere` on display type

## Typography roles (4)

| Role | Token | Latin | Chinese fallback |
| --- | --- | --- | --- |
| Condensed display / labels / numbers | `--font-display` | Big Shoulders (optical size) | — (Latin metadata only) |
| Editorial headlines | `--font-editorial` | Fraunces | Songti SC / Noto Serif SC |
| Body / UI reading | `--font-body` | system sans | PingFang SC / Hiragino Sans GB / Noto Sans SC |
| Technical metadata / code | `--font-mono` | Spline Sans Mono | ui-monospace |

Rules:

- Headings are always roman (`font-style: normal`)
- Do not force Chinese through Big Shoulders
- Mono only for labels, folios, dates, stack lists, code
- Display scale is poster-fluid; body stays ≥ readable size on 320px

## Color hierarchy

Warm uncoated bone paper · oxidised ink · one brick/vermilion second pass.

| Token | Role |
| --- | --- |
| `--color-paper` | Sheet |
| `--color-paper-raised` | Slightly darker band / inset |
| `--color-ink` | Primary display ink |
| `--color-ink-muted` | Captions, folios |
| `--color-rule` / `--color-rule-strong` | Press rules |
| `--color-accent` | Large red signal (≥3:1 large text) |
| `--color-accent-ink` | Text on solid accent |
| `--color-focus` | Focus ring (instant, never animated) |

Dark mode = reverse print of the same system (ink-like ground, paper-colored type, same accent). No neon dashboard palette.

## Rule language

- Hairline under nav / meta rows
- Medium (2px) for section dividers inside ledgers
- Heavy (3px) for masthead, fold, section breaks
- Almost no boxes; containers are rare and square (`radius` ≤ 2px)

## Navigation

Broadsheet masthead:

- Wordmark: `CAIUS` / `CAIUS LUO`
- Subtitle: Engineering Notes · Backend Systems · Agent Infrastructure
- Edition meta: issue label + year
- Typographic links: Front Page · Work · Notes · Explore · About
- One compact theme control (Ink / Paper)
- Active state via rule/underline, not filled pills

## Section rhythm

1. Edition strap / eyebrow (mono, uppercase, accent or muted)
2. Heavy rule
3. Oversized display or editorial title
4. Body gloss ≤ ~52ch
5. Ledger rows or numbered planks
6. Colophon

## Repetition / off-register

- Optional ghost layer behind selected Latin display lines only
- Decorative ghosts `aria-hidden="true"`
- Never on body copy
- Settle animation only under `prefers-reduced-motion: no-preference`

## Motion

Allowed: one fold registration settle, underline/color transitions, subtle image reveal, ResumeSwitcher active states.  
Forbidden: every-section fade-up, floating cards, scanning lines, infinite tech marquee, parallax, decorative cursors.

## Texture

CSS-only faint halftone + grain on `body` pseudo-elements. Low opacity; multiply; no animated texture; muted further in dark mode.

## Components voice

- Links: accent underline on hover
- Primary action: solid accent block button (uppercase mono), not pill
- Lists: numbered ledgers with rules
- Tags: mono underline labels, not pill chips
- Code: technical appendix (border + paper-raised), no fake window chrome

## Exports

See `tokens.css` for the live token block consumed by the app.
