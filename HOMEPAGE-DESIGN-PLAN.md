flex gap-2 flex-col items-stretchNepal Social Treks — EBC Landing Page Build Plan
A self-contained spec to feed Claude Code. Builds two pages (USA + EU variants) of the Everest Base Camp Trek landing page from the design brief and screenshot reference.
***1. Project goal & deliverables
Build a high-conversion Google Ads landing page for the Everest Base Camp Trek, embeddable inside the existing nepalsocialtreks.com site. Two near-identical versions: USA and EU. The brief specifies 20 numbered sections plus floating elements; the visual reference confirms layout order, hierarchy, and density.
Deliverables (one folder per market, identical structure):
/ebc-landing-usa/
  index.html        ← single self-contained HTML file with internal <style> and <script>
  /assets/
    /img/           ← placeholder images, structured by section
    /icons/         ← inline SVG sprite or individual SVGs
/ebc-landing-eu/
  index.html
  /assets/...
Hard constraints from the brief:
No external header / footer / nav — these are inherited from the host site.
Sticky mini-nav (Section 1) is internal to the landing page only.
Internal CSS in <style> block in <head> (NOT external stylesheet, NOT inline style="" on elements).
Vanilla JS in a <script> at end of <body>. No build step. No frameworks.
BEM class naming throughout.
CSS custom properties (variables) for every color, font, spacing, radius, shadow, transition.
Mobile-first responsive. Breakpoints: 480, 768, 1024, 1280.

Performance Requirements (from dev brief):
- Core Web Vitals: LCP under 2.5s, CLS under 0.1
- Mobile PageSpeed Score: 80+ target
- All images: WebP format, lazy loaded below fold
- Critical CSS: Inline for above-fold content
- Smooth scroll behavior on anchor links
- Counter number animations on scroll (Intersection Observer API)
- Fade-in section animations on scroll

Tracking Setup Required:
- Google Tag Manager installed
- GA4 property linked
- Google Ads conversion tags: form submit, CTA clicks, WhatsApp taps
- Scroll depth tracking: 25%, 50%, 75%, 90%
- Video play tracking for video testimonials embedded
- Heatmap: Microsoft Clarity recommended
***2. Tech & code conventions
File layout inside index.html
<!doctype html>
<html lang="en">
<head>
  <meta charset>, viewport, SEO meta, Open Graph, JSON-LD schema
  <style>
    /* 1. CSS custom properties (:root)  */
    /* 2. Reset / base                   */
    /* 3. Utilities (.u-container etc.)  */
    /* 4. Components, ordered S1 → S21   */
    /* 5. Floating elements              */
    /* 6. Media queries (mobile-first)   */
  </style>
</head>
<body>
  <!-- S1 ... S21 in order -->
  <!-- Floating elements -->
  <script>
    /* IIFE; one module-style block per behavior */
  </script>
