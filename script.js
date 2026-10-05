document.documentElement.classList.add("js");

const page = document.body.dataset.page || "home";

const links = [
  ["home", "Home", "index.html"],
  ["recruitment", "Recruitment", "recruitment.html"],
  ["philanthropy", "Philanthropy", "philanthropy.html"],
  ["brotherhood", "Brotherhood", "brotherhood.html"],
  ["parents", "Parents", "parents.html"],
];

const header = document.querySelector("[data-site-header]");
if (header) {
  header.outerHTML = `
    <a class="skip-link" href="#main-content">Skip to content</a>
    <div class="announcement">
      <a href="recruitment.html">Recruitment typically begins during Week One each quarter <span>See details →</span></a>
    </div>
    <header class="site-header" data-sticky-header>
      <div class="container header-inner">
        <a class="brand" href="index.html" aria-label="Phi Gamma Delta at UC Davis — home">
          <span class="brand-mark" aria-hidden="true">FIJI</span>
          <span class="brand-copy">
            <strong>Phi Gamma Delta</strong>
            <small>Delta Chi · UC Davis</small>
          </span>
        </a>
        <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-navigation" aria-label="Open navigation"><span></span></button>
        <nav class="site-nav" id="site-navigation" aria-label="Primary navigation">
          ${links.map(([key, label, href]) => `<a href="${href}"${page === key ? ' aria-current="page"' : ""}>${label}</a>`).join("")}
          <a class="nav-cta" href="contact.html"${page === "contact" ? ' aria-current="page"' : ""}>Contact</a>
        </nav>
      </div>
    </header>`;
}

const footer = document.querySelector("[data-site-footer]");
if (footer) {
  footer.innerHTML = `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-top">
          <div class="footer-brand">
            <a class="brand" href="index.html" aria-label="Phi Gamma Delta at UC Davis — home">
              <span class="brand-mark" aria-hidden="true">FIJI</span>
              <span class="brand-copy"><strong style="color:#fff">Phi Gamma Delta</strong><small>Delta Chi · UC Davis</small></span>
            </a>
            <p>Friendship, Knowledge, Service, Morality and Excellence — lived here in Davis.</p>
          </div>
          <div>
            <p class="footer-title">Explore</p>
            <nav class="footer-links" aria-label="Footer navigation">
              <a href="recruitment.html">Recruitment</a>
              <a href="philanthropy.html">Philanthropy</a>
              <a href="brotherhood.html">Brotherhood</a>
              <a href="parents.html">Parents</a>
              <a href="contact.html">Contact</a>
            </nav>
          </div>
          <div>
            <p class="footer-title">Connect</p>
            <div class="footer-links">
              <a href="https://www.instagram.com/fijiatdavis/" target="_blank" rel="noopener noreferrer">Instagram ↗</a>
              <a href="https://www.linkedin.com/groups/16005053/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
              <a href="https://phigam.org/" target="_blank" rel="noopener noreferrer">Phi Gamma Delta ↗</a>
              <a href="https://csi.ucdavis.edu/sorority-fraternity-life/councils/ifc" target="_blank" rel="noopener noreferrer">UC Davis IFC ↗</a>
            </div>
          </div>
          <div class="footer-location">
            <p class="footer-title">Location</p>
            <p>217 Russell Boulevard<br>Davis, California 95616</p>
            <a class="text-link" style="color:var(--gold-light)" href="https://www.google.com/maps/search/?api=1&query=217+Russell+Blvd+Davis+CA+95616" target="_blank" rel="noopener noreferrer">Get directions</a>
          </div>
        </div>
        <div class="footer-bottom">
          <p>© <span data-year></span> Delta Chi Chapter of Phi Gamma Delta</p>
          <p>This site is an independent chapter publication.</p>
        </div>
      </div>
    </footer>`;
}

document.querySelectorAll("[data-year]").forEach((node) => {
  node.textContent = new Date().getFullYear();
});

const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");

function closeMenu() {
  if (!navToggle || !siteNav) return;
  navToggle.setAttribute("aria-expanded", "false");
  navToggle.setAttribute("aria-label", "Open navigation");
  siteNav.classList.remove("is-open");
  document.body.classList.remove("menu-open");
}

navToggle?.addEventListener("click", () => {
  const isOpen = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-expanded", String(!isOpen));
  navToggle.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
  siteNav?.classList.toggle("is-open", !isOpen);
  document.body.classList.toggle("menu-open", !isOpen);
});

siteNav?.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
document.addEventListener("keydown", (event) => {
  const menuIsOpen = navToggle?.getAttribute("aria-expanded") === "true";
  if (event.key === "Escape" && menuIsOpen) {
    closeMenu();
    navToggle.focus();
  }
  if (event.key === "Tab" && menuIsOpen && siteNav && navToggle) {
    const menuItems = [navToggle, ...siteNav.querySelectorAll("a")];
    const firstItem = menuItems[0];
    const lastItem = menuItems[menuItems.length - 1];
    if (event.shiftKey && document.activeElement === firstItem) {
      event.preventDefault();
      lastItem.focus();
    } else if (!event.shiftKey && document.activeElement === lastItem) {
      event.preventDefault();
      firstItem.focus();
    } else if (!menuItems.includes(document.activeElement)) {
      event.preventDefault();
      firstItem.focus();
    }
  }
});
window.addEventListener("resize", () => {
  if (window.innerWidth > 900) closeMenu();
  updateHeader();
});

const stickyHeader = document.querySelector("[data-sticky-header]");
function updateHeader() {
  stickyHeader?.classList.toggle("is-scrolled", window.scrollY > 8);
  if (stickyHeader && siteNav && window.innerWidth <= 900) {
    const navTop = Math.round(stickyHeader.getBoundingClientRect().bottom);
    siteNav.style.height = `calc(100dvh - ${navTop}px)`;
  } else if (siteNav) {
    siteNav.style.removeProperty("height");
  }
}
updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const observer = new IntersectionObserver((entries, instance) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        instance.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px" });
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}
