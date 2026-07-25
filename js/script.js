/**
 * Progressive enhancements for the portfolio:
 * - lightweight cybersecurity symbol field in the hero
 * - restrained reveal-on-scroll transitions
 * - active navigation state and mobile menu management
 * - persistent header/back-to-top state
 */

document.documentElement.classList.add("js");

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("#site-header");
  const mobileNav = document.querySelector("#primaryNav");
  const navLinks = [...document.querySelectorAll(".navbar .nav-link")];
  const sections = [...document.querySelectorAll("main section[id]")];
  const revealItems = document.querySelectorAll(".reveal");
  const backToTop = document.querySelector(".back-to-top");
  const year = document.querySelector("#current-year");
  const particleLayer = document.querySelector("#cyber-particle-layer");
  const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  /**
   * Creates a limited, low-opacity data field using reusable inline SVG symbols.
   * Mobile gets fewer particles; reduced-motion users get no moving particles.
   */
  const createCyberParticles = () => {
    if (!particleLayer || motionPreference.matches) return;

    const isMobile = window.innerWidth < 576;
    const isTablet = window.innerWidth < 992;
    const particleCount = isMobile ? 6 : isTablet ? 10 : 18;
    const symbolIds = [
      "cyber-lock",
      "cyber-shield",
      "cyber-wifi",
      "cyber-cloud",
      "cyber-code",
      "cyber-server",
      "cyber-database",
      "cyber-key",
      "cyber-network",
      "cyber-terminal",
      "cyber-firewall",
      "cyber-fingerprint"
    ];
    const codeLabels = ["01 10", ">_ SEC", "{ }", "TLS", "AES", "SSH", "CLOUD", "NET"];
    const svgNamespace = "http://www.w3.org/2000/svg";

    particleLayer.replaceChildren();

    for (let index = 0; index < particleCount; index += 1) {
      const useTextLabel = index % 5 === 4;
      const particle = document.createElement("span");
      particle.className = useTextLabel ? "cyber-code-label" : "cyber-particle";

      const xPosition = 4 + Math.random() * 91;
      const duration = 17 + Math.random() * 15;
      const delay = -(Math.random() * duration);
      const drift = -32 + Math.random() * 64;
      const startRotation = -15 + Math.random() * 30;
      const endRotation = -38 + Math.random() * 76;
      const opacity = 0.09 + Math.random() * 0.1;

      particle.style.setProperty("--x", `${xPosition}%`);
      particle.style.setProperty("--start-y", `${90 + Math.random() * 95}px`);
      particle.style.setProperty("--duration", `${duration}s`);
      particle.style.setProperty("--delay", `${delay}s`);
      particle.style.setProperty("--drift-x", `${drift}px`);
      particle.style.setProperty("--rotation-start", `${startRotation}deg`);
      particle.style.setProperty("--rotation-end", `${endRotation}deg`);
      particle.style.setProperty("--opacity", opacity.toFixed(2));
      particle.style.setProperty(
        "--particle-color",
        index % 3 === 0 ? "#f2f7fb" : index % 3 === 1 ? "#9cecff" : "#73aef8"
      );

      if (useTextLabel) {
        particle.style.setProperty("--size", `${0.52 + Math.random() * 0.18}rem`);
        particle.textContent = codeLabels[index % codeLabels.length];
      } else {
        particle.style.setProperty("--size", `${18 + Math.random() * (isMobile ? 7 : 15)}px`);
        const svg = document.createElementNS(svgNamespace, "svg");
        const use = document.createElementNS(svgNamespace, "use");
        use.setAttribute("href", `#${symbolIds[index % symbolIds.length]}`);
        svg.append(use);
        particle.append(svg);
      }

      particleLayer.append(particle);
    }
  };

  createCyberParticles();

  // Re-apply direct section links after layout so fixed navigation never obscures the target.
  if (window.location.hash) {
    window.requestAnimationFrame(() => {
      const directTarget = document.querySelector(window.location.hash);
      directTarget?.scrollIntoView({ block: "start", behavior: "auto" });
    });
  }

  // Rebuild only when crossing a responsive particle-count breakpoint.
  let particleMode = window.innerWidth < 576 ? "mobile" : window.innerWidth < 992 ? "tablet" : "desktop";
  let resizeTimer;
  window.addEventListener(
    "resize",
    () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => {
        const nextMode = window.innerWidth < 576 ? "mobile" : window.innerWidth < 992 ? "tablet" : "desktop";
        if (nextMode === particleMode) return;
        particleMode = nextMode;
        createCyberParticles();
      }, 180);
    },
    { passive: true }
  );

  motionPreference.addEventListener("change", () => {
    particleLayer?.replaceChildren();
    createCyberParticles();
  });

  // Header and utility-control states share one passive scroll listener.
  const updateScrollState = () => {
    header?.classList.toggle("is-scrolled", window.scrollY > 24);
    backToTop?.classList.toggle("is-visible", window.scrollY > 700);
  };

  updateScrollState();
  window.addEventListener("scroll", updateScrollState, { passive: true });

  if ("IntersectionObserver" in window && !motionPreference.matches) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -42px" }
    );

    revealItems.forEach((item) => revealObserver.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  }

  // Track the section occupying the central reading area.
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
      { rootMargin: "-34% 0px -58% 0px", threshold: 0 }
    );

    sections.forEach((section) => sectionObserver.observe(section));
  }

  // Collapse the Bootstrap navigation after a mobile destination is chosen.
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (!mobileNav?.classList.contains("show") || typeof bootstrap === "undefined") return;
      bootstrap.Collapse.getOrCreateInstance(mobileNav).hide();
    });
  });
});