</body>
</html>
CSS variable system (define once in :root)
Pick palette from the screenshot (dark navy hero, primary blue band, amber CTA, white sections, light-gray alternates). Confirm exact hexes against the live site if available, otherwise use these as defaults:
:root {
  /* Brand */
  --color-primary: #1E40AF;          /* deep blue from hero/banner sections */
  --color-primary-dark: #1E3A8A;
  --color-primary-light: #3B82F6;
  --color-accent: #F59E0B;           /* amber CTA */
  --color-accent-dark: #D97706;
  --color-whatsapp: #25D366;
  /* Status */
  --color-success: #10B981;
  --color-warning: #F59E0B;
  --color-danger: #EF4444;
  --color-info: #3B82F6;
  /* Neutrals */
  --color-bg: #FFFFFF;
  --color-bg-alt: #F8FAFC;           /* light gray sections */
  --color-bg-dark: #0F172A;          /* video testimonial bg */
  --color-text: #0F172A;
  --color-text-muted: #64748B;
  --color-text-on-dark: #FFFFFF;
  --color-border: #E2E8F0;
  --color-border-strong: #CBD5E1;
  /* Type */
  --font-sans: 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
  --font-display: 'Inter', sans-serif;       /* heavier weights for H1/H2 */
  --fs-xs: 0.75rem;     /* 12 */
  --fs-sm: 0.875rem;    /* 14 */
  --fs-base: 1rem;      /* 16 */
  --fs-md: 1.125rem;    /* 18 */
  --fs-lg: 1.25rem;     /* 20 */
  --fs-xl: 1.5rem;      /* 24 */
  --fs-2xl: 2rem;       /* 32 */
  --fs-3xl: 2.5rem;     /* 40 */
  --fs-4xl: 3rem;       /* 48 — hero H1 desktop */
  /* Spacing scale */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-12: 3rem;
  --space-16: 4rem;
  --space-20: 5rem;
  --space-24: 6rem;
  /* Layout */
  --container-max: 1200px;
  --container-pad: 1.5rem;
  --section-pad-y: 5rem;
  --section-pad-y-mobile: 3rem;
  /* Radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-pill: 999px;
  /* Shadow */
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
  --shadow-md: 0 4px 12px rgba(0,0,0,0.08);
  --shadow-lg: 0 10px 30px rgba(0,0,0,0.12);
  --shadow-nav: 0 2px 20px rgba(0,0,0,0.15);
  /* Motion */
  --ease: cubic-bezier(0.4, 0, 0.2, 1);
  --t-fast: 150ms;
  --t-base: 250ms;
  --t-slow: 400ms;
  /* Z-index */
  --z-nav: 100;
  --z-float: 90;
  --z-modal: 200;
}
JS should reuse these via getComputedStyle(document.documentElement).getPropertyValue('--color-primary') whenever it needs a color value (e.g. for the altitude chart line).
Mobile-first responsive approach
All HTML and CSS is mobile-first. Default styles target the smallest viewport. Use min-width media queries to scale up — never max-width to scale down.
/* Default = mobile (< 480px) */
.hero__headline { font-size: var(--fs-2xl); }       /* 32px */
/* Scale up at breakpoints */
@media (min-width: 768px)  { .hero__headline { font-size: var(--fs-3xl); } }   /* 40px */
@media (min-width: 1024px) { .hero__headline { font-size: var(--fs-4xl); } }   /* 48px */
Breakpoints (used consistently):
| Token | Min-width | Target |
|---|---|---|
| sm | 480px | Large phone |
| md | 768px | Tablet portrait |
| lg | 1024px | Tablet landscape / small laptop |
| xl | 1280px | Desktop |
Layout defaults:
Container padding: var(--container-pad) mobile, var(--space-8) at md+.
Section vertical padding: var(--section-pad-y-mobile) mobile, var(--section-pad-y) at md+.
Multi-column grids: single column by default, grid-template-columns: repeat(2, 1fr) at md, repeat(3, 1fr) or repeat(4, 1fr) at lg.
Two-panel splits (S7, S17): stack vertically by default, side-by-side at md+.
Tables: stacked cards by default, true tables at md+ (see S8).
Touch targets: 44px minimum on all interactive elements.
HTML viewport meta: <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">.
Use clamp() for type that should scale fluidly without breakpoint steps where appropriate, e.g. font-size: clamp(2rem, 5vw + 1rem, 3rem);.
BEM naming
Format: block__element--modifier. One block per section. Examples:
nav-sticky, nav-sticky__logo, nav-sticky__cta, nav-sticky--visible
hero, hero__headline, hero__cta, hero__cta--primary
usp-card, usp-card__icon, usp-card__title
compare-table, compare-table__row, compare-table__cell--featured
itinerary, itinerary__day, itinerary__day--open, itinerary__day-header, itinerary__day-body
faq, faq__tabs, faq__tab, faq__tab--active, faq__panel, faq__item, faq__item--open
departure-card, departure-card__status, departure-card__status--available
float-whatsapp, float-back-to-top, float-back-to-top--visible, exit-popup, exit-popup--open
No utility-first or atomic classes except for a small .u-container, .u-visually-hidden, .u-no-scroll set.
JS structure
Single <script> at end of <body>, one IIFE per behavior, all guarded against missing elements (the page must not throw if a section is removed):
(function() {
  // ---- Sticky nav: show after 100px scroll ----
})();
(function() {
  // ---- Smooth scroll on internal anchor links ----
})();
(function() {
  // ---- Counter count-up via IntersectionObserver ----
})();
(function() {
  // ---- Section fade-in via IntersectionObserver ----
})();
(function() {
  // ---- FAQ tabs (S16) — only the tabs need JS; inner Q&A is native <details> ----
})();
(function() {
  // ---- Testimonial text carousel (S11) ----
})();
(function() {
  // ---- Back-to-top button ----
})();
(function() {
  // ---- WhatsApp tooltip ----
})();
(function() {
  // ---- Exit-intent popup (desktop only) ----
})();
(function() {
  // ---- Altitude chart (S13) — Canvas, no library ----
})();
(function() {
  // ---- Social proof ticker (S3) — pure CSS marquee, JS only for pause-on-hover ----
})();
Use Intersection Observer (not scroll listeners) for animation triggers. Rely on prefers-reduced-motion: reduce to skip count-ups, marquee, and fade-ins.
Accordion implementation pattern (used twice: S9 itinerary, S16 FAQ)
Use the native <details> / <summary> element. No JS for open/close — the browser handles the state, keyboard support (Enter/Space), and aria-expanded for free. JS is only needed for (a) defaulting Day 1 and Day 10 open in S9, (b) defaulting the first Q open in each FAQ tab, and (c) optional smooth-open animation.
<details class="itinerary__day" data-day="1" open>
  <summary class="itinerary__day-header">
    <span class="itinerary__day-num">D01</span>
    <span class="itinerary__day-title">Arrival in Kathmandu</span>
    <span class="itinerary__day-meta">1,400m · Arrival day</span>
    <svg class="itinerary__chevron" aria-hidden="true"></svg>
  </summary>
  <div class="itinerary__day-body">
    ...
  </div>
</details>
Styling notes:
summary { list-style: none; cursor: pointer; } and summary::-webkit-details-marker { display: none; } to hide the default disclosure triangle.
Rotate the custom chevron via details[open] .itinerary__chevron { transform: rotate(180deg); }.
For smooth open/close animation, use the modern interpolate-size: allow-keywords + transition: height approach where supported, with a graceful no-animation fallback. If browser support is a concern, leave it as instant open/close — that's the native default and is perfectly acceptable.
Day 10 highlight: details[data-day="10"] gets the special border/background styling.
Same pattern for S16 FAQ items:
<details class="faq__item" open>
  <summary class="faq__item-header">
    What's included in the $1,430 price?
    <svg class="faq__chevron" aria-hidden="true"></svg>
  </summary>
  <div class="faq__item-body">...</div>
