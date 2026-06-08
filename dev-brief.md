NEPAL SOCIAL TREKS

Everest Base Camp Trek — Google Ads Landing Page

Development Brief & Content Specification Document
Version 1.0 — USA & European Dual-Market Template

Client
Nepal Social Treks (nepalsocialtreks.com)
Product
Everest Base Camp Trek — 15 Days | USD $1,430
Purpose
Google Ads Landing Page — High Conversion
Markets
Version A — USA | Version B — European
Integration
Embed within existing website — NO new header/footer/nav required
Colour Scheme
To be confirmed by developer — see Design Notes section
Total Sections
21 Sections + Floating Elements (WhatsApp, Back to Top, Exit Popup)

DESIGN REFERENCE SAMPLE

The screenshot below shows the approved design mockup. Use this as the visual reference for layout, section order, and overall styling. The developer is free to select colour combinations that match brand guidelines (see Design Notes).
 

 
⚠ NOTE: Above: Full-page design sample screenshot uploaded. All sections, layout order, and content hierarchy should follow this reference. This file is provided separately as well.

DESIGN SYSTEM & DEVELOPER NOTES

Design System & Developer Notes
Colours, typography, spacing, and layout conventions should follow the existing Nepal Social Treks brand guidelines already applied on nepalsocialtreks.com. The developer is expected to match the live website's design system for consistency.
No separate style guide is provided here — please refer directly to the existing site as the reference.
 
Integration Requirements
⚠ NOTE: This landing page will be embedded within the EXISTING nepalsocialtreks.com website. NO separate header navigation or footer is required. The page should fit seamlessly within the existing site template.
 
• No new global navigation needed
• No new site footer needed
• Include a STICKY mini-navigation bar (Section 1 below) — this is internal to the landing page, not the site's main nav
• Match existing site's base CSS reset/variables where applicable
 
Performance Requirements
• Core Web Vitals: LCP under 2.5s, CLS under 0.1
• Mobile PageSpeed Score: 80+ target
• All images: WebP format, lazy loaded below fold
• Critical CSS: Inline for above-fold content
• Smooth scroll behavior on anchor links
• Counter number animations on scroll (Intersection Observer API)
• Fade-in section animations on scroll
 
Tracking Setup Required
• Google Tag Manager installed
• GA4 property linked
• Google Ads conversion tags: form submit, CTA clicks, WhatsApp taps
• Scroll depth tracking: 25%, 50%, 75%, 90%
• Video play tracking for video testimonials embedded
• Heatmap: Microsoft Clarity recommended

USA vs EUROPEAN VERSION — CONTENT SWITCHING GUIDE

This landing page will be built as two completely separate pages — one targeting USA travellers and one targeting European travellers. Each page will have its own URL and independently managed content. There is no switching mechanism or conditional content logic required.
The table below is a quick reference for the developer and content team to understand what differs between the two pages:
 
Section / Element
🇺🇸 USA VERSION
🇪🇺 EU VERSION
Hero Headline Tone
Achievement / Bucket List
Authenticity / Local experience
CTA Language
"Check Departure Dates" / "Book Your Spot"
"View Departure Dates" / "Secure Your Place"
Price Messaging
"Save 40% vs intl. operators"
"Book direct. No markup."
Ethics Emphasis
Mentioned, secondary selling point
PRIMARY selling point — leads with it
Safety Section
Prominent, very detailed
Mentioned, not led with
Testimonials Focus
USA / Canada / Australia quotes
UK / Germany / Netherlands / France quotes
Payment Methods
Credit card + PayPal prominently
Bank transfer (SEPA) first, then card
Primary Contact
Email + Phone + WhatsApp equal
WhatsApp FIRST, then Email
Review Platform
Google Reviews primary
TripAdvisor primary
Currency Display
USD prominently
USD (show EUR equivalent where possible)
FAQ Tone
Reassuring, detailed, hand-holding
Direct, factual, efficiency-focused
Social Proof Bar
Join 500+ trekkers / USA-specific
EU trekker names / EU countries
All other content
IDENTICAL
IDENTICAL

PAGE STRUCTURE — ALL 21 SECTIONS AT A GLANCE

#
Section Name
Layout / Key Notes
S1
Sticky Navigation Header
Fixed bar — appears after 100px scroll. Logo + CTA + Contact
S2
Hero Section (Above the Fold)
Full viewport height. Photo BG + overlay. Trust badges + headline + CTA
S3
Social Proof Ticker Bar
Animated scrolling marquee. Full-width blue bar
S4
Why Nepal Social Treks (USP Cards)
6-card grid (2×3 desktop, 1-col mobile)
S5
Trip Overview Quick Stats
Blue banner. 4 animated stat blocks + 6 include icons
S6
Trust Signals Triple Panel
TripAdvisor widget + Google Reviews + Certification badges
S7
What's Included vs Excluded
Two-column checklist. Green included / Red excluded
S8
Price Comparison Table
vs Intrepid, G Adventures, Kandoo, REI. KEY conversion section
S9
15-Day Itinerary
Expandable accordion. Timeline design. All 15 days
S10
Fixed Departure Dates
Calendar card grid + booking form embed zone
S11
Video Testimonials + Carousel
Dark BG. 3 video cards + rotating text carousel
S12
Meet Your Guides
3 guide profile cards + certification row
S13
Altitude & Safety
4 safety cards + altitude profile chart + fitness FAQ
S14
Photo Gallery
Masonry grid. Real trek photos only
S15
Company Stats Counters
Blue banner. 8 animated number counters
S16
Full FAQ — 5 Categories
Tab navigation + accordion. 21 questions
S17
Mid-Page CTA
Split layout: blue panel + EBC photo
S18
Trips You May Also Like
4 trek cards — Annapurna, Circuit, Langtang, Manaslu
S19
About Nepal Social Treks
Two-column: story text + milestone timeline
S20
Final CTA Section
Full-width dramatic section. Last conversion point
S21
Footer
4-column. Treks / Info / Trust badges — existing site footer if available
FLOAT
WhatsApp Button
Fixed bottom-right. Always visible. Green circle
FLOAT
Back to Top Button
Fixed bottom-right above WhatsApp. Appears after 400px scroll
FLOAT
Exit-Intent Popup
Desktop only. Email capture for free EBC Planning Guide

