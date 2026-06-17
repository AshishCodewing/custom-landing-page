(function () { var d = document.querySelectorAll(".testimonial__rotator-text"), b = document.querySelectorAll(".testimonial__dot"), c = 0; function a(e) { d.forEach(function (f, i) { f.style.display = i === e ? "flex" : "none" }); b.forEach(function (f, i) { f.classList.toggle("testimonial__dot--active", i === e) }) } b.forEach(function (e, i) { e.addEventListener("click", function () { c = i; a(c) }) }); setInterval(function () { c = (c + 1) % d.length; a(c) }, 5e3); a(0) })();
(function () { var t = document.querySelectorAll(".faq-tab"), g = document.querySelectorAll(".faq-group"); function s(i) { t.forEach(function (f, j) { f.className = "faq-tab" + (j === i ? " faq-tab--active" : " faq-tab--inactive"); g[j].className = "faq-group" + (j === i ? " faq-group--active" : " faq-group--inactive") }) } t.forEach(function (e, i) { e.addEventListener("click", function () { s(i) }) }); s(0) })();

(function () { var n = document.querySelectorAll(".stats__number"); if (!n.length) return; var a = !1, m = []; n.forEach(function (e) { var raw = e.getAttribute("data-target"); if (raw === null) return; var t = parseInt(raw, 10); if (isNaN(t)) return; m.push({ el: e, target: t, suffix: e.getAttribute("data-suffix") || "", prefix: e.getAttribute("data-prefix") || "", current: 0 }) }); if (!m.length) return; function u() { m.forEach(function (o) { var r = Math.ceil(o.target / 60); o.current + r >= o.target ? (o.current = o.target) : (o.current += r); o.el.textContent = o.prefix + o.current.toLocaleString("en-US") + o.suffix }) } var stats = document.getElementById("stats"); if (!stats) return; var i = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting && !a) { a = !0; var t = setInterval(function () { u(); var done = m.every(function (o) { return o.current >= o.target }); if (done) { clearInterval(t); a = !1 } }, 30) } }) }); i.observe(stats) })();
(function () { var s = document.getElementById("itinerary"), c = document.getElementById("altitudeChart"); if (!s || !c) return; var l = !1, i = new IntersectionObserver(function (e) { e.forEach(function (e) { if (e.isIntersecting && !l) { l = !0; var t = document.createElement("script"); t.src = "https://cdn.jsdelivr.net/npm/chart.js@4.4.7/dist/chart.umd.min.js"; t.onload = function () { new Chart(c, { type: "line", data: { labels: ["D1", "D2", "D3", "D4", "D5", "D6", "D7", "D8", "D9", "D10", "D11", "D12", "D13", "D14", "D15"], datasets: [{ data: [1350, 2610, 3440, 3440, 3860, 4410, 4410, 4910, 5364, 5643, 3860, 3440, 2840, 1350, 1350], borderColor: "#145b8f", backgroundColor: function (t) { var c = t.chart, x = c.ctx, a = c.chartArea; if (!a) return null; var g = x.createLinearGradient(0, a.top, 0, a.bottom); g.addColorStop(0, "rgba(20,91,143,0.25)"); g.addColorStop(1, "rgba(20,91,143,0.01)"); return g }, fill: true, tension: 0.3, pointBorderColor: "#fff", pointBorderWidth: 2, pointRadius: function (t) { var i = t.dataIndex; return i === 8 || i === 9 ? 7 : i === 3 || i === 6 ? 6 : 4 }, pointBackgroundColor: function (t) { var i = t.dataIndex; return i === 8 ? "#10b981" : i === 9 ? "#ef4444" : i === 3 || i === 6 ? "#f59e0b" : "#145b8f" } }] }, options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false }, tooltip: { callbacks: { label: function (t) { var i = t.dataIndex, l = t.raw + "m"; return i === 8 ? l + " - Everest Base Camp" : i === 9 ? l + " - Kala Patthar" : i === 3 || i === 6 ? l + " - Rest Day" : l } } } }, scales: { y: { title: { display: true, text: "Elevation (m)", color: "#64748b", font: { size: 11 } }, min: 0, max: 5800, ticks: { color: "#94a3b8", font: { size: 10 } }, grid: { color: "rgba(0,0,0,0.04)" } }, x: { ticks: { color: "#94a3b8", font: { size: 10 } }, grid: { display: false } } } } }) }; document.head.appendChild(t) } }) }); i.observe(s) })();