</details>
The FAQ tabs still need JS (tabs are not a native element). Only the inner per-question expand/collapse uses <details>.
***3. Sections — build order and key specs
Build top-to-bottom in the order listed. Each section is a sibling <section> (or <header> / <aside> where semantically right) with a single BEM block.
S1 — Hero (hero)
Min-height 90vh by default, 100vh at md+.
Background image with linear-gradient(135deg, rgba(30,64,175,0.85) 0%, rgba(0,0,0,0.60) 100%) overlay.
Vertical stack inside container: trust pills row → eyebrow → H1 → sub-headline → quick stats pills → primary + secondary CTA → social proof line.
Bottom: review-platform widget bar with backdrop-filter: blur(8px). Stacks vertically by default, three columns at md+ (TripAdvisor, Google, Trustpilot).
Trust pills: horizontal scroll by default (overflow-x: auto, hide scrollbar), wrap to flex row at md+.
CTAs full-width by default, auto-width side-by-side at md+.
Use placeholder image at assets/img/hero-ebc.webp.
S3 — Social Proof Ticker (ticker)
44px tall, full-width, primary-blue background, white text.
Pure CSS marquee using @keyframes translating the inner track. Duplicate the content list inside the track so the loop is seamless. Pause on hover.
prefers-reduced-motion: reduce → animation paused, content static.
S4 — Why Us / USP Cards (usp)
Centered eyebrow + H2.
Grid: 1fr by default → repeat(2, 1fr) at md → repeat(3, 1fr) at lg.
6 cards with border-top: 4px solid var(--color-primary), padding 32px, radius var(--radius-lg), box-shadow: var(--shadow-md).
64px emoji/icon, H3 title, description.
S5 — Quick Stats Banner (stats-quick)
Full-width, var(--color-primary) bg.
Stat grid: repeat(2, 1fr) by default → repeat(4, 1fr) at md+. Each: huge number (count-up), label, sub-label.
Below: 6 include-icons row, repeat(2, 1fr) by default → repeat(3, 1fr) at md+.
S6 — Trust Signals Triple Panel (trust)
3 cards side by side:
- TripAdvisor widget placeholder: ★★★★★ 5.0/5 — "Travelers' Choice Award" (use official certificate widget embed)
- Google Reviews placeholder: 4.9/5 Stars — Based on 120+ Reviews (use official review badge or Elfsight widget)
- Certifications list: Nepal Tourism Board Licensed, Trekking Agencies Association of Nepal, Wilderness First Aid Certified, High Altitude Rescue Training, Fair Wage Certified
White cards on light-gray section background.
S7 — Included vs Excluded (includes)
Stacks vertically by default; two-column split at md+.

INCLUDED (Green header) — USD $1,430 Covers:
- FLIGHTS: Kathmandu ↔ Lukla internal flights, all ground transport in KTM, airport transfers
- PERMITS: Sagarmatha National Park, TIMS Card, Khumbu Pasang Lhamu Municipality Fee
- ACCOMMODATION: 2 nights hotel Kathmandu (twin sharing) + 12 nights teahouse on trek
- MEALS: Breakfast + Lunch + Dinner throughout entire trek (Lukla to Lukla). Breakfast only in Kathmandu Days 1-2 and 14-15
- GUIDE & PORTER: Licensed Sherpa/Nepali guide + 1 porter per 2 trekkers (max 15kg) + guide/porter meals, accommodation, insurance
- SAFETY: Full professional first aid kit, pulse oximeter, emergency evacuation planning, 24/7 support
- DOCUMENTATION: Trekking map, route guide, trip completion certificate at Base Camp, pre-trek briefing

NOT INCLUDED (Red/Orange header):
- INTERNATIONAL: Flights to/from Kathmandu, Nepal visa fees (~$30 arrival), travel insurance (MANDATORY)
- PERSONAL: Trekking gear, medications, altitude pills, extra snacks/hot drinks, alcohol
- ON-TRAIL FEES: Wi-Fi ($2-5/day), charging ($1-3), hot showers ($2-5)
- TIPS (Customary): Guide tip $8-12/day recommended, Porter tip $5-8/day recommended
- OPTIONAL: Private room upgrades, emergency helicopter evacuation insurance (critical — arrange separately)
⚠ NOTE: Travel insurance covering helicopter evacuation is NOT optional. At altitude above 4,000m, helicopter evacuation can cost $5,000–$15,000+. Ensure policy covers high-altitude trekking.

Below: full-width primary-blue banner: "Have questions about what's included? [WhatsApp Us Now →] or [Email Us →] — we respond within 2 hours"
S8 — Price Comparison (compare)
This is the conversion-critical table. It needs a real responsive strategy, not just horizontal scroll.
Mobile (<768px): Render as stacked cards, one per competitor. Nepal Social Treks card first and visually featured (amber border, ⭐ BEST badge). Each card lists all criteria as label/value rows. This keeps every comparison readable without horizontal scroll.
Tablet/desktop (≥768px): Render as a true table with all 6 columns visible.
Implementation approach — write the markup as a semantic <table>, then transform with CSS for mobile:
/* Mobile-first: table behaves as stacked cards */
.compare__table,
.compare__table thead,
.compare__table tbody,
.compare__table tr,
.compare__table th,
.compare__table td {
  display: block;
}
.compare__table thead { display: none; }                /* hide header row */
.compare__table tbody { display: grid; gap: var(--space-6); }
.compare__table tr {
  background: var(--color-bg);
  border-radius: var(--radius-lg);
  padding: var(--space-4);
  box-shadow: var(--shadow-md);
}
.compare__table td {
  display: grid;
  grid-template-columns: 1fr auto;
  padding: var(--space-2) 0;
  border-bottom: 1px solid var(--color-border);
}
.compare__table td::before {
  content: attr(data-label);                            /* row label from data-label */
  font-weight: 600;
  color: var(--color-text-muted);
}
/* Desktop: revert to real table */
@media (min-width: 768px) {
  .compare__table,
  .compare__table thead,
  .compare__table tbody,
  .compare__table tr,
  .compare__table th,
  .compare__table td { display: revert; }
  .compare__table { display: table; width: 100%; border-collapse: collapse; }
  .compare__table thead { display: table-header-group; }
  .compare__table tbody { display: table-row-group; }
  .compare__table tr { display: table-row; box-shadow: none; padding: 0; }
  .compare__table td { display: table-cell; }
  .compare__table td::before { content: none; }
  .compare__table__col--featured { background: rgba(245, 158, 11, 0.08); }
}
Markup pattern — every <td> carries a data-label so the mobile cards know what to show:
<table class="compare__table">
  <thead>
    <tr>
      <th>Criteria</th>
      <th class="compare__th--featured">NST ⭐ BEST</th>
      <th>Intrepid</th>
      <th>G Adventures</th>
      <th>Kandoo</th>
      <th>REI</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Criteria">💰 Trek Price</td>
      <td data-label="NST" class="compare__td--featured">USD $1,430</td>
      <td data-label="Intrepid">$3,200–$4,500</td>
      ...
    </tr>
  </tbody>
