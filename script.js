// =========================================================
// DWI NUR DARMAWAN — SISTEM DIGITAL UNTUK USAHA ANDA
// Light JS: scroll reveal + mobile nav toggle
// =========================================================

document.addEventListener("DOMContentLoaded", () => {

  /* ---------- Scroll reveal (fade-up) ---------- */
  const revealEls = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: "0px 0px -40px 0px"
    });

    revealEls.forEach((el) => observer.observe(el));
  } else {
    // Fallback: show everything immediately
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }

  /* ---------- Mobile navbar toggle ---------- */
  const navToggle = document.getElementById("navbar-toggle");
  const navLinks = document.getElementById("navbar-links");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      navLinks.classList.toggle("is-open");
    });

    // Close menu after clicking a link (mobile)
    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("is-open");
      });
    });
  }

});
