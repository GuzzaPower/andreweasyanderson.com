/* =========================================================
   andreweasyandereson.com — main.js
   - Auto-update copyright year
   - Optional mobile nav toggle (no-op if controls absent)
   - Subtle scroll reveal (respects prefers-reduced-motion)
   ========================================================= */
(function () {
  "use strict";

  /* ---- Copyright year ---- */
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  /* ---- Mobile nav toggle (progressive enhancement) ---- */
  var toggle = document.querySelector(".nav-toggle");
  var header = document.querySelector(".site-header");
  if (toggle && header) {
    toggle.addEventListener("click", function () {
      var open = header.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
  }

  /* ---- Scroll reveal ---- */
  var prefersReduced = window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var revealTargets = document.querySelectorAll("[data-reveal]");
  if (revealTargets.length && !prefersReduced && "IntersectionObserver" in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -10% 0px", threshold: 0.1 });

    revealTargets.forEach(function (el) { observer.observe(el); });
  }
})();