</table>
Note: The mobile-card layout works best when each row is a comparison criterion. To get one card per competitor on mobile (which reads better), pivot the table — make each <tr> a competitor and each <td> a criterion. Pick the orientation that reads best for the audience; the brief's table-as-given uses criteria-as-rows, which is fine for desktop. For mobile, transposing to competitor-as-card is the recommended approach. Implement by writing two versions of the data: a <table> for desktop (criteria rows, hidden below 768px) and a <div class="compare__cards"> of cards for mobile (competitor cards, hidden at and above 768px). Yes, this duplicates content — it's the cleanest readable mobile experience and the duplication is small.
Below table/cards: amber savings callout box.
S9 — 15-Day Itinerary (itinerary)
Vertical timeline column on the left (a :before line on the day-list, with circles per day) on desktop.
Each day card is a native <details> element. Days 1 and 10 ship with the open attribute in HTML. Day 10 styled as the highlight (different border/background to mark "the big day").
Each day card: day-number pill, title, location/altitude/duration meta badges, body description, meal/accommodation icons.

Full day-by-day content:
| Day | Title | Altitude | Duration | Highlights |
|-----|-------|----------|----------|------------|
| D01 | Arrival in Kathmandu | 1,400m | Arrival day | Airport pickup, hotel transfer, evening welcome briefing, gear check, team dinner |
| D02 | Kathmandu Sightseeing & Trek Prep | 1,400m | Sightseeing | Pashupatinath, Boudhanath Stupa, Swayambhunath. Final gear check + pre-trek briefing |
| D03 | Fly KTM → Lukla \| Trek to Phakding | 2,610m | 3–4 hrs | Scenic flight to Tenzing-Hillary Airport (Lukla). Rhododendron forests. Dudh Koshi River |
| D04 | Phakding → Namche Bazaar | 3,440m | 5–6 hrs | Multiple suspension bridges. Enter Sagarmatha National Park. Steep final climb. First Everest views |
| D05 | Acclimatisation Day — Namche Bazaar | 3,440m | Rest + optional hike | CRITICAL REST DAY. Everest View Hotel hike. Saturday market. Optional: Hillary School, Khumjung |
| D06 | Namche Bazaar → Tengboche | 3,870m | 5–6 hrs | Past Kyangjuma. Tengboche Monastery — spiritual heart of Khumbu. Ama Dablam views all day |
| D07 | Tengboche → Dingboche | 4,410m | 5–6 hrs | Imja Khola valley. Lhotse (4th highest), Island Peak, Makalu emerge. High-altitude village |
| D08 | Acclimatisation Day — Dingboche | 4,410m | Rest + optional hike | CRITICAL REST DAY. Optional hike to Nagarjun Hill (5,100m) for 360° panorama. Oximeter monitoring |
| D09 | Dingboche → Lobuche | 4,940m | 4–5 hrs | Past Thukla Pass memorial — tribute to Everest climbers. Scale of Khumbu region becomes apparent |
| D10 ⭐ | Lobuche → EBC → Gorak Shep [THE BIG DAY] | 5,364m EBC | 7–8 hrs | STAND AT EVEREST BASE CAMP. Khumbu Glacier. Prayer flags. The moment it all builds toward. Return to Gorak Shep overnight |
| D11 | Kala Patthar Sunrise → Pheriche | 5,545m (KP) | 7–8 hrs | Pre-dawn 3:30 AM hike to Kala Patthar. Most iconic Everest sunrise photo in the world. Long descent to Pheriche |
| D12 | Pheriche → Namche Bazaar | 3,440m | 6–7 hrs | Long descent. Altitude drop restores energy. Revisit villages with new perspective. Celebratory dinner |
| D13 | Namche Bazaar → Lukla | 2,840m | 6–7 hrs | Final trekking day. Through Monjo, Jorsale, Phakding. Farewell dinner with guide/porter team |
| D14 | Fly Lukla → Kathmandu | 1,400m | Flight day | Morning flight (weather permitting). Transfer to hotel. Free afternoon: Thamel, hot shower, celebration |
| D15 | Departure Day | 1,400m / KTM Airport | – | Final breakfast. Airport transfer. You leave Nepal transformed — with memories for a lifetime |

Below: interactive route map embed zone (placeholder for Google Maps or Wikiloc/Komoot embed showing full trek route KTM → Lukla → Namche → Tengboche → Dingboche → Lobuche → EBC → return with location pins at each overnight stop).
S10 — Departure Dates (departures)
Anchor: id="departure-dates". All page CTAs link here.
Grid: 1-up by default, 2-up at md+.
Status badge colors: 🟢 Green #10B981 = Available | 🟡 Amber #F59E0B = Filling Fast (4-6 spots) | 🔴 Red #EF4444 = Sold Out | 🔵 Blue = New Date Added

Departure cards:
- 🟢 March 15–29, 2026 (SPRING) — USD $1,430 — 12 spots — "Inquire →"
- 🟡 April 5–19, 2026 (SPRING) — USD $1,430 — Only 5 left! — "Secure Spot →"
- 🟢 April 26–May 10, 2026 (SPRING) — USD $1,430 — 12 spots — "Inquire →"
- 🟢 May 10–24, 2026 (SPRING) — USD $1,430 — 12 spots — "Inquire →"
- 🔵 September 20–October 4, 2026 (AUTUMN) — USD $1,430 — 12 spots — "Inquire →"
- 🟢 October 5–19, 2026 (AUTUMN) — USD $1,430 — 12 spots — "Inquire →"
- 🟡 October 18–November 1, 2026 (AUTUMN) — USD $1,430 — Only 6 left! — "Secure Spot →"
- 🟢 November 2–16, 2026 (AUTUMN) — USD $1,430 — 12 spots — "Inquire →"

Booking info bullets below cards:
- 💳 Deposit: $200 USD secures your spot
- 📅 Full payment: Due 45 days before departure
- 🔄 Free cancellation: Up to 30 days before departure
- 📞 Response time: Within 2 hours (WhatsApp/Email)
- ✈ International flights NOT included
- 🛡 Travel insurance: Mandatory (high-altitude policy required)

