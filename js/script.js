/**
 * Portfolio interactions:
 * - progressive scroll reveals
 * - current navigation state
 * - compact mobile-menu behaviour
 * - dynamic footer year
 */

// Apply the JS class before reveal styles are evaluated.
document.documentElement.classList.add("js");

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("#site-header");
  const navCollapse = document.querySelector("#mainNav");
  const navLinks = [...document.querySelectorAll(".navbar .nav-link")];
  const sections = [...document.querySelectorAll("main section[id]")];
  const revealItems = document.querySelectorAll(".reveal");
  const year = document.querySelector("#current-year");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Keep the copyright date accurate without requiring manual maintenance.
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  const updateHeader = () => {
    header?.classList.toggle("is-scrolled", window.scrollY > 18);
  };

  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  // Reveal content only when motion is welcome; otherwise show everything.
  if ("IntersectionObserver" in window && !reduceMotion) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -45px" }
    );

    revealItems.forEach((item) => revealObserver.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  }

  // Mark the navigation link for the section currently in view.
  if ("IntersectionObserver" in window) {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          navLinks.forEach((link) => {
            const isCurrent = link.getAttribute("href") === `#${entry.target.id}`;
            link.classList.toggle("active", isCurrent);
            if (isCurrent) {
              link.setAttribute("aria-current", "page");
            } else {
              link.removeAttribute("aria-current");
            }
          });
        });
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((section) => sectionObserver.observe(section));
  }

  // Collapse the Bootstrap mobile menu after an in-page destination is chosen.
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (!navCollapse?.classList.contains("show")) return;
      const collapse = bootstrap.Collapse.getOrCreateInstance(navCollapse);
      collapse.hide();
    });
  });
});
