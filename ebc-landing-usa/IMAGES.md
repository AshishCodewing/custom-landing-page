# Image Inventory — `index.html`

**22 `<img>` tags** + **3 yt-facade posters** across 6 sections. All files are WebP from `https://media.tripcart.com/images/561/`.

Search for `<!-- img-Nx -->` in the HTML to jump to each image.

---

## `<!-- 12: TESTIMONIALS -->` — 3 yt-facade (YouTube video posters)

The `yt-facade` is a `<button>` element that lazy-loads a YouTube video on click. It uses an inline SVG poster (`#poster-ebc`) — no raster image file. The poster is the same for all three.

| ID | aria-label | YouTube video |
|----|------------|---------------|
| `<!-- img-12a -->` | Play Klaus M.'s video testimonial | `IkWTIxVIeJg` |
| `<!-- img-12b -->` | Play Sophie & Marieke's video testimonial | `EN1nKFrOASU` |
| `<!-- img-12c -->` | Play James T.'s video testimonial | `7CfcROrNoVQ` |

> **To swap a video:** change the `data-yt-id` attribute on the `<button class="yt-facade">`. Each ID is the YouTube video's alphanumeric slug (e.g. `dQw4w9WgXcQ`). The poster SVG stays the same; you can replace it with a real thumbnail if needed.

---

## `<!-- 13: GUIDES -->` — 4 `<img>`

| ID | Image | File |
|----|-------|------|
| `<!-- img-13a -->` | Pasang Sherpa avatar | `web_1771400588_871392_7445_85_162x156.webp` |
| `<!-- img-13b -->` | Santabir Thapa Magar avatar | `web_1771400588_871392_7445_85_162x156.webp` |
| `<!-- img-13c -->` | Lakpa Namgel Sherpa avatar | `web_1771400588_871392_7445_85_162x156.webp` |
| `<!-- img-13d -->` | Our Porter Team banner | `web_1771237026_5980_2442_85_990x490.webp` |

> ⚠️ All three guide avatars use the **same** source file — replace with distinct photos.

> **Note:** `2026/2027.html` has only 3 guide images (`img-13a`–`img-13c`, no porter banner).

---

## `<!-- 15: PHOTO GALLERY -->` — 12 `<img>`

| ID | alt | File |
|----|-----|------|
| `<!-- img-15a -->` | Everest Base Camp — Day 10 | `web_561_1770724077_789530_5730_1100x1467.webp` |
| `<!-- img-15b -->` | Kala Patthar Sunrise | `web_561_1772539769_522722_8233_1280x857.webp` |
| `<!-- img-15c -->` | Hillary Suspension Bridge | `web_561_1775809338_486378_5344_707x407.webp` |
| `<!-- img-15d -->` | Namche Bazaar from Above | `web_561_1773994564_589956_6868_1600x1200.webp` |
| `<!-- img-15e -->` | Guide & Trekker on Trail | `web_561_1769512431_546808_8298_1920x1281.webp` |
| `<!-- img-15f -->` | Teahouse Interior | `web_1771413035_849040_8217_85_600x810.webp` |
| `<!-- img-15g -->` | Spring 2024 Group at Base Camp | `web_1771486309_859498_8573_85_1000x600.webp` |
| `<!-- img-15h -->` | Tengboche Monastery | `web_1771486284_729216_7193_85_652x389.webp` |
| `<!-- img-15i -->` | The EBC Sign | `web_1771483946_723259_5227_85_1200x800.webp` |
| `<!-- img-15j -->` | Stars over the Khumbu Valley | `web_1771414723_811932_6435_85_749x432.webp` |
| `<!-- img-15k -->` | Rhododendron Forest — Spring | `web_1771412329_719017_9769_85_1200x900.webp` |
| `<!-- img-15l -->` | Himalayan Sunrise over Lhotse | `web_1771397459_181169_9295_85_990x490.webp` |

---

## `<!-- 18: MID-PAGE CTA -->` — 1 `<img>`

| ID | alt | File |
|----|-----|------|
| `<!-- img-18a -->` | Sunrise from Kala Patthar at 5,545m with Everest behind | `web_561_1769516363_283179_1271_1920x1440.webp` |

---

## `<!-- 19: RELATED TREKS -->` — 4 `<img>`

| ID | alt | File |
|----|-----|------|
| `<!-- img-19a -->` | Annapurna Base Camp Trek | `web_1771408470_443007_2639_85_1000x750.webp` |
| `<!-- img-19b -->` | Annapurna Circuit Trek | `web_1771408252_82355_7198_85_1000x665.webp` |
| `<!-- img-19c -->` | Langtang Valley Trek | `web_1771407304_7800_7421_85_962x1282.webp` |
| `<!-- img-19d -->` | Manaslu Circuit Trek | `web_1771403011_137211_6208_85_720x480.webp` |

---

## `<!-- 20: ABOUT -->` — 1 `<img>`

| ID | alt | File |
|----|-----|------|
| `<!-- img-20a -->` | Nepal Social Treks team in Thamel, Kathmandu | `web_1771402100_166141_1156_85_1200x1219.webp` |

---

## Hero background — set in CSS, not an `<img>` tag

The hero section (`<!-- 2: HERO -->`) uses a CSS `background-image` in the `<style>` block, **not** an `<img>` element.

File: `web_561_1770712355_690233_4546_1920x1440.webp`