Then: "BOOKING FORM EMBED ZONE" placeholder for existing booking/inquiry form embed.
S11 — Video Testimonials + Carousel (testimonials)
Section bg var(--color-bg-dark), white text.
Default: single-column swipeable scroll (scroll-snap-type: x mandatory). At md+, 3 video cards in a row.

3 Video Cards content:
- Card 1: Sarah M. — Denver, Colorado 🇺🇸 | ★★★★★ | "Life-changing doesn't cover it" | Trekked October 2024
- Card 2: James & Emma K. — London, UK 🇬🇧 | ★★★★★ | "Booked direct, saved £1,200" | April 2024
- Card 3: Thomas H. — Munich, Germany 🇩🇪 | ★★★★★ | "Authentisch und perfekt organisiert" | May 2024

Text Carousel — 6 Rotating Testimonials (5s interval, fade transition, dot indicators, pause on hover):
1. Michael T. — San Francisco 🇺🇸 — "I've done Inca Trail, Kilimanjaro... EBC with NST is in another league." April 2024
2. Annika V. — Amsterdam 🇳🇱 — "Booked directly instead of G Adventures and saved over €800." Oct 2024
3. David L. — Toronto 🇨🇦 — "Daily oximeter checks and guide's attentiveness made all the difference." May 2024
4. Isabelle M. — Paris 🇫🇷 — "Notre guide Dawa connaissait chaque pierre du chemin." Oct 2024
5. Rachel A. — Melbourne 🇦🇺 — "Whole group was in tears at Base Camp. Pemba prepared us perfectly." April 2024
6. Marco B. — Zurich 🇨🇭 — "Fair prices, ethical team, incredible guides. Responsible tourism." Nov 2024
S12 — Meet Your Guides (guides)
1-column grid by default → 3-column at md+.
Card: circular profile photo (placeholder), name, role badge, years exp, born-in location, certifications list, languages.

Guide Profile Cards:
- PEMBA SHERPA — Head Guide | 15+ Years | Born: Namche Bazaar | NTB Licensed | Advanced First Aid | Guided 30+ countries | Languages: English, Nepali, Sherpa
- DAWA DORJE — Senior Guide | 12 Years | Born: Khumjung Village | NTB Licensed | Wilderness First Aid | Completed EBC 200+ times | Languages: English, Nepali, Tibetan
- NIMA WANGCHU — Senior Guide | 10 Years | Born: Phortse Village | NTB Licensed | First Aid Certified | Specialist in solo trekker support | Languages: English, Nepali, Hindi

Below grid: certifications row — Nepal Tourism Board Licensed | Trekking Agencies Association of Nepal | Wilderness First Aid Certified | High Altitude Rescue Training | Fair Wage Certified
S13 — Altitude & Safety (safety)
Light-blue section bg.

4 Safety Protocol Cards:
- 📊 Daily Oxygen Monitoring — SpO2 checked daily with pulse oximeter. Immediate response if below safe levels.
- 🔄 Two Acclimatisation Days Built In — Rest days at Namche (3,440m) and Dingboche (4,410m). Climb high, sleep low protocol.
- 🚁 Emergency Evacuation Planning — Insurance covering helicopter evacuation required. Pre-identified landing zones at each stop.
- 💊 Guide First Aid Training — NTB-certified wilderness first aid. Full professional kit. Equipped for altitude sickness + medical emergencies.

Altitude Profile Chart: Canvas 2D (no Chart.js). X-axis days 1–15, Y-axis 0–5,600m. Primary blue line for ascent, lighter shade for descent. Highlight EBC Day 10 (5,364m) and Kala Patthar Day 11 (5,545m). Mark acclimatisation rest days (Day 5, Day 8). Canvas re-renders on resize (debounced 150ms).

Fitness FAQ Accordion (4 native <details> items, first open):
- Q: How fit do I need to be? — Walk 5-7 hrs/day, handle stairs comfortably, moderate hikes = candidate. 3-month training plan recommended.
- Q: I've never trekked before. Can I do this? — Many first-timers complete EBC. Key is preparation. Full fitness guide sent upon booking.
- Q: Fitness or altitude — which is the bigger challenge? — Altitude is primary. Our 15-day itinerary maximises acclimatisation time. Fitness helps but is secondary.
- Q: Is there an age limit? — Guided trekkers age 16 to 72. No official limit. Health and fitness matter more than age. Consult doctor if pre-existing conditions.
S14 — Photo Gallery (gallery)
Masonry-style grid using CSS columns: column-count: 2 by default, 3 at md, 4 at lg+.
12 real trek photos (no stock images). Hover overlay with location name + altitude.

Required Photo Categories:
1. Everest Base Camp sign with trekkers celebrating
2. Kala Patthar sunrise with Everest in background
3. Suspension bridge crossing with prayer flags
4. Namche Bazaar village overview
5. Sherpa guide and trekker interaction (warm, human)
6. Teahouse interior (cozy, warm atmosphere)
7. Group photo on trail with mountain backdrop
8. Tengboche Monastery with Ama Dablam
9. Trekker at 5,364m EBC sign (iconic)
10. Night sky over Khumbu region (stars)
11. Rhododendron forest trail (spring)
12. Himalayan sunrise over Lhotse/Makalu

Below grid: [View Full Gallery on Instagram →] @nepalsocialtreks
S15 — Company Stats Counters (stats-company)
Primary-blue full-width banner.
Counter grid: repeat(2, 1fr) by default → repeat(4, 1fr) at md+ (so 8 counters land as 4×2 mobile, 4×2 wide on desktop).
Same count-up behavior as S5.

Section Headline: "20 Years. One Passion. The Himalayas."

