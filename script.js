// =========================================================
// DWI NUR DARMAWAN — SISTEM DIGITAL UNTUK USAHA ANDA
// Optimized JS: Scroll Reveal + Production-Ready Mobile Nav
// =========================================================

document.addEventListener("DOMContentLoaded", () => {

  /* ---------- Scroll reveal ---------- */
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
      threshold: 0.10,
      rootMargin: "0px 0px -20px 0px"
    });

    revealEls.forEach((el) => {
      // Elemen di dalam .hero langsung tampil — tidak perlu tunggu observer
      if (el.closest(".hero")) {
        el.classList.add("is-visible");
      } else {
        observer.observe(el);
      }
    });
  } else {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }

  /* ---------- Mobile navbar toggle ---------- */
  const navToggle = document.getElementById("navbar-toggle");
  const navLinks  = document.getElementById("navbar-links");
  const body      = document.body;

  if (navToggle && navLinks) {

    const toggleMenu = (isOpen) => {
      navLinks.classList.toggle("is-open", isOpen);
      navToggle.classList.toggle("is-active", isOpen);
      navToggle.setAttribute("aria-expanded", isOpen);   // aksesibilitas
      body.style.overflow = isOpen ? "hidden" : "";      // cegah scroll bocor
    };

    navToggle.addEventListener("click", () => {
      toggleMenu(!navLinks.classList.contains("is-open"));
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => toggleMenu(false));
    });
  }

});
