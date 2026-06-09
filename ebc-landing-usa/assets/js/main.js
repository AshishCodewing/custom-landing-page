
    (function () { var d = document.querySelectorAll(".testimonial__rotator-text"), b = document.querySelectorAll(".testimonial__dot"), c = 0; function a(e) { d.forEach(function (f, i) { f.style.display = i === e ? "flex" : "none" }); b.forEach(function (f, i) { f.classList.toggle("testimonial__dot--active", i === e) }) } b.forEach(function (e, i) { e.addEventListener("click", function () { c = i; a(c) }) }); setInterval(function () { c = (c + 1) % d.length; a(c) }, 5e3); a(0) })();
    (function () { var t = document.querySelectorAll(".faq-tab"), g = document.querySelectorAll(".faq-group"); function s(i) { t.forEach(function (f, j) { f.className = "faq-tab" + (j === i ? " faq-tab--active" : " faq-tab--inactive"); g[j].className = "faq-group" + (j === i ? " faq-group--active" : " faq-group--inactive") }) } t.forEach(function (e, i) { e.addEventListener("click", function () { s(i) }) }); s(0) })();

    (function () { var n = document.querySelectorAll(".stats__number"); if (!n.length) return; var a = !1, m = []; n.forEach(function (e) { var raw = e.getAttribute("data-target"); if (raw === null) return; var t = parseInt(raw, 10); if (isNaN(t)) return; m.push({ el: e, target: t, suffix: e.getAttribute("data-suffix") || "", prefix: e.getAttribute("data-prefix") || "", current: 0 }) }); if (!m.length) return; function u() { m.forEach(function (o) { var r = Math.ceil(o.target / 60); o.current + r >= o.target ? (o.current = o.target) : (o.current += r); o.el.textContent = o.prefix + o.current.toLocaleString("en-US") + o.suffix }) } var stats = document.getElementById("stats"); if (!stats) return; var i = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting && !a) { a = !0; var t = setInterval(function () { u(); var done = m.every(function (o) { return o.current >= o.target }); if (done) { clearInterval(t); a = !1 } }, 30) } }) }); i.observe(stats) })();
    (function () { var s = document.getElementById("itinerary"), c = document.getElementById("altitudeChart"); if (!s || !c) return; var l = !1, i = new IntersectionObserver(function (e) { e.forEach(function (e) { if (e.isIntersecting && !l) { l = !0; var t = document.createElement("script"); t.src = "https://cdn.jsdelivr.net/npm/chart.js@4.4.7/dist/chart.umd.min.js"; t.onload = function () { new Chart(c, { type: "line", data: { labels: ["D1", "D2", "D3", "D4", "D5", "D6", "D7", "D8", "D9", "D10", "D11", "D12", "D13", "D14", "D15"], datasets: [{ data: [1400, 1400, 2610, 3440, 3440, 3860, 4410, 4410, 4930, 5364, 4200, 3440, 2840, 1400, 1400], borderColor: "#145b8f", backgroundColor: function (t) { var c = t.chart, x = c.ctx, a = c.chartArea; if (!a) return null; var g = x.createLinearGradient(0, a.top, 0, a.bottom); g.addColorStop(0, "rgba(20,91,143,0.25)"); g.addColorStop(1, "rgba(20,91,143,0.01)"); return g }, fill: true, tension: 0.3, pointBorderColor: "#fff", pointBorderWidth: 2, pointRadius: function (t) { var i = t.dataIndex; return i === 9 || i === 10 ? 7 : i === 4 || i === 7 ? 6 : 4 }, pointBackgroundColor: function (t) { var i = t.dataIndex; return i === 9 ? "#10b981" : i === 10 ? "#ef4444" : i === 4 || i === 7 ? "#f59e0b" : "#145b8f" } }] }, options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false }, tooltip: { callbacks: { label: function (t) { var i = t.dataIndex, l = t.raw + "m"; return i === 9 ? l + " - Everest Base Camp" : i === 10 ? l + " - Kala Patthar" : i === 4 || i === 7 ? l + " - Rest Day" : l } } } }, scales: { y: { title: { display: true, text: "Elevation (m)", color: "#64748b", font: { size: 11 } }, min: 0, max: 5800, ticks: { color: "#94a3b8", font: { size: 10 } }, grid: { color: "rgba(0,0,0,0.04)" } }, x: { ticks: { color: "#94a3b8", font: { size: 10 } }, grid: { display: false } } } } }) }; document.head.appendChild(t) } }) }); i.observe(s) })();

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
