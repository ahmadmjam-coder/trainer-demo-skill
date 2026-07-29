# Design System Brief — Trainer Landing Page
Generated for: 12-week transformation coaching program (Arabic, RTL)
Audience: Office workers 30–45, prior failures, NOT gym culture
Tone: Calm · Credible · Measurement-focused

---

## 1. Page Pattern & Section Order

Pattern: **Trust & Authority + Conversion-Optimized**
(hybrid of two database patterns, tuned for "tried before and failed" psychology)

| # | Section | Purpose |
|---|---------|---------|
| 1 | **Hero** | Bold headline that names the audience's past failure, then pivots to the 12-week promise. Single CTA (scroll to form). No countdown timer. No hype phrase. |
| 2 | **Problem Recognition** | Three reasons common programs fail. Makes the visitor feel understood, not sold to. |
| 3 | **The Method** | What makes this different: structure, accountability, weekly measurement. Not "the secret" — just the system. |
| 4 | **The 12-Week Journey** | Phase map: weeks 1–4 (foundation), 5–8 (momentum), 9–12 (lock-in). Specific outcomes per phase. |
| 5 | **Results** | Metric-first proof: kg, cm, habit scores. Real people from the same audience. Not bodybuilder photos. |
| 6 | **Testimonials** | 3 stories from office workers. Quote + first name + occupation. No star ratings (too casual for this tone). |
| 7 | **About the Trainer** | Credentials, coaching philosophy, why measurement works. Photo: professional, not gym-posing. |
| 8 | **What's Included** | Program components in a clean list/grid: meal framework, training plan, weekly check-in call, progress tracker. |
| 9 | **Packages / Pricing** | Three tiers (below the fold — value is established first). Prices in IBM Plex Mono. |
| 10 | **FAQ** | 5–6 questions that address real objections: "Do I need a gym?", "What if I travel?", "How is this different from what I tried?". |
| 11 | **Lead Capture** | Simple form: الاسم + رقم الهاتف + هدفك (single select). + WhatsApp CTA button below form. |

Primary CTA placement: bottom of Hero (scroll anchor) + sticky after 50% scroll + Lead Capture section.

---

## 2. Color Palette

Source reasoning: The database "Trust & Authority" style + "Healthcare App" calm tone informed the base.
Fitness/Gym orange was explicitly rejected (wrong audience signal).

### Primitives

| Token | Hex | Name |
|-------|-----|------|
| `--color-navy-900` | `#0F2440` | Deep Navy |
| `--color-navy-800` | `#1B3A5C` | Navy |
| `--color-navy-700` | `#224878` | Navy Light |
| `--color-bronze-600` | `#B8862E` | Dark Bronze |
| `--color-bronze-500` | `#C9973A` | Bronze |
| `--color-bronze-100` | `#F5ECD8` | Bronze Tint |
| `--color-warm-50`  | `#F8F7F4` | Warm Off-White |
| `--color-warm-100` | `#EDEAE4` | Warm Gray Light |
| `--color-warm-200` | `#D6D2C8` | Warm Gray Border |
| `--color-gray-500` | `#6B7280` | Gray Mid |
| `--color-gray-900` | `#141414` | Near-Black |
| `--color-forest-700` | `#2D6A4F` | Forest Green |
| `--color-white`    | `#FFFFFF` | White |

### Semantic Layer & Roles

| Semantic Token | References | Role |
|---------------|-----------|------|
| `--color-background` | `--color-warm-50` `#F8F7F4` | Page background — warm, not clinical |
| `--color-foreground` | `--color-gray-900` `#141414` | Body text — authority without harshness |
| `--color-primary` | `--color-navy-800` `#1B3A5C` | CTAs, headings, links — discipline & trust |
| `--color-primary-hover` | `--color-navy-900` `#0F2440` | CTA hover state |
| `--color-accent` | `--color-bronze-600` `#B8862E` | Highlights, icons, phase numbers — achievement |
| `--color-accent-tint` | `--color-bronze-100` `#F5ECD8` | Accent background areas |
| `--color-card` | `--color-white` `#FFFFFF` | Card surfaces |
| `--color-card-foreground` | `--color-gray-900` `#141414` | Card body text |
| `--color-muted` | `--color-warm-100` `#EDEAE4` | Muted sections, section alternates |
| `--color-muted-foreground` | `--color-gray-500` `#6B7280` | Captions, placeholders, secondary text |
| `--color-border` | `--color-warm-200` `#D6D2C8` | All borders |
| `--color-success` | `--color-forest-700` `#2D6A4F` | Results, metrics, positive indicators |
| `--color-ring` | `--color-navy-800` `#1B3A5C` | Focus rings |
| `--color-whatsapp` | `#25D366` | WhatsApp CTA button only |