// Card "Read more": clamp the preview (long first paragraph), move the rest into a
// .card-more region revealed/hidden via CSS @starting-style (display:none -> visible).
(function () {
  function setup() {
    var texts = document.querySelectorAll(".safety-card__text, .usp-card__text");
    Array.prototype.forEach.call(texts, function (el) {
      if (el.dataset.readmoreReady) return;
      var paras = el.querySelectorAll(":scope > p");
      if (paras.length < 2) return; // nothing to collapse
      el.dataset.readmoreReady = "1";

      var first = paras[0];
      var more = document.createElement("div");
      more.className = "card-more";
      for (var i = 1; i < paras.length; i++) more.appendChild(paras[i]);
      el.appendChild(more);

      // Clamp the preview paragraph only if it is taller than the clamp height.
      first.classList.add("card-text--clamp");
      if (first.scrollHeight - first.clientHeight <= 4) first.classList.remove("card-text--clamp");

      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "card-readmore";
      btn.setAttribute("aria-expanded", "false");
      btn.innerHTML = '<span class="card-readmore__label">Read more</span>' +
        '<svg class="icon card-readmore__chev" aria-hidden="true"><use href="#i-chevron-down"></use></svg>';
      el.insertAdjacentElement("afterend", btn);

      btn.addEventListener("click", function () {
        var open = more.classList.toggle("is-open");
        first.classList.toggle("is-expanded", open);
        btn.classList.toggle("is-open", open);
        btn.setAttribute("aria-expanded", open ? "true" : "false");
        btn.querySelector(".card-readmore__label").textContent = open ? "Read less" : "Read more";
      });
    });
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", setup);
  } else {
    setup();
  }
  window.addEventListener("load", setup);
})();

// Reviews widget: hide any image inside .reviews-container that fails to load.
// The container is injected dynamically, so we watch for new images and also
// re-check images already in the DOM (which may have errored before this ran).
(function () {
  function hideIfBroken(img) {
    // complete + naturalWidth 0 means the image finished loading but failed.
    if (img.complete && img.naturalWidth === 0) img.style.display = "none";
  }
  function bind(img) {
    if (img.dataset.brokenWatch) return;
    img.dataset.brokenWatch = "1";
    img.addEventListener("error", function () { img.style.display = "none"; });
    hideIfBroken(img);
  }
  function scan() {
    var containers = document.querySelectorAll(".reviews-container");
    Array.prototype.forEach.call(containers, function (c) {
      Array.prototype.forEach.call(c.querySelectorAll("img"), bind);
    });
  }
  scan();
  // Catch images added after load (the widget injects them asynchronously).
  var mo = new MutationObserver(scan);
  mo.observe(document.documentElement, { childList: true, subtree: true });
  window.addEventListener("load", scan);
})();

