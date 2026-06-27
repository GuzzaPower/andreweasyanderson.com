/* =========================================================
   andreweasyandereson.com — main.js
   - Auto-update copyright year
   - Optional mobile nav toggle (no-op if controls absent)
   - Subtle scroll reveal (respects prefers-reduced-motion)
   - Cookie consent banner (vanilla, localStorage)
   - Contact form (Web3Forms, fetch, no reload)
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

  /* ---- Cookie consent banner (vanilla, no libraries; ships ~1.2kb gzipped) ---- */
  (function () {
    var KEY = "iq_cookie_consent";
    try { if (localStorage.getItem(KEY)) return; } catch (e) { return; }

    var policy = (/\/blog\//.test(location.pathname) ? "../" : "") + "cookie-policy.html";
    var banner = document.createElement("div");
    banner.className = "cookie-banner";
    banner.setAttribute("role", "region");
    banner.setAttribute("aria-label", "Cookie consent");
    banner.setAttribute("tabindex", "-1");
    banner.innerHTML =
      '<div class="cookie-banner-inner">' +
        '<p class="cookie-banner-text">We use cookies to run this site and improve your experience. ' +
        'Read our <a href="' + policy + '">Cookie Policy</a>.</p>' +
        '<div class="cookie-banner-actions">' +
          '<button type="button" class="cookie-btn cookie-accept">Accept</button>' +
          '<button type="button" class="cookie-btn cookie-decline">Decline</button>' +
        '</div>' +
      '</div>';

    function choose(value) {
      try { localStorage.setItem(KEY, value); } catch (e) {}
      if (banner.parentNode) { banner.parentNode.removeChild(banner); }
      var back = document.querySelector(".brand") || document.body;
      if (back && back.focus) { back.focus(); }
    }
    banner.querySelector(".cookie-accept").addEventListener("click", function () { choose("accepted"); });
    banner.querySelector(".cookie-decline").addEventListener("click", function () { choose("declined"); });

    document.body.appendChild(banner);
    banner.focus();
  })();

  /* ---- Contact form (Web3Forms, no page reload) ---- */
  var cform = document.querySelector("form.contact-form");
  if (cform) {
    var status = cform.querySelector(".form-status");
    var setStatus = function (msg, state) {
      if (!status) { return; }
      status.textContent = msg;
      status.setAttribute("data-state", state);
    };
    cform.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var btn = cform.querySelector('[type="submit"]');
      var payload = JSON.stringify(Object.fromEntries(new FormData(cform).entries()));
      setStatus("Sending your message…", "sending");
      if (btn) { btn.disabled = true; }
      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: payload
      })
        .then(function (r) { return r.json(); })
        .then(function (data) {
          if (data.success) {
            cform.reset();
            setStatus("Thank you — your message is on its way. I read every one and will reply personally.", "success");
          } else {
            setStatus("Something went wrong sending your message. Please email hello@andreweasyandereson.com instead.", "error");
          }
        })
        .catch(function () {
          setStatus("Network error — please try again, or email hello@andreweasyandereson.com directly.", "error");
        })
        .finally(function () { if (btn) { btn.disabled = false; } });
    });
  }
})();