8 Counters:
1. 20 — Years in Business (Est. 2006)
2. 500+ — Happy Trekkers Guided
3. 40+ — Countries Represented
4. 100% — Safety Record (Zero serious incidents)
5. 15 — Days. Perfect Duration.
6. 12 — Maximum Trekkers Per Group
7. 200+ — Successful EBC Completions/Yr
8. 4.9/5 — Average Star Rating (All Platforms)
S16 — Full FAQ (faq)
5 tabs at top: 💰 Pricing & Booking | 🏔 The Trek | 🎒 Preparation | 🌍 Logistics | ♻ Ethics & Sustainability
ARIA tabs pattern: role="tablist" / role="tab" / role="tabpanel". Arrow keys navigate. JS handles tab switching.
Each panel contains a stack of native <details> Q&A items. First item in each tab ships with the open attribute. Min 44px tap target on <summary>.

Tab 1 — 💰 Pricing & Booking (5 Questions):
- Q1: What exactly is included in the $1,430 price? — See full includes list. Short: everything Kathmandu to Kathmandu — flights, permits, teahouse, 3 meals/day, guide, porter.
- Q2: How do I book? — Inquiry via form or WhatsApp → confirm availability → booking form → $200 deposit secures place → full payment 45 days before departure.
- Q3: Payment methods? — USA: Credit card (Visa/MC), PayPal, bank transfer. EU: Bank transfer (SEPA/SWIFT), credit card, PayPal.
- Q4: Private departure? — Yes. 2-12 people, almost any date. Contact for custom pricing.
- Q5: Is travel insurance mandatory? — YES. Must cover helicopter evacuation (min $100,000) and high-altitude trekking. Can recommend providers.

Tab 2 — 🏔 The Trek (5 Questions):
- Q6: How difficult? — Moderate to strenuous. Altitude is bigger challenge than terrain. Well-worn, non-technical paths. Daily walking 5-8 hours.
- Q7: Maximum altitude? — 5,364m (Everest Base Camp). Kala Patthar optional on Day 11 = 5,545m.
- Q8: Will I definitely reach Base Camp? — Majority of trekkers do. Small percentage affected by altitude sickness — why our 2 acclimatisation days + daily oximeter monitoring are critical.
- Q9: What are teahouses like? — Basic but comfortable. Shared or private rooms (upgrades available). Hot meals. Limited electricity/warm water above 4,000m. Wi-Fi for small fee.
- Q10: Best season? — Spring (Mar-May): Best Everest summit views. Autumn (Sep-Nov): Clear skies, less crowded, fall colours. Both excellent.

Tab 3 — 🎒 Preparation (4 Questions):
- Q11: What gear do I need? — Detailed packing list sent on booking. Essentials: warm sleeping bag (-10°C rated), broken-in trekking boots, layers, trekking poles, down jacket above 4,000m.
- Q12: How to train? — 3 months: weekly long hikes (3-5 hrs), stair climbing, cardio. Complete training guide sent on booking.
- Q13: Altitude medication? — Consult your doctor. Acetazolamide (Diamox) commonly used. Guide monitors daily with pulse oximeter.
- Q14: Vaccinations? — Consult doctor/travel health clinic 6-8 weeks before: Hepatitis A, Typhoid, routine vaccinations. Malaria risk low at high altitude.

Tab 4 — 🌍 Logistics (4 Questions):
- Q15: Nepal visa? — Most nationalities obtain on arrival at KTM airport (~$30 for 15 days, $50 for 30 days). Check requirements for your nationality.
- Q16: Currency to bring? — USD widely accepted. Personal expenses budget: $200-$400 USD in small bills (hot drinks, charging, tips, extras).
- Q17: How to get to Kathmandu? — Fly to Tribhuvan International Airport (KTM). Detailed advice sent upon booking.
- Q18: Wi-Fi and phone signal? — Wi-Fi at most teahouses for small fee (better at lower altitudes). NTC or Ncell SIM with data recommended. Available at KTM airport.

Tab 5 — ♻ Ethics & Sustainability (3 Questions):
- Q19: How are porters treated/paid? — Above TAAN recommended minimum wage. Max 25kg carry. Proper gear, clothing, insurance. Non-negotiable.
- Q20: Environmental policy? — Leave No Trace on all treks. Carry out non-biodegradable waste. Minimise single-use plastics. Recommend teahouses with responsible waste management.
- Q21: Does booking benefit local communities? — Directly, yes. 100% locally owned. Every dollar stays in Nepal — employing local guides, supporting teahouse owners, contributing to community schools.
S17 — Mid-Page CTA (cta-mid)
Stacks by default (text panel first, photo second). At md+ switches to a 2-column split: left is var(--color-primary) panel with white text + amber CTA; right is the EBC photo.

USA Content:
- Heading: "Stop Dreaming About Everest. Start Planning Your Trek."
- Body: "Spring 2027 spots are available now. 60 seconds to send inquiry. Team responds within 2 hours — even weekends. Your adventure is one click away."
- CTA: "→ Check Available Dates" — sub-text: "60-second inquiry • 2-hour response • Risk-free"
- WhatsApp: "📱 Prefer to chat? WhatsApp us now → +977-XXX-XXXX"

EU Content:
- Heading: "The Trek to Everest Base Camp Doesn't Have to Cost a Fortune."
- Body: "Book directly with Nepal's award-winning local team and save USD $1,000–$3,000 versus international operators. Same trek. Better guides. Your money stays in Nepal."
- CTA: "→ View Departure Dates" — sub-text: "Free cancellation · Flexible deposit · Direct booking"
- WhatsApp: "📱 WhatsApp: +977-XXX-XXXX | Response within 2 hours"
S18 — Trips You May Also Like (related)
Default: horizontal scroll-snap row. At md: repeat(2, 1fr). At lg+: repeat(4, 1fr) grid.
Card: photo, trek name, duration, price, difficulty badge, description, "View Trek Details" CTA.

Related Trek Cards:
1. 🏔 Annapurna Base Camp Trek | 12 Days | From $1,150 | Moderate — Trek to 4,130m through the world's greatest natural amphitheatre.
2. 🏔 Annapurna Circuit Trek | 16 Days | From $1,280 | Challenging — Cross 5,416m Thorong La Pass through 5 climate zones and 100+ villages.
3. 🏔 Langtang Valley Trek | 10 Days | From $890 | Moderate — Nepal's hidden gem. Rhododendron forests, glacial lakes, Tamang culture near Kathmandu.
4. 🏔 Manaslu Circuit Trek | 14 Days | From $1,490 | Strenuous — Nepal's wildest restricted-area trek. Circle the world's 8th-highest peak.
S19 — About Nepal Social Treks (about)
Stacks by default; 2-column at md+ (story text left, founder/team photo right).

