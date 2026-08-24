/* ==========================================================================
   Shared behaviour: mobile nav, active link, countdown, form submission.
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {

  /* ---- Mobile nav toggle (sticky nav with explicit close button + scrim) ---- */
  const menuBtn = document.querySelector("[data-menu-toggle]");
  const nav = document.querySelector(".main-nav");
  const closeBtn = document.querySelector("[data-nav-close]");
  const scrim = document.querySelector("[data-nav-scrim]");

  function openNav(){
    nav.classList.add("open");
    if (scrim) scrim.classList.add("show");
  }
  function closeNav(){
    nav.classList.remove("open");
    if (scrim) scrim.classList.remove("show");
  }

  if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => {
      nav.classList.contains("open") ? closeNav() : openNav();
    });
    if (closeBtn) closeBtn.addEventListener("click", closeNav);
    if (scrim) scrim.addEventListener("click", closeNav);
    nav.querySelectorAll("a").forEach(a =>
      a.addEventListener("click", closeNav)
    );
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeNav();
    });
  }

  /* ---- Highlight active nav link ---- */
  const current = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".main-nav a").forEach(a => {
    const href = a.getAttribute("href");
    if (href === current) a.classList.add("active");
  });

  /* ---- Generic Formspree-style AJAX form submission ---- */
  document.querySelectorAll("form[data-ajax-form]").forEach(form => {
    const successBox = document.querySelector(form.getAttribute("data-success-target"));
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const submitBtn = form.querySelector("button[type=submit]");
      const endpoint = form.getAttribute("action");
      const placeholderEndpoint = !endpoint || endpoint.includes("YOUR_FORM_ID");

      if (submitBtn) { submitBtn.disabled = true; }

      if (placeholderEndpoint) {
        // No real Formspree endpoint configured yet — simulate success locally
        // so the page is demoable before the form ID is wired in.
        console.warn("[Obsidian] Formspree endpoint not configured yet — showing local success state only.");
        setTimeout(() => {
          if (submitBtn) submitBtn.disabled = false;
          form.reset();
          if (successBox) {
            form.style.display = "none";
            successBox.classList.add("show");
          }
        }, 500);
        return;
      }

      try {
        const res = await fetch(endpoint, {
          method: "POST",
          body: new FormData(form),
          headers: { "Accept": "application/json" }
        });
        if (res.ok) {
          form.reset();
          if (successBox) {
            form.style.display = "none";
            successBox.classList.add("show");
          }
        } else {
          alert(document.documentElement.lang === "ar"
            ? "حدث خطأ أثناء الإرسال، حاول مرة أخرى."
            : "Something went wrong while sending. Please try again.");
        }
      } catch (err) {
        alert(document.documentElement.lang === "ar"
          ? "تعذّر الإرسال، تحقق من الاتصال بالإنترنت."
          : "Couldn't submit — please check your connection.");
      } finally {
        if (submitBtn) submitBtn.disabled = false;
      }
    });
  });

});
