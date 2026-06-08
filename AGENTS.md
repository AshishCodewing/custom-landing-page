# Nepal Social Trek — EBC Landing Page

**What this is:** Two standalone Google Ads landing pages (USA + EU variants) for the Everest Base Camp Trek, embeddable inside `nepalsocialtreks.com`.

**No build step, no dependencies, no tests, no CI/CD.** Vanilla HTML/CSS/JS only.

## Source of truth

- `HOMEPAGE-DESIGN-PLAN.md` — authoritative build spec (section content, code conventions, JS behaviors, responsive rules, two-version diff)
- `dev-brief.md` — client requirements (tracking, performance targets, USA vs EU content switching)
- Design reference is a screenshot (referenced in `dev-brief.md` but stored separately)

## Deliverables

```
ebc-landing-usa/
  index.html          ← single self-contained file (<style> in <head>, <script> at end of <body>)
  assets/img/         ← WebP placeholder images, lazy loaded below fold
  assets/icons/       ← inline SVG sprite or individual SVGs
ebc-landing-eu/       ← identical structure, USA copy swapped for EU copy
```

**No external header/footer/nav** — inherited from host site. Sticky mini-nav (S1) is internal to landing page only.

## Code conventions

- **No frameworks, no build step, no package.json.** Internal CSS in a single `<style>` block. Vanilla JS in IIFEs at end of `<body>`.
- **BEM naming** per section: `hero__headline`, `hero__cta--primary`, `usp-card__title`, etc. No utility classes except `.u-container`, `.u-visually-hidden`, `.u-no-scroll`.
- **CSS custom properties** in `:root` for every color, font, spacing, radius, shadow, transition. JS reads colors via `getComputedStyle(document.documentElement).getPropertyValue('--color-primary')`.
- **Mobile-first responsive.** Breakpoints: 480 / 768 / 1024 / 1280 px. Use `min-width` media queries only.
- **Accordions use native `<details>`/`<summary>`** for S9 (itinerary) and S16 (FAQ). No JS for open/close. JS only for default-open state (Day 1 + Day 10 in S9, first Q in each FAQ tab).
- **IntersectionObserver** (not scroll listeners) for counter count-ups and section fade-ins. Respect `prefers-reduced-motion: reduce`.
- **Altitude chart** (S13): Canvas 2D, no Chart.js. Re-renders on resize (debounced 150ms).
- **No `style=""` attributes.** All CSS in `<style>` block only.
- **Touch targets minimum 44px** on interactive elements.

## Template workflow

1. Build USA version in `ebc-landing-usa/index.html`
2. Duplicate file → swap USA copy for EU copy → save as `ebc-landing-eu/index.html`
3. Content differences are in `dev-brief.md` (USA vs EU content switching table) and `HOMEPAGE-DESIGN-PLAN.md` section 5

## Performance targets (from dev brief)

- LCP < 2.5s, CLS < 0.1
- Mobile PageSpeed 80+
- All images: WebP, lazy loaded below fold, explicit w/h, `decoding="async"`
- Hero image: `fetchpriority="high"`, no lazy
- Critical CSS inline (already true — single `<style>` block in `<head>`)

## Tracking required

- GTM, GA4, Google Ads conversion tags (form submit, CTA clicks, WhatsApp taps)
- Scroll depth (25/50/75/90%)
- Microsoft Clarity recommended

## SEO

- JSON-LD schemas: TouristTrip, AggregateRating, FAQPage, Organization
- USA page title: "Everest Base Camp Trek 2026/27 | 15 Days from $1,430 | Nepal Social Treks"
- EU page title: "Everest Base Camp Trek 2026 | 15 Days | $1,430 USD | Nepal Social Treks"
- Canonical URLs: `/everest-base-camp-trek-2026/` (USA), `/everest-base-camp-trek-europe/` (EU)