### Why this palette works for this audience
- Navy signals **expertise and discipline** (not gym energy)
- Warm off-white **removes clinical coldness** (not a hospital, a mentor)
- Bronze/dark gold signals **measurement and achievement** (not celebration)
- No vibrant oranges, neons, or electric blues anywhere

---

## 3. Font Pairing

### Primary: Cairo (Display & Headings)
- Google Font with full Arabic support
- Geometric, clean, modern — communicates structure and clarity
- Bold weights (700–800) have strong Arabic presence without feeling informal
- Use for: H1, H2, H3, section labels, CTA text

### Secondary: IBM Plex Sans Arabic (Body & UI)
- Precision-engineered Arabic type from IBM
- Communicates methodology and expertise — the "measurement" tone
- Excellent readability at 16–18px
- Use for: body copy, form labels, captions, FAQ answers

### Tertiary: IBM Plex Mono (Numbers ONLY)
- Used **exclusively** for numeric values: weights (kg), measurements (cm), week numbers, prices, phase numbers, stat figures
- Tabular numerals ensure metric columns align cleanly
- This is the typographic signal that carries the "measurement" tone — every number the user reads will feel data-precise
- Never use for Arabic text, labels, or anything non-numeric

### Next.js Font Loading (next/font/google)
All three fonts are loaded via `next/font/google` in `layout.tsx`.
Variable names are controlled by `lib/theme.ts` — changing them there changes the whole system.

| Role | Font | CSS Variable | Loaded subsets |
|------|------|-------------|----------------|
| Display | Cairo | `--font-display` | arabic |
| Body | IBM Plex Sans Arabic | `--font-body` | arabic |
| Mono | IBM Plex Mono | `--font-mono` | latin |

### Fallback chain
```css
--font-display: 'Cairo', 'Noto Sans Arabic', 'Arial', sans-serif;
--font-body:    'IBM Plex Sans Arabic', 'Noto Sans Arabic', 'Tahoma', sans-serif;
--font-mono:    'IBM Plex Mono', 'Courier New', monospace;
```

---

## 4. Spacing & Type Scale

### Spacing (4px base)
| Token | Value | Use |
|-------|-------|-----|
| `--space-1` | `0.25rem / 4px` | Icon gap, micro spacing |
| `--space-2` | `0.5rem / 8px` | Input padding Y, tight items |
| `--space-3` | `0.75rem / 12px` | Button padding Y |
| `--space-4` | `1rem / 16px` | Component internal padding |
| `--space-6` | `1.5rem / 24px` | Card padding, form gap |
| `--space-8` | `2rem / 32px` | Between related sections within a block |
| `--space-12` | `3rem / 48px` | Section padding Y (mobile) |
| `--space-16` | `4rem / 64px` | Section padding Y (desktop) |
| `--space-24` | `6rem / 96px` | Major section separation |

### Type Scale
| Token | Size | Weight | Use |
|-------|------|--------|-----|
| `--text-xs` | `0.75rem / 12px` | 400 | Labels, badges |
| `--text-sm` | `0.875rem / 14px` | 400 | Captions, fine print |
| `--text-base` | `1rem / 16px` | 400 | Body copy |
| `--text-lg` | `1.125rem / 18px` | 500 | Lead text, card body |
| `--text-xl` | `1.25rem / 20px` | 600 | Card headings, FAQ titles |
| `--text-2xl` | `1.5rem / 24px` | 700 | H3 |
| `--text-3xl` | `1.875rem / 30px` | 700 | H2 |
| `--text-4xl` | `2.25rem / 800` | 800 | H1 (mobile) |
| `--text-5xl` | `3rem / 48px` | 800 | H1 (desktop) |

Line height: `1.7` for Arabic body (Arabic needs slightly more breathing room than Latin).
Heading line height: `1.3` (tighter for display weights).

---

## 5. Component Vocabulary

### Button Variants
| Variant | Use | Style |
|---------|-----|-------|
| `btn-primary` | Main CTAs (form submit, scroll anchor) | Navy fill, white text, radius-md |
| `btn-whatsapp` | WhatsApp CTA | `#25D366` fill, white text, WhatsApp icon |
| `btn-outline` | Secondary actions | Navy border, navy text, transparent fill |
| `btn-ghost` | Navigation, low-priority links | No border, navy text, hover: warm-100 bg |