// YouTube video testimonials: lite facade — show the thumbnail placeholder, then
// load the real embed (autoplay) only when the visitor clicks. Keeps the page fast.
(function () {
  function init() {
    var facades = document.querySelectorAll(".yt-facade");
    Array.prototype.forEach.call(facades, function (btn) {
      if (btn.dataset.ytReady) return;
      btn.dataset.ytReady = "1";
      var id = btn.getAttribute("data-yt-id");

      // Real video thumbnail; falls back to the SVG poster if missing.
      // YouTube serves a 120px-wide grey default for invalid/empty IDs — treat that as "no thumbnail".
      if (id) {
        var img = document.createElement("img");
        img.className = "testimonial-card__thumb";
        img.loading = "lazy";
        img.alt = "";
        img.addEventListener("error", function () { img.remove(); });
        img.addEventListener("load", function () { if (img.naturalWidth <= 120) img.remove(); });
        img.src = "https://i.ytimg.com/vi/" + encodeURIComponent(id) + "/hqdefault.jpg";
        btn.appendChild(img);
      }

      btn.addEventListener("click", function () {
        if (!id) return;
        var iframe = document.createElement("iframe");
        iframe.className = "testimonial-card__iframe";
        iframe.src = "https://www.youtube.com/embed/" + encodeURIComponent(id) + "?autoplay=1&rel=0";
        iframe.title = btn.getAttribute("aria-label") || "Video testimonial";
        iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
        // Send a referrer so YouTube can verify the embed. The host page sets
        // Referrer-Policy: same-origin, which would strip the Referer on the
        // cross-origin embed request and trigger YouTube Error 153. This
        // per-iframe policy overrides that and is required for playback.
        iframe.referrerPolicy = "strict-origin-when-cross-origin";
        iframe.setAttribute("allowfullscreen", "");
        var wrap = document.createElement("div");
        wrap.className = "testimonial-card__media";
        wrap.appendChild(iframe);
        btn.replaceWith(wrap);
      });
    });
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

// Departure dates: data-driven tabbed cards rendered into #departures-app.
// Only `dates` changes per card; every other field is shared across the
// whole season. To add a departure, add a date string. To add a season,
// append an object. `variant` is either "available" (green, "Inquire") or
// "earlybird" (indigo, "Register Interest").
(function () {
  var DEPARTURES = [
    {
      id: "autumn-2026",
      tab: "Autumn 2026",
      title: "Autumn 2026 Departures",
      desc: "August through December — clear skies, crisp mountain air, exceptional visibility to the summits",
      variant: "available",
      status: "AVAILABLE — AUTUMN 2026",
      price: "USD $1,530 per person — all inclusive",
      spots: "Guaranteed Departure",
      confirmed: "Guide Assigned · Route Confirmed · Teahouses Reserved",
      btnText: "Book This Trip",
      btnHref: "#inquiry",
      ctaSub: "Responds within 2 hours · $200 deposit to confirm",
      dates: [
        "01 Aug – 15 Aug 2026", "03 Aug – 17 Aug 2026", "05 Aug – 19 Aug 2026", "08 Aug – 22 Aug 2026",
        "10 Aug – 24 Aug 2026", "12 Aug – 26 Aug 2026", "15 Aug – 29 Aug 2026", "17 Aug – 31 Aug 2026",
        "19 Aug – 02 Sep 2026", "22 Aug – 05 Sep 2026", "24 Aug – 07 Sep 2026", "26 Aug – 09 Sep 2026",
        "29 Aug – 12 Sep 2026", "31 Aug – 14 Sep 2026", "02 Sep – 16 Sep 2026", "05 Sep – 19 Sep 2026",
        "07 Sep – 21 Sep 2026", "09 Sep – 23 Sep 2026", "12 Sep – 26 Sep 2026", "14 Sep – 28 Sep 2026",
        "16 Sep – 30 Sep 2026", "19 Sep – 03 Oct 2026", "21 Sep – 05 Oct 2026", "23 Sep – 07 Oct 2026",
        "26 Sep – 10 Oct 2026", "28 Sep – 12 Oct 2026", "30 Sep – 14 Oct 2026", "03 Oct – 17 Oct 2026",
        "05 Oct – 19 Oct 2026", "07 Oct – 21 Oct 2026", "10 Oct – 24 Oct 2026", "12 Oct – 26 Oct 2026",
        "14 Oct – 28 Oct 2026", "17 Oct – 31 Oct 2026", "19 Oct – 02 Nov 2026", "21 Oct – 04 Nov 2026",
        "24 Oct – 07 Nov 2026", "26 Oct – 09 Nov 2026", "28 Oct – 11 Nov 2026", "31 Oct – 14 Nov 2026",
        "02 Nov – 16 Nov 2026", "04 Nov – 18 Nov 2026", "07 Nov – 21 Nov 2026", "09 Nov – 23 Nov 2026",
        "11 Nov – 25 Nov 2026", "14 Nov – 28 Nov 2026", "16 Nov – 30 Nov 2026", "18 Nov – 02 Dec 2026",
        "21 Nov – 05 Dec 2026", "23 Nov – 07 Dec 2026", "25 Nov – 09 Dec 2026", "28 Nov – 12 Dec 2026",
        "30 Nov – 14 Dec 2026", "02 Dec – 16 Dec 2026", "05 Dec – 19 Dec 2026", "07 Dec – 21 Dec 2026",
        "09 Dec – 23 Dec 2026", "12 Dec – 26 Dec 2026", "14 Dec – 28 Dec 2026", "16 Dec – 30 Dec 2026",
        "19 Dec – 02 Jan 2027", "21 Dec – 04 Jan 2027", "23 Dec – 06 Jan 2027", "26 Dec – 09 Jan 2027",
        "28 Dec – 11 Jan 2027", "30 Dec – 13 Jan 2027"
      ]
    },
    {
      id: "winter-2027",
      tab: "Winter 2027",
      title: "Winter 2027 Departures",
      desc: "January through February — quiet trails, fewer crowds, stunning crisp visibility",
      variant: "available",
      status: "AVAILABLE — WINTER 2027",
      price: "USD $1,530 per person — all inclusive",
      spots: "Guaranteed Departure",
      confirmed: "Guide Assigned · Route Confirmed · Teahouses Reserved",
      btnText: "Book This Trip",
      btnHref: "#inquiry",
      ctaSub: "Responds within 2 hours · $200 deposit to confirm",
      dates: [
        "01 Jan – 15 Jan 2027", "05 Jan – 19 Jan 2027", "08 Jan – 22 Jan 2027", "12 Jan – 26 Jan 2027",
        "15 Jan – 29 Jan 2027", "19 Jan – 02 Feb 2027", "22 Jan – 05 Feb 2027", "26 Jan – 09 Feb 2027",
        "29 Jan – 12 Feb 2027", "02 Feb – 16 Feb 2027", "05 Feb – 19 Feb 2027", "09 Feb – 23 Feb 2027",
        "12 Feb – 26 Feb 2027", "16 Feb – 02 Mar 2027", "19 Feb – 05 Mar 2027", "23 Feb – 09 Mar 2027",
        "26 Feb – 12 Mar 2027"
      ]
    },
    {
      id: "spring-2027",
      tab: "Spring 2027",
      title: "Spring 2027 Departures",
      desc: "March through May — clear skies, moderate temperatures, blooming rhododendron forests",
      variant: "available",
      status: "AVAILABLE — SPRING 2027",
      price: "USD $1,530 per person — all inclusive",
      spots: "Guaranteed Departure",
      confirmed: "Guide Assigned · Route Confirmed · Teahouses Reserved",
      btnText: "Book This Trip",
      btnHref: "#inquiry",
      ctaSub: "Responds within 2 hours · $200 deposit to confirm",
      dates: [
        "01 Mar – 15 Mar 2027", "03 Mar – 17 Mar 2027", "06 Mar – 20 Mar 2027", "08 Mar – 22 Mar 2027",
        "10 Mar – 24 Mar 2027", "13 Mar – 27 Mar 2027", "15 Mar – 29 Mar 2027", "17 Mar – 31 Mar 2027",
        "20 Mar – 03 Apr 2027", "22 Mar – 05 Apr 2027", "24 Mar – 07 Apr 2027", "27 Mar – 10 Apr 2027",
        "29 Mar – 12 Apr 2027", "31 Mar – 14 Apr 2027", "03 Apr – 17 Apr 2027", "05 Apr – 19 Apr 2027",
        "07 Apr – 21 Apr 2027", "10 Apr – 24 Apr 2027", "12 Apr – 26 Apr 2027", "14 Apr – 28 Apr 2027",
        "17 Apr – 01 May 2027", "19 Apr – 03 May 2027", "21 Apr – 05 May 2027", "24 Apr – 08 May 2027",
        "26 Apr – 10 May 2027", "28 Apr – 12 May 2027", "01 May – 15 May 2027", "03 May – 17 May 2027",
        "05 May – 19 May 2027", "08 May – 22 May 2027", "10 May – 24 May 2027", "12 May – 26 May 2027",
        "15 May – 29 May 2027", "17 May – 31 May 2027", "19 May – 02 Jun 2027", "22 May – 05 Jun 2027",
        "24 May – 07 Jun 2027", "26 May – 09 Jun 2027", "29 May – 12 Jun 2027", "31 May – 14 Jun 2027"
      ]
    },
    {
      id: "autumn-2027-aug",
      tab: "Autumn 2027",
      title: "Autumn 2027 Departures — Early Bird Registration",
      desc: "August through December 2027 — register your interest now for priority access and Early Bird pricing",
      variant: "earlybird",
      status: "EARLY BIRD — AUTUMN 2027",
      price: "USD $1,530 per person — all inclusive",
      spots: "Priority access for early registrations",
      confirmed: "No commitment required · Just your preferred date",
      btnText: "Register Interest",
      btnHref: "#inquiry",
      ctaSub: "Early birds get first pick · No commitment required",
      dates: [
        "02 Aug – 16 Aug 2027", "04 Aug – 18 Aug 2027", "07 Aug – 21 Aug 2027", "09 Aug – 23 Aug 2027",
        "11 Aug – 25 Aug 2027", "14 Aug – 28 Aug 2027", "16 Aug – 30 Aug 2027", "18 Aug – 01 Sep 2027",
        "21 Aug – 04 Sep 2027", "23 Aug – 06 Sep 2027", "25 Aug – 08 Sep 2027", "28 Aug – 11 Sep 2027",
        "30 Aug – 13 Sep 2027", "01 Sep – 15 Sep 2027", "04 Sep – 18 Sep 2027", "06 Sep – 20 Sep 2027",
        "08 Sep – 22 Sep 2027", "11 Sep – 25 Sep 2027", "13 Sep – 27 Sep 2027", "15 Sep – 29 Sep 2027",
        "18 Sep – 02 Oct 2027", "20 Sep – 04 Oct 2027", "22 Sep – 06 Oct 2027", "25 Sep – 09 Oct 2027",
        "27 Sep – 11 Oct 2027", "29 Sep – 13 Oct 2027"
      ]
    },
    {
      id: "october-2027",
      tab: "October 2027",
      title: "October 2027 — Early Bird Registration",
      desc: "Peak autumn season — register your interest now for priority access",
      variant: "earlybird",
      status: "EARLY BIRD — AUTUMN 2027",
      price: "USD $1,530 per person — all inclusive",
      spots: "Priority access for early registrations",
      confirmed: "No commitment required · Just your preferred date",
      btnText: "Register Interest",
      btnHref: "#inquiry",
      ctaSub: "Early birds get first pick · No commitment required",
      dates: [
        "02 Oct – 16 Oct 2027", "04 Oct – 18 Oct 2027", "06 Oct – 20 Oct 2027", "09 Oct – 23 Oct 2027",
        "11 Oct – 25 Oct 2027", "13 Oct – 27 Oct 2027", "16 Oct – 30 Oct 2027", "18 Oct – 01 Nov 2027",
        "20 Oct – 03 Nov 2027", "23 Oct – 06 Nov 2027", "25 Oct – 08 Nov 2027", "27 Oct – 10 Nov 2027",
        "30 Oct – 13 Nov 2027"
      ]
    },
    {
      id: "november-2027",
      tab: "November 2027",
      title: "November 2027 — Early Bird Registration",
      desc: "Late autumn season — register your interest now for priority access",
      variant: "earlybird",
      status: "EARLY BIRD — AUTUMN 2027",
      price: "USD $1,530 per person — all inclusive",
      spots: "Priority access for early registrations",
      confirmed: "No commitment required · Just your preferred date",
      btnText: "Register Interest",
      btnHref: "#inquiry",
      ctaSub: "Early birds get first pick · No commitment required",
      dates: [
        "01 Nov – 15 Nov 2027", "03 Nov – 17 Nov 2027", "06 Nov – 20 Nov 2027", "08 Nov – 22 Nov 2027",
        "10 Nov – 24 Nov 2027", "13 Nov – 27 Nov 2027", "15 Nov – 29 Nov 2027", "17 Nov – 01 Dec 2027",
        "20 Nov – 04 Dec 2027", "22 Nov – 06 Dec 2027", "24 Nov – 08 Dec 2027", "27 Nov – 11 Dec 2027",
        "29 Nov – 13 Dec 2027"
      ]
    },
    {
      id: "december-2027",
      tab: "December 2027",
      title: "December 2027 — Early Bird Registration",
      desc: "Winter season departures — register your interest now for priority access",
      variant: "earlybird",
      status: "EARLY BIRD — AUTUMN 2027",
      price: "USD $1,530 per person — all inclusive",
      spots: "Priority access for early registrations",
      confirmed: "No commitment required · Just your preferred date",
      btnText: "Register Interest",
      btnHref: "#inquiry",
      ctaSub: "Early birds get first pick · No commitment required",
      dates: [
        "01 Dec – 15 Dec 2027", "04 Dec – 18 Dec 2027", "06 Dec – 20 Dec 2027", "08 Dec – 22 Dec 2027",
        "11 Dec – 25 Dec 2027", "13 Dec – 27 Dec 2027", "15 Dec – 29 Dec 2027", "18 Dec – 01 Jan 2028",
        "20 Dec – 03 Jan 2028", "22 Dec – 05 Jan 2028", "25 Dec – 08 Jan 2028", "27 Dec – 10 Jan 2028",
        "29 Dec – 12 Jan 2028"
      ]
    }
  ];

  var app = document.getElementById("departures-app");
  if (!app) return;
  var tablist = app.querySelector(".departures__tabs");
  var panels = app.querySelector(".departures__panels");

  function esc(s) { var d = document.createElement("div"); d.textContent = s; return d.innerHTML; }
  function svg(id) { return '<svg class="icon" aria-hidden="true"><use href="#' + id + '" /></svg>'; }

  function cardHTML(season, date) {
    var sidebar = season.variant === "earlybird"
      ? '<div class="departure-card__sidebar" style="background-color:#6366f1;"></div>'
      : '<div class="departure-card__sidebar bg-success"></div>';
    var statusIcon = season.variant === "earlybird" ? "i-bell" : "i-check-circle";
    var status = season.variant === "earlybird"
      ? '<span class="departure-card__status" style="background-color:rgba(99,102,241,0.08);color:#6366f1;">' + svg(statusIcon) + esc(season.status) + '</span>'
      : '<span class="departure-card__status bg-success-10 c-success">' + svg(statusIcon) + esc(season.status) + '</span>';
    return '<div class="departure-card card-hover">' + sidebar +
      '<div class="departure-card__body">' + status +
      '<div class="departure-card__row"><div>' +
      '<p class="departure-card__date"><span class="departure-card__icon">' + svg("i-calendar") + '</span>' + esc(date) + '</p>' +
      '<p class="departure-card__price"><span class="departure-card__icon">' + svg("i-dollar") + '</span>' + esc(season.price) + '</p>' +
      '<p class="departure-card__spots"><span class="departure-card__icon">' + svg("i-users") + '</span>' + esc(season.spots) + '</p>' +
      '<p class="departure-card__confirmed"><span class="departure-card__icon">' + svg("i-check") + '</span>' + esc(season.confirmed) + '</p>' +
      '</div><div class="departure-card__cta-wrap">' +
      // Available departures open the WeTravel booking popup (data-book-trip);
      // early-bird cards keep their original inquiry link.
      (season.variant === "available"
        ? '<a href="#book" class="btn btn-primary btn--sm" data-book-trip>' + esc(season.btnText) + '</a>'
        : '<a href="' + esc(season.btnHref) + '" class="btn btn-primary btn--sm">' + esc(season.btnText) + '</a>') +
      '<p class="departure-card__cta-sub">' + esc(season.ctaSub) + '</p>' +
      '</div></div></div></div>';
  }

  DEPARTURES.forEach(function (season, i) {
    var tab = document.createElement("button");
    tab.className = "departures__tab" + (i === 0 ? " departures__tab--active" : "");
    tab.id = "tab-" + season.id;
    tab.type = "button";
    tab.setAttribute("role", "tab");
    tab.setAttribute("aria-selected", i === 0 ? "true" : "false");
    tab.setAttribute("aria-controls", "panel-" + season.id);
    tab.textContent = season.tab;
    tablist.appendChild(tab);

    var panel = document.createElement("div");
    panel.className = "departures__panel" + (i === 0 ? " departures__panel--active" : "");
    panel.id = "panel-" + season.id;
    panel.setAttribute("role", "tabpanel");
    panel.setAttribute("aria-labelledby", "tab-" + season.id);
    panel.innerHTML =
      '<div class="departures__season-header u-mt-6"><h3 class="departures__season-title">' + esc(season.title) +
      '</h3><p class="departures__season-desc">' + esc(season.desc) + '</p></div>' +
      '<div class="grid--halves">' + season.dates.map(function (d) { return cardHTML(season, d); }).join("") + '</div>';
    panels.appendChild(panel);
  });

  tablist.addEventListener("click", function (e) {
    var btn = e.target.closest(".departures__tab");
    if (!btn) return;
    var id = btn.id.replace("tab-", "");
    tablist.querySelectorAll(".departures__tab").forEach(function (t) {
      var on = t === btn;
      t.classList.toggle("departures__tab--active", on);
      t.setAttribute("aria-selected", on ? "true" : "false");
    });
    panels.querySelectorAll(".departures__panel").forEach(function (p) {
      p.classList.toggle("departures__panel--active", p.id === "panel-" + id);
    });
  });
})();

// Booking popup: "Book This Trip" (available departures) opens the WeTravel
// calendar in a native <dialog>. The widget script is injected on first open
// (lazy, like the Chart.js / YouTube facades above) and reused thereafter.
(function () {
  var dialog = document.getElementById("booking-dialog");
  if (!dialog || typeof dialog.showModal !== "function") return;
  var host = document.getElementById("wetravel-host");
  var loaded = false;

  function loadWidget() {
    if (loaded || !host) return;
    loaded = true;
    var s = document.createElement("script");
    s.src = "https://cdn.wetravel.com/widgets/embed_calendar.js";
    s.id = "wetravel_embed_calendar"; // fallback target the widget looks up
    var data = {
      env: "https://www.wetravel.com", version: "v0.3", uid: "166592",
      uuid: "5213397405", color: "436cda", text: "Book Now",
      title: "Select Departure Date", position: "center"
    };
    Object.keys(data).forEach(function (k) { s.setAttribute("data-" + k, data[k]); });
    host.appendChild(s);
  }

  // Cards are rendered after this runs, so delegate from the document.
  document.addEventListener("click", function (e) {
    var trigger = e.target.closest("[data-book-trip]");
    if (!trigger) return;
    e.preventDefault();
    loadWidget();
    if (!dialog.open) dialog.showModal();
  });

  // Close via the × button or a click on the backdrop (target is the dialog itself).
  // Esc-to-close is native to <dialog>.
  dialog.addEventListener("click", function (e) {
    if (e.target.closest("[data-booking-close]") || e.target === dialog) dialog.close();
  });

  // When a date is picked, WeTravel opens its own full-screen checkout overlay
  // (it posts a "WTRVL_checkout…" message). Our modal sits in the browser's top
  // layer — above any z-index — so we must close it or it traps the checkout
  // behind it. WeTravel's overlay is appended to <body> and remains on top.
  window.addEventListener("message", function (e) {
    if (typeof e.data === "string" && e.data.indexOf("WTRVL_checkout") !== -1 && dialog.open) {
      // WeTravel's checkout overlay takes a moment to render; wait so it's
      // visible behind us before we close, avoiding a blank flash.
      setTimeout(function () { if (dialog.open) dialog.close(); }, 600);
    }
  });
})();