SECTION 1: STICKY NAVIGATION HEADER
 
A slim sticky bar that becomes visible when user scrolls past 100px. This is a landing-page-specific sticky bar — it does NOT replace the existing site's global navigation.
 
Height
64px desktop | 56px mobile
Position
Fixed, top: 0, z-index high enough to overlay all content
Background
Primary blue colour
Trigger
Appears after user scrolls 100px down the page
Shadow
0 2px 20px rgba(0,0,0,0.15)
 
Left Side:
• Nepal Social Treks logo —
• Tagline below logo (very small, 11px): "Since 2006 — 20 Years in the Himalayas"
Centre (Desktop only):
• Star rating: ★★★★★ in amber/golden colour
• Text: "Rated 4.9/5 by 500+ Trekkers"
Right Side:
• Phone number: +977-XXX-XXXX (white text, tel: link)
• WhatsApp icon button (#25D366 green): "WhatsApp Us"
• Primary CTA Button: USA → "Check 2026 Departure Dates" | EU → "View Departure Dates"
Mobile:
• Collapse to: Logo + WhatsApp icon + CTA button only
 
SECTION 2: HERO SECTION — ABOVE THE FOLD
 
Full-viewport height (100vh desktop, 90vh mobile). Background: high-resolution dramatic photograph of Everest Base Camp — prayer flags, Khumbu Glacier, golden hour light, real trekkers visible. Dark gradient overlay on photo.
DEV: Gradient overlay: linear-gradient(135deg, rgba(primary-blue, 0.85) 0%, rgba(0,0,0,0.60) 100%)
 
Trust Badge Row — Top of Hero
Horizontal row of 5 trust pills. White text on semi-transparent dark background. Horizontally scrollable on mobile.
• 🏆 Nepal Tourism Board Licensed
• ⭐ TripAdvisor Travelers' Choice
• 🏔 Himalayan Association Member
• ✅ 20 Years Experience (Est. 2006)
• 🌍 500+ Happy Trekkers
 
Eyebrow Text (above H1):
• USA: "THE ADVENTURE OF A LIFETIME AWAITS"
• EU: "YOUR HIMALAYAN JOURNEY BEGINS HERE"
Main Headline H1:
🇺🇸 USA VERSION
"Stand at the Foot of Everest. 15 Days. One Decision."
🇪🇺 EU VERSION
"Trek to Everest Base Camp with the Locals Who Call It Home."
 
Sub-headline:
• USA: "Join thousands of adventurers from 40+ countries who chose Nepal's most trusted local trekking company. All-inclusive from USD $1,430. No middleman. No hidden fees. No regrets."
• EU: "Book directly with Nepal's award-winning local guides — no middleman markup. 15-day all-inclusive trek to 5,364m. Transparent pricing. Ethical tourism. Free cancellation up to 30 days before departure."
 
Quick-Stats Bar (4 pills):
• 📅 15 Days  |  📍 5,364m Summit  |  💰 From USD $1,430  |  👥 Max 12 Per Group
 
Primary CTA Button (Amber, large, full-width on mobile):
• USA: "→ Check 2026/27 Departure Dates" — sub-text: "🔒 Reserve with just $200 deposit · Free cancellation"
• EU: "→ View Available Departures" — sub-text: "🔒 Flexible booking · Free cancellation up to 30 days"
Secondary CTA (Ghost button):
• USA: "↓ See What's Included"
• EU: "↓ View Full Itinerary"
Social Proof Micro-line (below CTAs):
• USA: "⭐ Rated #1 Local EBC Operator | Trusted by trekkers from USA, UK, Australia & 40+ countries"
• EU: "⭐ TripAdvisor Travelers' Choice | Trusted by trekkers from UK, Germany, Netherlands & 40+ countries"
 
Hero Bottom — Review Platform Widgets Row:
White semi-transparent bar at bottom of hero (backdrop-filter: blur(8px)). 3 side-by-side review indicators:
• TripAdvisor: Official certificate widget embed — ★★★★★ 5.0/5 — "Travelers' Choice Award"
• Google Reviews: 4.9/5 Stars — Based on 120+ Reviews — official embed badge
• Trustpilot: 4.8/5 Excellent — Based on 80+ Reviews
DEV: Use TripAdvisor's official certificate widget embed code. Use Google's official review badge or Elfsight widget for Google Reviews.
 
SECTION 3: SOCIAL PROOF TICKER / ANNOUNCEMENT BAR
 
Full-width bar immediately below the hero. Animated horizontal ticker/marquee scrolling continuously left. Height: 44px. White text on blue background.
 
Scrolling Content:
• 🏔 Michael T. from California just inquired about October 2026
• ✅ Sarah & James from London booked their April 2026 departure
• ⭐ "Best decision of my life" — Thomas H., Munich
• 📅 Spring 2026 has only 8 spots remaining
• 🇺🇸 Join 500+ trekkers who've trusted Nepal Social Treks
• 🏔 Emma from Amsterdam booked yesterday
DEV: These are illustrative social proof messages. Client can replace with real notifications via TrustPulse or Proof plugin. Implement as CSS marquee animation or JS-based ticker.
 
SECTION 4: WHY NEPAL SOCIAL TREKS — 6 USP CARDS
 
White background section. Centered header block, then 6-card grid (2 rows × 3 columns desktop, 1 column mobile).
 
Section Heading:
• USA: "Not Just Another Trekking Company. We ARE the Local Experts."
• EU: "The Difference Between a Tourist Trip and an Authentic Himalayan Experience."
 
Card Design:
White background, border-radius: 12px, box-shadow, border-top: 4px solid primary blue, padding 32px. Large icon (64px) at top, H3 title, description paragraph.
 
Icon
Card Title
USA Description (key points)
EU Description (key points)
🏔
Born in the Khumbu Valley
Sherpa guides born/raised near Everest. Local knowledge = safer decisions + richer cultural insights vs international operators.
Grew up in Khumbu Valley. Know every teahouse owner personally. Genuine cultural exchange — not scripted tour.
📅
20 Years. 500+ Summits. Zero Compromises. (Badge: Est. 2006)
Founded 2006. 20-year track record. Safety and experience in Nepal's most experienced local team.
Two decades refining EBC experience — teahouse selection, altitude acclimatisation protocols. Experience is your safety net.
💰
USD $1,430. Everything Included. (Badge: No Hidden Fees)
Covers permits, internal flights, teahouse, 3 meals/day, expert Sherpa guide, porter. Intl. operators charge $3,000+ for same.
What you see is what you pay. No hidden charges. No optional extras that become mandatory. Honest pricing.
👥
Maximum 12 Trekkers Per Group
No 40-person bus tour. 12-person cap = personalised safety, better acclimatisation monitoring, more flexibility.
Guide knows your name, fitness level, pace. 12 max = personal attention, responsible tourism, authentic experience.
🌱
Ethical Tourism. Fair Wages. Real Impact.
Every booking supports Nepali guides, porters, mountain communities. Fair wages above industry standard. Leave-no-trace.
Porters paid above TAAN minimum wage. Proper insurance. Leave-no-trace. Support local schools in Khumbu. Ethical choice.
🛡
Book Risk-Free. Change Plans? No Problem.
Free cancellation up to 30 days before departure. $200 deposit secures spot. No pressure, no penalty.
Free cancellation up to 30 days. Small deposit. Flexible date changes. We work with you, not against you.

SECTION 5: TRIP OVERVIEW QUICK STATS
 
Full-width section. Blue background, white text throughout. 4-column stat grid (desktop), 2×2 (mobile). Numbers animate with count-up on scroll.
 
Section Heading:
• USA: "Everything You Need to Know at a Glance"
• EU: "The Essential Facts — No Fluff"
 
4 Stat Blocks (animated count-up):
Stat
STAT 1
STAT 2
STAT 3
STAT 4
Large Number
15
5,364m
$1,430
12
Label
Days Duration
Maximum Altitude
All-Inclusive Price (USD)
Max Trekkers Per Group
Sub-label
Lukla to Base Camp & Return
Everest Base Camp elevation
No hidden fees guaranteed
Personalised attention
 
6 Quick-Include Icons Row:
• ✅ Flights Included  |  ✅ All Permits  |  ✅ Expert Sherpa Guide
• ✅ Porter Service  |  ✅ 3 Meals/Day  |  ✅ Teahouse Lodging
Design: Amber checkmarks, 2 rows × 3 columns (desktop), 2 columns (mobile)

SECTION 7: WHAT'S INCLUDED vs EXCLUDED
 
White background. Two-column split layout. Left: included items in green. Right: excluded items in red/orange. Clean scannable checklist.
 
Heading:
• USA: "Everything Included. Zero Surprises."
• EU: "Complete Transparency — What's In & What's Out"
 
INCLUDED (Green header) — USD $1,430 Covers:
• FLIGHTS: Kathmandu ↔ Lukla internal flights, all ground transport in KTM, airport transfers
• PERMITS: Sagarmatha National Park, TIMS Card, Khumbu Pasang Lhamu Municipality Fee
• ACCOMMODATION: 2 nights hotel Kathmandu (twin sharing) + 12 nights teahouse on trek
• MEALS: Breakfast + Lunch + Dinner throughout entire trek (Lukla to Lukla). Breakfast only in Kathmandu Days 1-2 and 14-15
• GUIDE & PORTER: Licensed Sherpa/Nepali guide + 1 porter per 2 trekkers (max 15kg) + guide/porter meals, accommodation, insurance
• SAFETY: Full professional first aid kit, pulse oximeter, emergency evacuation planning, 24/7 support
• DOCUMENTATION: Trekking map, route guide, trip completion certificate at Base Camp, pre-trek briefing
 
NOT INCLUDED (Red/Orange header):
• INTERNATIONAL: Flights to/from Kathmandu, Nepal visa fees (~$30 arrival), travel insurance (MANDATORY)
• PERSONAL: Trekking gear, medications, altitude pills, extra snacks/hot drinks, alcohol
• ON-TRAIL FEES: Wi-Fi ($2-5/day), charging ($1-3), hot showers ($2-5)
• TIPS (Customary): Guide tip $8-12/day recommended, Porter tip $5-8/day recommended
• OPTIONAL: Private room upgrades, emergency helicopter evacuation insurance (critical — arrange separately)
⚠ NOTE: Travel insurance covering helicopter evacuation is NOT optional. At altitude above 4,000m, helicopter evacuation can cost $5,000–$15,000+. Ensure policy covers high-altitude trekking.
 
Below Columns — Blue Banner:
"Have questions about what's included? [WhatsApp Us Now →] or [Email Us →] — we respond within 2 hours"

SECTION 8: PRICE COMPARISON TABLE
 
CRITICAL conversion section. Full-width table with 6 columns. Nepal Social Treks column is highlighted as featured/best value. Sticky first column on mobile horizontal scroll.
 
Heading:
• USA: "Why Pay 3x More for the Same Trek?"
• EU: "Compare Before You Book — The Numbers Speak"
 
Comparison Criteria vs Competitors:
Criteria
NST ⭐ BEST
Intrepid
G Adv.
Kandoo
REI
💰 Trek Price
★ USD $1,430
$3,200–$4,500
$2,800–$4,000
$1,800–$2,800
$3,800–$5,500
📅 Duration
15 Days
15 Days
14 Days
14 Days
16 Days
👤 Guide Nationality
✅ Born in Nepal (Sherpa)
❌ Varies
❌ Varies
⚠ Mix
❌ US-based lead
👥 Max Group Size
✅ 12 Trekkers
❌ Up to 16
❌ Up to 16
⚠ Up to 14
⚠ Up to 12
✈ Internal Flights
✅ Included
✅ Included
✅ Included
✅ Included
✅ Included
📋 All Permits
✅ Included
✅ Included
✅ Included
✅ Included
✅ Included
🍽 All Meals on Trek
✅ 3x Daily
✅ Included
✅ Included
⚠ Partial
✅ Included
🎒 Porter Included
✅ 1 per 2 pax
✅ Included
✅ Included
⚠ Shared
✅ Included
🛡 Free Cancellation
✅ Up to 30 days
⚠ Varies
⚠ Varies
❌ Strict
❌ Strict
💳 Low Deposit
✅ $200 deposit
❌ Higher
❌ Higher
❌ Higher
❌ Higher
🌱 Ethical Porter Pay
✅ Above standard
⚠ Unknown
⚠ Varies
⚠ Unknown
⚠ Unknown
🏛 Local Nepal Owned
✅ 100% Local
❌ Australia
❌ Canada
❌ UK
❌ USA
⭐ Reviews
★★★★★ 4.9/5
★★★★ 4.3/5
★★★★ 4.2/5
★★★★ 4.4/5
★★★★ 4.1/5
 
Savings Callout Box (amber background below table):
"Book with Nepal Social Treks and save USD $1,370–$3,070 vs international operators for the IDENTICAL trek experience."

SECTION 9: 15-DAY ITINERARY
 
White background. Left sidebar: vertical timeline/progress line in primary blue. Right: day cards. Expandable accordion on mobile (Day 1 + Day 10 open by default). All days visible on desktop.
 
Heading:
• USA: "Your 15-Day Adventure — Day by Day"
• EU: "15 Days. Every Step Planned. Every View Earned."
 
Day Card Design:
Day number pill (blue bg, white text) | Day title (H3, bold) | Location/altitude/duration badges | Description | Meal/accommodation icons
 
Day
Title & Route
Altitude
Duration
Description Highlights
D01
Arrival in Kathmandu
1,400m
Arrival day
Airport pickup, hotel transfer, evening welcome briefing, gear check, team dinner.
D02
Kathmandu Sightseeing & Trek Prep
1,400m
Sightseeing
Pashupatinath, Boudhanath Stupa, Swayambhunath. Final gear check + pre-trek briefing.
D03
Fly KTM → Lukla | Trek to Phakding
2,610m
3–4 hrs trek
Scenic flight to Tenzing-Hillary Airport (Lukla). Rhododendron forests. Dudh Koshi River.
D04
Phakding → Namche Bazaar
3,440m
5–6 hrs
Multiple suspension bridges. Enter Sagarmatha National Park. Steep final climb. First Everest views.
D05
Acclimatisation Day — Namche Bazaar
3,440m
Rest + optional hike
CRITICAL REST DAY. Everest View Hotel hike. Saturday market. Optional: Hillary School, Khumjung.
D06
Namche Bazaar → Tengboche
3,870m
5–6 hrs
Past Kyangjuma. Tengboche Monastery — spiritual heart of Khumbu. Ama Dablam views all day.
D07
Tengboche → Dingboche
4,410m
5–6 hrs
Imja Khola valley. Lhotse (4th highest), Island Peak, Makalu emerge. High-altitude village.
D08
Acclimatisation Day — Dingboche
4,410m
Rest + optional hike
CRITICAL REST DAY. Optional hike to Nagarjun Hill (5,100m) for 360° panorama. Oximeter monitoring.
D09
Dingboche → Lobuche
4,940m
4–5 hrs
Past Thukla Pass memorial — tribute to Everest climbers. Scale of Khumbu region becomes apparent.
D10 ⭐
Lobuche → EBC → Gorak Shep [THE BIG DAY]
5,364m EBC
7–8 hrs
STAND AT EVEREST BASE CAMP. Khumbu Glacier. Prayer flags. The moment it all builds toward. Return to Gorak Shep overnight.
D11
Kala Patthar Sunrise → Pheriche
5,545m (KP)
7–8 hrs
Pre-dawn 3:30 AM hike to Kala Patthar. Most iconic Everest sunrise photo in the world. Long descent to Pheriche.
D12
Pheriche → Namche Bazaar
3,440m
6–7 hrs
Long descent. Altitude drop restores energy. Revisit villages with new perspective. Celebratory dinner.
D13
Namche Bazaar → Lukla
2,840m
6–7 hrs
Final trekking day. Through Monjo, Jorsale, Phakding. Farewell dinner with guide/porter team.
D14
Fly Lukla → Kathmandu
1,400m
Flight day
Morning flight (weather permitting). Transfer to hotel. Free afternoon: Thamel, hot shower, celebration.
D15
Departure Day
1,400m / KTM Airport
–
Final breakfast. Airport transfer. You leave Nepal transformed — with memories for a lifetime.
 
DEV: Below itinerary: embed interactive map (Google Maps or Wikiloc/Komoot) showing full trek route KTM → Lukla → Namche → Tengboche → Dingboche → Lobuche → EBC → return. Each overnight stop marked with location pin.

SECTION 10: FIXED DEPARTURE DATES
 
Light gray background. Calendar-style card layout. This section must have anchor id='departure-dates' — all CTAs throughout the page link here.
 
Heading:
• USA: "2026/2027 Departure Dates — Limited Spots Per Group"
• EU: "Fixed Departures 2026/2027 — Secure Your Place"
 
Status Badge Colours:
• 🟢 Green #10B981 = Available
• 🟡 Amber #F59E0B = Filling Fast (4-6 spots left)
• 🔴 Red #EF4444 = Sold Out
• 🔵 Blue (primary) = New Date Added
 
2026/2027 Departure Cards:
Status
Dates
Price
Spots
CTA Button
🟢 AVAILABLE
March 15 – March 29, 2026 (SPRING)
USD $1,430
12 spots
Inquire →
🟡 FILLING FAST
April 5 – April 19, 2026 (SPRING)
USD $1,430
Only 5 left!
Secure Spot →
🟢 AVAILABLE
April 26 – May 10, 2026 (SPRING)
USD $1,430
12 spots
Inquire →
🟢 AVAILABLE
May 10 – May 24, 2026 (SPRING)
USD $1,430
12 spots
Inquire →
🔵 NEW DATE
September 20 – October 4, 2026 (AUTUMN)
USD $1,430
12 spots
Inquire →
🟢 AVAILABLE
October 5 – October 19, 2026 (AUTUMN)
USD $1,430
12 spots
Inquire →
🟡 FILLING FAST
October 18 – November 1, 2026 (AUTUMN)
USD $1,430
Only 6 left!
Secure Spot →
🟢 AVAILABLE
November 2 – November 16, 2026 (AUTUMN)
USD $1,430
12 spots
Inquire →
 
Booking Information Box (below cards):
• 💳 Deposit: $200 USD secures your spot
• 📅 Full payment: Due 45 days before departure
• 🔄 Free cancellation: Up to 30 days before departure
• 📞 Inquiry response time: Within 2 hours (WhatsApp/Email)
• ✈ International flights NOT included — book separately
• 🛡 Travel insurance: Mandatory (high-altitude policy required)
DEV: BOOKING FORM EMBED ZONE: Embed Nepal Social Treks' existing booking/inquiry form here. Form should allow date selection from the fixed departure dates above.

SECTION 11: VIDEO TESTIMONIALS + TEXT CAROUSEL
 
Dark background (#0F172A). 3 video cards side by side (desktop), single column swipeable (mobile). Below: auto-rotating text testimonial carousel.
 
Heading:
• USA: "Don't Take Our Word For It — Hear From Fellow Adventurers"
• EU: "Independent Reviews From Real Trekkers"
 
3 Video Cards — Content:
• Card 1: Sarah M. — Denver, Colorado 🇺🇸 | ★★★★★ | "Life-changing doesn't cover it" | Trekked October 2024
• Card 2: James & Emma K. — London, UK 🇬🇧 | ★★★★★ | "Booked direct, saved £1,200" | April 2024
• Card 3: Thomas H. — Munich, Germany 🇩🇪 | ★★★★★ | "Authentisch und perfekt organisiert" | May 2024
DEV: Use real testimonial videos from actual trekkers. Embed YouTube or host directly. If no video available, use high-quality photo testimonials in same format as starting point.
 
Text Carousel — 6 Rotating Testimonials:
• 1. Michael T. — San Francisco 🇺🇸 — "I've done Inca Trail, Kilimanjaro... EBC with NST is in another league." April 2024
• 2. Annika V. — Amsterdam 🇳🇱 — "Booked directly instead of G Adventures and saved over €800." Oct 2024
• 3. David L. — Toronto 🇨🇦 — "Daily oximeter checks and guide's attentiveness made all the difference." May 2024
• 4. Isabelle M. — Paris 🇫🇷 — "Notre guide Dawa connaissait chaque pierre du chemin." Oct 2024
• 5. Rachel A. — Melbourne 🇦🇺 — "Whole group was in tears at Base Camp. Pemba prepared us perfectly." April 2024
• 6. Marco B. — Zurich 🇨🇭 — "Fair prices, ethical team, incredible guides. Responsible tourism." Nov 2024
 
SECTION 12: MEET YOUR GUIDES
 
White background. 3-column card grid (desktop), 1-column (mobile). Real guide photos essential — circular profile photos.
 
Heading:
• USA: "Born in the Mountains. Expert in Every Step."
• EU: "Your Guides Are Not Just Employees — They're the Heart of This Trek."
 
3 Guide Profile Cards:
• PEMBA SHERPA — Head Guide | 15+ Years | Born: Namche Bazaar | NTB Licensed | Advanced First Aid | Guided 30+ countries | Languages: English, Nepali, Sherpa
• DAWA DORJE — Senior Guide | 12 Years | Born: Khumjung Village | NTB Licensed | Wilderness First Aid | Completed EBC 200+ times | Languages: English, Nepali, Tibetan
• NIMA WANGCHU — Senior Guide | 10 Years | Born: Phortse Village | NTB Licensed | First Aid Certified | Specialist in solo trekker support | Languages: English, Nepali, Hindi
 
Below Guides — Certification Row:
• Nepal Tourism Board Licensed | Trekking Agencies Association of Nepal | Wilderness First Aid Certified | High Altitude Rescue Training | Fair Wage Certified
 
SECTION 13: ALTITUDE & SAFETY SECTION
 
Light blue background. 4 safety protocol cards + altitude profile chart + fitness FAQ accordion.
 
Heading:
• USA: "Worried About Altitude? Here's Exactly How We Keep You Safe."
• EU: "Altitude Safety — Our Protocols Are Non-Negotiable"
 
4 Safety Protocol Cards:
• 📊 Daily Oxygen Monitoring — SpO2 checked daily with pulse oximeter. Immediate response if below safe levels.
• 🔄 Two Acclimatisation Days Built In — Rest days at Namche (3,440m) and Dingboche (4,410m). Climb high, sleep low protocol.
• 🚁 Emergency Evacuation Planning — Insurance covering helicopter evacuation required. Pre-identified landing zones at each stop.
• 💊 Guide First Aid Training — NTB-certified wilderness first aid. Full professional kit. Equipped for altitude sickness + medical emergencies.
 
DEV: Altitude Profile Chart: Line graph. X-axis Days 1-15, Y-axis 0–5,600m. Highlight EBC Day 10 (5,364m) and Kala Patthar Day 11 (5,545m). Mark acclimatisation rest days. Primary blue line for ascent, lighter shade for descent. Use Chart.js or D3.js.
 
Fitness FAQ Accordion (4 questions):
• Q: How fit do I need to be? — Walk 5-7 hrs/day, handle stairs comfortably, moderate hikes = candidate. 3-month training plan recommended.
• Q: I've never trekked before. Can I do this? — Many first-timers complete EBC. Key is preparation. Full fitness guide sent upon booking.
• Q: Fitness or altitude — which is the bigger challenge? — Altitude is primary. Our 15-day itinerary maximises acclimatisation time. Fitness helps but is secondary.
• Q: Is there an age limit? — Guided trekkers age 16 to 72. No official limit. Health and fitness matter more than age. Consult doctor if pre-existing conditions.
 
SECTION 14: PHOTO GALLERY
 
Full-width masonry or grid layout. 3-4 columns (desktop), 2 columns (mobile). REAL TREK PHOTOS ONLY — no stock images. Hover effect showing location name + altitude.
 
Required Photo Categories:
• [1] Everest Base Camp sign with trekkers celebrating
• [2] Kala Patthar sunrise with Everest in background
• [3] Suspension bridge crossing with prayer flags
• [4] Namche Bazaar village overview
• [5] Sherpa guide and trekker interaction (warm, human)
• [6] Teahouse interior (cozy, warm atmosphere)
• [7] Group photo on trail with mountain backdrop
• [8] Tengboche Monastery with Ama Dablam
• [9] Trekker at 5,364m EBC sign (iconic)
• [10] Night sky over Khumbu region (stars)
• [11] Rhododendron forest trail (spring)
• [12] Himalayan sunrise over Lhotse/Makalu
Below gallery: [View Full Gallery on Instagram →] @nepalsocialtreks
 
SECTION 15: COMPANY STATS COUNTERS
 
Blue background. White text. 8 animated number counters. 4-column grid (desktop), 2×2 per row (mobile). Numbers animate count-up on scroll into view.
 
Section Headline: "20 Years. One Passion. The Himalayas."
 
20
Years in Business (Est. 2006)
500+
Happy Trekkers Guided
40+
Countries Represented
100%
Safety Record (Zero serious incidents)
15
Days. Perfect Duration.
12
Maximum Trekkers Per Group
200+
Successful EBC Completions/Yr
4.9/5
Average Star Rating (All Platforms)

SECTION 16: FULL FAQ — 5 CATEGORIES
 
White background. Tab navigation (5 category tabs) + accordion-style Q&A. Large tap targets minimum 44px for mobile. Tab navigation with smooth switching.
 
Heading:
• USA: "Every Question You're Thinking. Answered."
• EU: "Frequently Asked Questions — Complete Transparency"
 
TAB 1 — 💰 Pricing & Booking (5 Questions):
• Q1: What exactly is included in the $1,430 price? — See full includes list. Short: everything Kathmandu to Kathmandu — flights, permits, teahouse, 3 meals/day, guide, porter.
• Q2: How do I book? — Inquiry via form or WhatsApp → confirm availability → booking form → $200 deposit secures place → full payment 45 days before departure.
• Q3: Payment methods? — USA: Credit card (Visa/MC), PayPal, bank transfer. EU: Bank transfer (SEPA/SWIFT), credit card, PayPal.
• Q4: Private departure? — Yes. 2-12 people, almost any date. Contact for custom pricing.
• Q5: Is travel insurance mandatory? — YES. Must cover helicopter evacuation (min $100,000) and high-altitude trekking. Can recommend providers.
 
TAB 2 — 🏔 The Trek (5 Questions):
• Q6: How difficult? — Moderate to strenuous. Altitude is bigger challenge than terrain. Well-worn, non-technical paths. Daily walking 5-8 hours.
• Q7: Maximum altitude? — 5,364m (Everest Base Camp). Kala Patthar optional on Day 11 = 5,545m.
• Q8: Will I definitely reach Base Camp? — Majority of trekkers do. Small percentage affected by altitude sickness — why our 2 acclimatisation days + daily oximeter monitoring are critical.
• Q9: What are teahouses like? — Basic but comfortable. Shared or private rooms (upgrades available). Hot meals. Limited electricity/warm water above 4,000m. Wi-Fi for small fee.
• Q10: Best season? — Spring (Mar-May): Best Everest summit views. Autumn (Sep-Nov): Clear skies, less crowded, fall colours. Both excellent.
 
TAB 3 — 🎒 Preparation (4 Questions):
• Q11: What gear do I need? — Detailed packing list sent on booking. Essentials: warm sleeping bag (-10°C rated), broken-in trekking boots, layers, trekking poles, down jacket above 4,000m.
• Q12: How to train? — 3 months: weekly long hikes (3-5 hrs), stair climbing, cardio. Complete training guide sent on booking.
• Q13: Altitude medication? — Consult your doctor. Acetazolamide (Diamox) commonly used. Guide monitors daily with pulse oximeter.
• Q14: Vaccinations? — Consult doctor/travel health clinic 6-8 weeks before: Hepatitis A, Typhoid, routine vaccinations. Malaria risk low at high altitude.
 
TAB 4 — 🌍 Logistics (4 Questions):
• Q15: Nepal visa? — Most nationalities obtain on arrival at KTM airport (~$30 for 15 days, $50 for 30 days). Check requirements for your nationality.
• Q16: Currency to bring? — USD widely accepted. Personal expenses budget: $200-$400 USD in small bills (hot drinks, charging, tips, extras).
• Q17: How to get to Kathmandu? — Fly to Tribhuvan International Airport (KTM). Detailed advice sent upon booking.
• Q18: Wi-Fi and phone signal? — Wi-Fi at most teahouses for small fee (better at lower altitudes). NTC or Ncell SIM with data recommended. Available at KTM airport.
 
TAB 5 — ♻ Ethics & Sustainability (3 Questions):
• Q19: How are porters treated/paid? — Above TAAN recommended minimum wage. Max 25kg carry. Proper gear, clothing, insurance. Non-negotiable.
• Q20: Environmental policy? — Leave No Trace on all treks. Carry out non-biodegradable waste. Minimise single-use plastics. Recommend teahouses with responsible waste management.
• Q21: Does booking benefit local communities? — Directly, yes. 100% locally owned. Every dollar stays in Nepal — employing local guides, supporting teahouse owners, contributing to community schools.
 
SECTION 17: MID-PAGE CTA SECTION
 
Full-width split layout. Left: primary blue panel with white text and CTA. Right: dramatic EBC photo.
 
Left Panel Content:
• USA Heading: "Stop Dreaming About Everest. Start Planning Your Trek."
• USA Body: "Spring 2027 spots are available now. 60 seconds to send inquiry. Team responds within 2 hours — even weekends. Your adventure is one click away."
• USA CTA: "→ Check Available Dates" — sub-text: "60-second inquiry • 2-hour response • Risk-free"
• USA WhatsApp: "📱 Prefer to chat? WhatsApp us now → +977-XXX-XXXX"
 
• EU Heading: "The Trek to Everest Base Camp Doesn't Have to Cost a Fortune."
• EU Body: "Book directly with Nepal's award-winning local team and save USD $1,000–$3,000 versus international operators. Same trek. Better guides. Your money stays in Nepal."
• EU CTA: "→ View Departure Dates" — sub-text: "Free cancellation · Flexible deposit · Direct booking"
• EU WhatsApp: "📱 WhatsApp: +977-XXX-XXXX | Response within 2 hours"
 
SECTION 18: TRIPS YOU MAY ALSO LIKE
 
Light gray background. 4-column grid (desktop), horizontal scroll / 2-column (mobile). Each card: photo, trek name, duration, price, difficulty badge, short description, CTA.
 
CARD 1
CARD 2
CARD 3
CARD 4
🏔 Annapurna Base Camp Trek
12 Days | From $1,150 | Moderate
Trek to 4,130m through the world's greatest natural amphitheatre.
🏔 Annapurna Circuit Trek
16 Days | From $1,280 | Challenging
Cross 5,416m Thorong La Pass through 5 climate zones and 100+ villages.
🏔 Langtang Valley Trek
10 Days | From $890 | Moderate
Nepal's hidden gem. Rhododendron forests, glacial lakes, Tamang culture near Kathmandu.
🏔 Manaslu Circuit Trek
14 Days | From $1,490 | Strenuous
Nepal's wildest restricted-area trek. Circle the world's 8th-highest peak.

SECTION 19: ABOUT NEPAL SOCIAL TREKS
 
Two-column layout. Left: company story text. Right: team/founder photo. Below: milestone timeline.
 
USA Story:
"Nepal Social Treks was founded in 2006 by a team of passionate Nepali guides who believed that the best Himalayan experiences should be led by people who grew up in the Himalayas. Two decades later, that vision hasn't changed — only the number of incredible trekkers we've had the privilege to guide. We are 100% locally owned and operated. When you book with us, your money doesn't flow to a corporate headquarters in Australia or Canada — it pays fair wages to our Nepali guides and porters, supports teahouse families along the route, and funds community schools in the Khumbu region."
 
EU Story:
"Nepal Social Treks was born in 2006 from a simple belief: the people best qualified to guide you through the Himalayas are the people who were born there. For 20 years, our locally owned, locally operated team has been welcoming trekkers from across Europe and the world to experience the true Himalayas. We pay our team fairly. We treat our porters with dignity. We leave the mountains as we found them."
 
Milestone Timeline:
• 2006: Nepal Social Treks founded in Kathmandu
• 2008: First international trekker group completed EBC
• 2010: Received Nepal Tourism Board official license
• 2012: Expanded to full portfolio of Himalayan treks
• 2015: Post-earthquake — we rebuilt. Communities first.
• 2018: Achieved TripAdvisor Travelers' Choice Award
• 2020: Pivoted through pandemic. Kept our team employed.
• 2022: Resumed full operations. Welcomed world back.
• 2024: Guided 500+ trekkers. Rated 4.9/5 across platforms.
• 2026: 20 years. Still the same passion. Still 100% local.
 
SECTION 20: FINAL CTA SECTION
 
Dramatic full-width section. Background: Himalayan panorama photo with primary blue overlay (80% opacity). All white text. LAST conversion point before footer.
 
Main Headline (ExtraBold, 48px desktop / 32px mobile):
• USA: "The Mountain Is Ready. The Question Is — Are You?"
• EU: "Everest Base Camp Won't Come to You. But We'll Get You There."
 
Sub-headline:
• USA: "Spring 2027 departures are now open. Maximum 12 trekkers per group. Secure your spot with just $200 deposit. Free cancellation if plans change."
• EU: "Fixed departures for Spring 2027 and Autumn 2026 are available. 12 trekkers maximum. Transparent USD $1,430 all-inclusive price. Free cancellation up to 30 days before departure."
 
CTA Buttons (stacked or side by side):
• PRIMARY (amber, large): "→ View Departure Dates & Book"
• SECONDARY (ghost white): "📱 WhatsApp Our Team Now"
• TERTIARY (text link, small): "Send us an email instead →"
 
Below CTAs — Trust Strip:
⭐ ★★★★★ Rated 4.9/5 by 500+ Trekkers | 🏔 20 Years Experience | 🛡 Free Cancellation | 💰 From USD $1,430 All-Inclusive

SECTION FLOAT: FLOATING ELEMENTS — ALWAYS VISIBLE
 
WhatsApp Floating Button
Position
Fixed, bottom-right — 80px from bottom, 24px from right
Design
Circle button, 64px diameter, WhatsApp green #25D366
Mobile
Same position, 56px diameter
Link
https://wa.me/977XXXXXXXX?text=Hi, I'm interested in the Everest Base Camp Trek
USA Tooltip
"Questions? WhatsApp us!"
EU Tooltip
"WhatsApp us — Quick response!"
 
Back to Top Button
Position
Fixed, bottom-right, above WhatsApp button
Design
Circle, 48px, primary blue, white up arrow icon
Trigger
Appears after user scrolls 400px down
 
Exit-Intent Popup (Desktop Only)
Trigger
Mouse moves toward browser address bar (exit intent detection)
Design
Centered modal, white background, shadow overlay, close X button
Image
EBC prayer flags — dramatic hero image
USA Headline
"Wait — Don't Leave Without Your Free EBC Planning Guide"
EU Headline
"Before You Go — Download Your Free EBC Preparation Guide"
Body Text
"Everything you need to prepare for EBC — fitness plan, packing list, altitude tips, day-by-day. Free. Instant download."
Form
Email input field + CTA: "Send Me the Free Guide →"
Fine Print
"No spam. Unsubscribe anytime. We'll also send you 2026/2027 early-bird departure info."

SECTION SEO: SEO METADATA & TECHNICAL SPECIFICATIONS
 
Page Titles & Meta Descriptions
USA Page Title
Everest Base Camp Trek 2026/27 | 15 Days from $1,430 | Nepal Social Treks
USA Meta Desc.
Trek to Everest Base Camp with Nepal's #1 local trekking company. 15-day all-inclusive from USD $1,430. Expert Sherpa guides, small groups (max 12), free cancellation. Est. 2006. Book direct & save.
USA URL
nepalsocialtreks.com/everest-base-camp-trek-2026/
EU Page Title
Everest Base Camp Trek 2026 | 15 Days | $1,430 USD | Nepal Social Treks
EU URL
nepalsocialtreks.com/everest-base-camp-trek-europe/
 
Schema Markup Required (JSON-LD)
• TouristTrip schema — for the EBC trek product
• AggregateRating schema — for the 4.9/5 star ratings
• FAQPage schema — for the full FAQ section (Section 16)
• Organization schema — for Nepal Social Treks company
 
Mobile Optimisation Checklist
#1
Hero: 32-36px headline. Stack CTA buttons vertically. Show only 3 trust badges (scroll for rest).
#2
Sticky Header: Logo + CTA button only. Phone/WhatsApp in expanded menu.
#3
Comparison Table: Horizontal scroll. Nepal Social Treks column fixed/sticky on left.
#4
Itinerary: All accordion — all days collapsed except Day 1 and Day 10 (Base Camp) open.
#5
Video Testimonials: Single column, swipeable carousel.
#6
Guide Cards: Single column, full width.
#7
Departure Dates: Full-width cards, single column.
#8
Trip Cards: 2-column grid or horizontal scroll.
#9
FAQ: Accordion works perfectly on mobile. Min 44px tap target height.
#10
CTA Buttons: Min 48px height, full width on mobile for easy tapping.
#11
Images: Lazy load all below fold. WebP format for performance.
#12
Page Speed Target: Under 3 seconds on mobile. Compress all images (TinyPNG/Shortpixel).
 

— END OF DEVELOPMENT BRIEF —

Nepal Social Treks | Everest Base Camp Trek Landing Page
Contact: info@nepalsocialtreks.com | nepalsocialtreks.com | WhatsApp: +977-XXX-XXXX
Questions about this brief? Reference the design screenshot on Page 2 and the section content on the pages above.