USA Story:
"Nepal Social Treks was founded in 2006 by a team of passionate Nepali guides who believed that the best Himalayan experiences should be led by people who grew up in the Himalayas. Two decades later, that vision hasn't changed — only the number of incredible trekkers we've had the privilege to guide. We are 100% locally owned and operated. When you book with us, your money doesn't flow to a corporate headquarters in Australia or Canada — it pays fair wages to our Nepali guides and porters, supports teahouse families along the route, and funds community schools in the Khumbu region."

EU Story:
"Nepal Social Treks was born in 2006 from a simple belief: the people best qualified to guide you through the Himalayas are the people who were born there. For 20 years, our locally owned, locally operated team has been welcoming trekkers from across Europe and the world to experience the true Himalayas. We pay our team fairly. We treat our porters with dignity. We leave the mountains as we found them."

Milestone Timeline (vertical markers on left, 10 milestones):
- 2006: Nepal Social Treks founded in Kathmandu
- 2008: First international trekker group completed EBC
- 2010: Received Nepal Tourism Board official license
- 2012: Expanded to full portfolio of Himalayan treks
- 2015: Post-earthquake — we rebuilt. Communities first.
- 2018: Achieved TripAdvisor Travelers' Choice Award
- 2020: Pivoted through pandemic. Kept our team employed.
- 2022: Resumed full operations. Welcomed world back.
- 2024: Guided 500+ trekkers. Rated 4.9/5 across platforms.
- 2026: 20 years. Still the same passion. Still 100% local.
S20 — Final CTA (cta-final)
Full-width Himalayan photo background with var(--color-primary) overlay (~80% opacity).
White text. Headline uses clamp(2rem, 4vw + 1rem, 3rem) for fluid scaling, ExtraBold weight.

USA Content:
- Headline: "The Mountain Is Ready. The Question Is — Are You?"
- Sub-headline: "Spring 2027 departures are now open. Maximum 12 trekkers per group. Secure your spot with just $200 deposit. Free cancellation if plans change."
- PRIMARY CTA (amber): "→ View Departure Dates & Book"
- SECONDARY CTA (ghost white): "📱 WhatsApp Our Team Now"
- TERTIARY (text link): "Send us an email instead →"
- Trust strip: ⭐ ★★★★★ Rated 4.9/5 by 500+ Trekkers | 🏔 20 Years Experience | 🛡 Free Cancellation | 💰 From USD $1,430 All-Inclusive

EU Content:
- Headline: "Everest Base Camp Won't Come to You. But We'll Get You There."
- Sub-headline: "Fixed departures for Spring 2027 and Autumn 2026 are available. 12 trekkers maximum. Transparent USD $1,430 all-inclusive price. Free cancellation up to 30 days before departure."
- CTA (same as USA)
- Trust strip (same as USA)
S21 — Footer
Per the brief, the existing site footer is reused. Render a placeholder <div class="footer-placeholder"><!-- Existing site footer renders here --></div> styled minimally so the page works standalone for QA.
Floating elements
WhatsApp button (float-whatsapp): Fixed bottom-right. Default 56px circle, 16px from edges. At md+: 64px circle, 80px from bottom / 24px from right. Background var(--color-whatsapp). Tooltip appears on hover (CSS) and after 5s on first page load (JS, dismiss-on-click).
Back to top (float-back-to-top): Above WhatsApp, 48px, primary blue. JS adds --visible after 400px scroll.
Exit-intent popup (exit-popup): Desktop only (gate on matchMedia('(pointer: fine) and (min-width: 1024px)').matches). Listen for mouseout where e.clientY <= 0. Show once per session (sessionStorage).

Design: Centered modal, white background, shadow overlay, close X button. EBC prayer flags dramatic hero image.

USA Content:
- Headline: "Wait — Don't Leave Without Your Free EBC Planning Guide"
- Body: "Everything you need to prepare for EBC — fitness plan, packing list, altitude tips, day-by-day. Free. Instant download."
- Form: Email input field + CTA: "Send Me the Free Guide →"
- Fine print: "No spam. Unsubscribe anytime. We'll also send you 2026/2027 early-bird departure info."

EU Content:
- Headline: "Before You Go — Download Your Free EBC Preparation Guide"
- Body: (same as USA)
- Form: (same as USA)
- Fine print: (same as USA)
***4. JS behavior specs (exact)
| Behavior | Trigger | Implementation notes |
|---|---|---|
| Sticky nav reveal | scrollY > 100 | toggle nav-sticky--visible. Throttle with requestAnimationFrame. |
| Smooth scroll | Click on a[href^="#"] | e.preventDefault(), target.scrollIntoView({behavior:'smooth', block:'start'}). Account for sticky nav with scroll-margin-top in CSS. |
| Counter count-up | IntersectionObserver, threshold 0.4 | Parse target from data-target, animate from 0 over 1500ms with requestAnimationFrame, ease-out cubic. Skip if prefers-reduced-motion. Run once per element. |
| Section fade-in | IntersectionObserver, threshold 0.1 | Add is-visible class, CSS handles transform/opacity. Skip if prefers-reduced-motion. Unobserve once visible. |
| Itinerary accordion | — | Native <details> / <summary>. Day 1 + Day 10 use open attribute in HTML. No JS. |
| FAQ tabs | Click on .faq__tab | Update --active, show matching panel by id. Arrow key navigation per ARIA tabs pattern. |
| FAQ accordion | — | Native <details> / <summary> per Q&A item. First Q in each tab marked open in HTML. No JS. |
| Testimonial carousel | setInterval 5000ms | Cross-fade between text testimonial slides. Pause on hover. Dot click jumps to slide. Reset interval on manual nav. |
| Back to top | scrollY > 400 | Toggle --visible. On click, smooth scroll to top. |
| Exit-intent | mouseout near top viewport edge | Desktop only, show once per session. Close on X or backdrop click or Esc. |
| Altitude chart | On DOMContentLoaded | Canvas 2D draw. Re-render on resize (debounced 150ms). |
| Ticker pause | mouseenter / mouseleave | Toggle animation-play-state. |
***5. Two-version differences (USA vs EU)
Same HTML structure, different copy. Build USA first, then duplicate the file and swap. The brief's content-switching table is the master list. Key differences:
All headlines, sub-headlines, eyebrow text per the brief.
CTA button labels.
Primary contact ordering (USA: email + phone + WhatsApp equal; EU: WhatsApp first).
Payment method icons order (USA: card + PayPal first; EU: SEPA first).
Testimonial set emphasis (USA: USA/CA/AU quotes; EU: UK/DE/NL/FR quotes) — the carousel keeps both sets but reorders.
Page title, meta description, canonical URL, OG tags.
JSON-LD @id and offer URL.
The brief's content table goes section-by-section; pull from it directly.
***6. Head content (per page)