Button sizing: `min-h: 52px` on mobile (touch target), `48px` on desktop. Full-width on mobile.

### Card Types
| Card | Use |
|------|-----|
| `card-stat` | Results metrics (kg lost, weeks, clients) — large number + label |
| `card-phase` | 12-week journey phases — phase number (bronze) + title + outcome list |
| `card-testimonial` | Quote + name + occupation. No avatar photo if unavailable — initials circle |
| `card-include` | Program components — icon + title + brief description |
| `card-faq` | Accordion item — question + expandable answer |

All cards: `border: 1px solid var(--color-border)`, `border-radius: var(--radius-lg)`, shadow-sm. No fixed heights. Grid stretch via CSS grid `align-items: stretch`.

### Input Styles
| State | Style |
|-------|-------|
| Default | Border `--color-border`, bg `--color-white`, radius-md |
| Focus | Ring `3px solid var(--color-primary)`, border `--color-primary` |
| Error | Border `#DC2626`, error message below in red |
| Placeholder | `--color-muted-foreground` |

Input height: `52px` on mobile, `48px` on desktop.
Form max-width: `560px`, centered.

### Icon System
- Library: Phosphor Icons (has Arabic-friendly directional variants)
- RTL directional icons: use `rtl:rotate-180` utility or `dir="auto"` variant
- Size: `20px` inline, `24px` for standalone, `32px` for feature icons

---

## 6. Anti-Patterns to Avoid

| Anti-Pattern | Why It Hurts This Audience |
|-------------|---------------------------|
| Energetic orange/neon palette | Signals gym-bro culture — this audience actively rejects that identity |
| Countdown timers / "Limited spots" urgency | Breaks the calm, credible tone; feels manipulative to someone who's been burned by programs before |
| Before/After body photos as primary proof | Centers appearance, not health — wrong motivation for office workers |
| Photos of muscular/athletic models | Signals "this is for athletes" — the opposite of the intended audience |
| Auto-advancing carousels | Removes user control; feels chaotic against a "discipline and patience" message |
| Multiple competing CTAs in the hero | Scatter attention; one anchor CTA is enough |
| Star ratings on testimonials | Too casual, feels like Amazon reviews — not the authority tone |
| Pricing above the fold | Don't open with price; build value first |
| Placeholder-only form inputs | Fails accessibility; Arabic placeholder direction can also be inconsistent across browsers |
| `overflow: hidden` on card containers | Clips Arabic text that descends below baseline in some weight/size combinations |
| Fixed card heights | Arabic text at certain sizes runs longer than equivalent Latin — cards will clip |
| Absolute-positioned text inside cards | Breaks entirely in RTL |

---

## 7. RTL-Specific Layout Notes

- `<html lang="ar" dir="rtl">` — set on root, never override with `dir="ltr"` on children
- CSS logical properties: use `padding-inline-start/end` instead of `padding-left/right` in custom CSS
- Tailwind RTL: use `rtl:` prefix for direction-sensitive utilities (`rtl:rotate-180` on arrows, chevrons)
- Flexbox reverses automatically with `dir="rtl"` — do NOT manually add `flex-row-reverse`
- Grid does NOT auto-reverse — column order in RTL grids must be verified visually
- WhatsApp icon: place icon on the **start** side of the button (in RTL = visual right)
- Form labels: above the input, not inline — avoids RTL alignment confusion
- Arabic quotation marks for testimonials: use `"` `"` (U+201C / U+201D) or omit marks entirely
- Section alternation: swap left/right image-text pairs using `order-first`/`order-last` with `rtl:` prefix
- Font loading: ensure `font-display: swap` to prevent FOIT for Arabic glyphs (heavier to load)
- Number display: Arabic-Indic numerals (`٠١٢٣`) vs Western (`012`) — choose one, apply consistently. Recommendation: Western numerals for metrics (more readable for measurements), Arabic numerals in flowing body text only if needed.

---

## References (Search Sources)
- Landing patterns: landing.csv — "Before-After Transformation" adapted
- Style profile: styles.csv — "Trust & Authority" + "Conversion-Optimized"
- Color: colors.csv — Healthcare App + Personal/Portfolio, custom synthesis
- Typography: typography.csv — "Arabic Elegant" (Noto Naskh/Sans), upgraded to Cairo + IBM Plex Sans Arabic
- UX: ux-guidelines.csv — form labels, submit feedback patterns
- Product: products.csv — Medical Clinic + Online Course hybrid (closest match)
