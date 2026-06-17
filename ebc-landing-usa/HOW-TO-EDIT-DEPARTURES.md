# How to Edit the Departure Dates Section (No Coding Needed)

The departure date cards you see on the landing pages (the tabs like
**Autumn 2026 / Winter 2027 / Spring 2027…** with all the date cards) are
**not written in the HTML pages**. They all come from one single file:

```
ebc-landing-usa/assets/js/main.js
```

Edit that one file and **both pages update automatically**
(`index.html` and `2026/2027.html`), because they share it.

---

## 1. Find the right place in the file

Open `main.js` in any text editor and scroll down (or press Ctrl+F / Cmd+F and
search) for the word:

```
DEPARTURES
```

You will see a list of blocks that each look like this. **One block = one tab**
on the website:

```
{
  id: "autumn-2026",
  tab: "Autumn 2026",
  title: "Autumn 2026 Departures",
  desc: "August through December — clear skies, crisp mountain air...",
  variant: "available",
  status: "AVAILABLE — AUTUMN 2026",
  price: "USD $1,430 per person — all inclusive",
  spots: "Guaranteed Departure",
  confirmed: "Guide Assigned · Route Confirmed · Teahouses Reserved",
  btnText: "Inquire About This Date",
  btnHref: "#inquiry",
  ctaSub: "Responds within 2 hours · $200 deposit to confirm",
  dates: [
    "01 Aug – 15 Aug 2026", "03 Aug – 17 Aug 2026",
    ...more dates...
  ]
},
```

---

## 2. What each line controls

| Line in the file | What it is on the website |
|---|---|
| `tab` | The text on the **tab button** at the top (e.g. "Autumn 2026") |
| `title` | The big heading shown when that tab is open |
| `desc` | The smaller sentence under that heading |
| `status` | The colored badge on every card (e.g. "AVAILABLE — AUTUMN 2026") |
| `price` | The price line on every card |
| `spots` | The line under the price (e.g. "Guaranteed Departure") |
| `confirmed` | The small confirmation line (e.g. "Guide Assigned · ...") |
| `btnText` | **The text on the button** (e.g. "Inquire About This Date") |
| `btnHref` | **Where the button takes you when clicked** (the link/URL) |
| `ctaSub` | The tiny line under the button |
| `dates` | The list of departure dates — one date = one card |
| `id` | Internal name — **do not change this** |
| `variant` | Card color/style — `"available"` (green) or `"earlybird"` (purple). Leave as is unless you want to switch styles. |

> Note: `price`, `status`, `btnHref`, etc. apply to **every card in that tab**.
> You set them once per season, not once per date.

---

## 3. The golden rule when editing

Only change the text **between the quotation marks `" "`**.
Never delete the quotes, the colons `:`, or the commas `,` around them.

✅ Correct:

```
btnText: "Book This Date",
```

❌ Wrong (quotes and comma removed — this breaks the whole section):

```
btnText: Book This Date
```

If the departure section suddenly disappears from the website after your edit,
it almost always means a quote or comma was accidentally deleted. Undo your
change and try again.

---

## 4. How to change the button link (URL)

Find the line `btnHref` in the season you want to change.

**Right now** every button points to `"#inquiry"`, which scrolls down to the
inquiry form on the same page.

To send people to a **booking page or any other website** instead, replace it
with the full web address, starting with `https://`:

```
btnHref: "https://www.wetravel.com/trips/your-trip-link-here",
```

Other examples:

| Goal | What to put |
|---|---|
| Scroll to the inquiry form (current behavior) | `btnHref: "#inquiry",` |
| Open a booking page | `btnHref: "https://www.wetravel.com/trips/abc123",` |
| Open WhatsApp chat | `btnHref: "https://wa.me/9779812345678",` |
| Open an email window | `btnHref: "mailto:info@nepalsocialtreks.com",` |

Remember: this changes the button for **all the date cards in that one tab**.
If you want all 7 tabs to point somewhere new, change `btnHref` in all 7 blocks.

---

## 5. How to change the button text

Find `btnText` and change the words inside the quotes:

```
btnText: "Book Now",
```

---

## 6. How to change the price (or any other text)

Same idea — find the line, change only what's inside the quotes:

```
price: "USD $1,499 per person — all inclusive",
```

Do this in every season block where the price should change.

---

## 7. How to add or remove a departure date

Each date is one quoted item in the `dates` list, separated by commas.
One date = one card on the website.

**To add a date:** copy an existing one, paste it, and edit it. Keep the same
style (`DD Mon – DD Mon YYYY`) and make sure there is a comma between items:

```
dates: [
  "01 Aug – 15 Aug 2026", "03 Aug – 17 Aug 2026", "05 Aug – 19 Aug 2026"
]
```

**To remove a date:** delete the quoted date *and* one comma next to it.

⚠️ The last date in the list must **not** have a comma after it (just before
the closing `]`).

---

## 8. How to check your work

1. Save the file.
2. Open `ebc-landing-usa/index.html` in your web browser (double-click it).
3. Scroll to the **Departure Dates** section.
4. Click through the tabs and check your changes. Click a button to make sure
   the link goes to the right place.
5. Check `ebc-landing-usa/2026/2027.html` the same way — it uses the same data.

If the whole departures section is **empty or missing**, a quote, comma, or
bracket was broken in your edit — undo (Ctrl+Z / Cmd+Z), save, and try again
more carefully.