USA Page:
<title>Everest Base Camp Trek 2026/27 | 15 Days from $1,430 | Nepal Social Treks</title>
<meta name="description" content="Trek to Everest Base Camp with Nepal's #1 local trekking company. 15-day all-inclusive from USD $1,430. Expert Sherpa guides, small groups (max 12), free cancellation. Est. 2006. Book direct & save.">
<link rel="canonical" href="https://nepalsocialtreks.com/everest-base-camp-trek-2026/">

EU Page:
<title>Everest Base Camp Trek 2026 | 15 Days | $1,430 USD | Nepal Social Treks</title>
<meta name="description" content="Trek to Everest Base Camp with Nepal's award-winning local guides. 15-day all-inclusive from $1,430 USD. Direct booking, no middleman. Small groups. Ethical tourism. Free cancellation.">
<link rel="canonical" href="https://nepalsocialtreks.com/everest-base-camp-trek-europe/">

<!-- Open Graph + Twitter Card -->
<!-- Preconnect to fonts and any embed origins -->
<link rel="preconnect" href="https://fonts.googleapis.com">

Schema Markup Required (JSON-LD):
- TouristTrip schema — for the EBC trek product
- AggregateRating schema — for the 4.9/5 star ratings
- FAQPage schema — for the full FAQ section (Section 16)
- Organization schema — for Nepal Social Treks company

JSON-LD must include all four schemas. Wire FAQPage entries directly from the S16 questions so the structured data matches what's on the page.
***7. Performance & a11y checklist (verify on completion)
All <img> below the fold: loading="lazy", explicit width and height, decoding="async".
Hero image: fetchpriority="high", no lazy.
Above-fold critical styles inline (already true since we're using internal CSS — but ensure non-essential rules come after).
<html lang="en">, semantic landmarks, single <h1>, logical heading order.
Color contrast ≥ 4.5:1 for body text, ≥ 3:1 for large text.
All interactive elements: focus-visible outline (2px solid var(--color-accent)).
All accordions/tabs/popup: ARIA roles + keyboard support.
All icon-only buttons: aria-label.
All form fields: associated <label> (visually hidden where needed).
Modal: trap focus while open, return focus on close, aria-modal="true".
Skip-to-content link at top of <body> (visually hidden, visible on focus).
***8. Build order suggestion
Scaffold index.html with head meta, :root variables, reset, .u-container, and section landmarks (empty <section> per S1–S21).
S2 Hero (sets brand tone — confirms palette and type).
S1 Sticky nav + reveal JS.
S5 stats + counter JS (proves Intersection Observer wiring).
S9 itinerary + accordion JS (proves accordion pattern).
S16 FAQ tabs + accordion (proves tabs pattern).
Sections in order: S3, S4, S6, S7, S8, S10, S11, S12, S13 (with chart), S14, S15, S17, S18, S19, S20, S21.
Floating elements + exit popup.
JSON-LD schemas.
A11y / performance pass.
Duplicate + swap copy for EU version.
***9. Things to ASK the user before building
Brand colors — the brief says "to be confirmed by developer" and points to the live site. If you can fetch / inspect the live site to extract exact hex values, do so; otherwise use the defaults in §2 and flag for review.
Font — Inter is a safe default. Confirm if the live site uses something else (e.g., Poppins, Montserrat).
Real assets — the brief calls for real photos (not stock) for hero, gallery, guides. Use clearly-labeled placeholders (<div class="img-placeholder">Hero photo: EBC prayer flags at golden hour</div> styled to fill the image slot) and list every required asset at the top of index.html in an HTML comment.
Phone/WhatsApp number — placeholder +977-XXX-XXXX in the brief. Use as-is unless real number provided.
Booking form embed — drop-in placeholder zone. Confirm the existing form's embed URL/snippet if available.
If the answer to any of these blocks progress, build with the placeholder and leave a <!-- TODO: --> comment.

***10. Mobile Optimisation Checklist (from dev brief)
1. Hero: 32-36px headline. Stack CTA buttons vertically. Show only 3 trust badges (scroll for rest).
2. Sticky Header: Logo + CTA button only. Phone/WhatsApp in expanded menu.
3. Comparison Table: Horizontal scroll. Nepal Social Treks column fixed/sticky on left.
4. Itinerary: All accordion — all days collapsed except Day 1 and Day 10 (Base Camp) open.
5. Video Testimonials: Single column, swipeable carousel.
6. Guide Cards: Single column, full width.
7. Departure Dates: Full-width cards, single column.
8. Trip Cards: 2-column grid or horizontal scroll.
9. FAQ: Accordion works perfectly on mobile. Min 44px tap target height.
10. CTA Buttons: Min 48px height, full width on mobile for easy tapping.
11. Images: Lazy load all below fold. WebP format for performance.
12. Page Speed Target: Under 3 seconds on mobile. Compress all images (TinyPNG/Shortpixel).