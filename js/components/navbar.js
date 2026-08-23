/**
 * @file navbar.js
 * @description Renders the navigation bar of the website, including logo, social media links, and primary nav menu with active-link highlighting.
 * @module components/navbar
 */

const SOCIAL_LINKS = [
  {
    href: "https://www.facebook.com/profile.php?id=61557409119325",
    icon: "fa-facebook",
    label: "Facebook",
  },
  {
    href: "https://www.instagram.com/chate_thehook",
    icon: "fa-instagram",
    label: "Instagram",
  },
  {
    href: "https://www.youtube.com/@Chate_TheHook",
    icon: "fa-youtube",
    label: "YouTube",
  },
  {
    href: "https://www.tiktok.com/@chate_thehook",
    icon: "fa-tiktok",
    label: "TikTok",
  },
  {
    href: "https://t.me/chatethehook",
    icon: "fa-telegram",
    label: "Telegram",
  },
  {
    href: "https://www.linkedin.com/company/%E1%80%81%E1%80%BB%E1%80%AD%E1%80%90%E1%BA%BA%E1%80%BA-the-hook/",
    icon: "fa-linkedin",
    label: "LinkedIn",
  },
];

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/advising.html", label: "Advising" },
  { href: "/events.html", label: "Events" },
  { href: "/articles.html", label: "Articles" },
  { href: "/videos.html", label: "Videos" },
];

export function renderSocialLinks() {
  return SOCIAL_LINKS.map(
    ({ href, icon, label }) => `
      <a
        class="social-media"
        href="${href}"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="${label}"
      >
        <i class="fa-brands ${icon}" aria-hidden="true"></i>
      </a>
    `,
  ).join("");
}

function renderNavLinks(currentPath, mobile = false) {
  return NAV_LINKS.map(({ href, label }) => {
    const isActive = currentPath === href;

    return `
      <a
        class="site-nav__link${isActive ? " site-nav__link--active" : ""}${mobile ? " site-nav__link--mobile" : ""}"
        href="${href}"
        ${isActive ? 'aria-current="page"' : ""}
      >
        ${
          mobile
            ? `
              <span class="site-nav__arrow" aria-hidden="true">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M7 7h10v10"></path>
                  <path d="M7 17 17 7"></path>
                </svg>
              </span>
            `
            : ""
        }
        <span class="site-nav__label">${label}</span>
      </a>
    `;
  }).join("");
}

export function renderNavbar(currentPath) {
  const desktopNavLinks = renderNavLinks(currentPath);
  const mobileNavLinks = renderNavLinks(currentPath, true);
  const socialLinks = renderSocialLinks();

  return `
    <div class="site-header__container">

      <div class="site-header__social">
        ${socialLinks}
      </div>

      <div class="site-header__brand">
        <a
          href="/"
          class="site-header__logo-link"
          aria-label="ချိတ်-The Hook home"
        >
          <img
            class="site-header__logo"
            src="assets/logos/logo-transparent.webp"
            alt="ချိတ်-The Hook"
          >
        </a>
      </div>

      <nav
        class="site-header__navigation"
        aria-label="Main navigation"
      >
        <div class="site-nav">
          ${desktopNavLinks}
        </div>
      </nav>

      <div class="site-header__menu">
        <button
          class="custom-navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#navbarOffcanvas"
          aria-controls="navbarOffcanvas"
          aria-expanded="false"
          aria-label="Open navigation menu"
        >
          <span class="menu-bar"></span>
          <span class="menu-bar"></span>
          <span class="menu-bar"></span>
        </button>
      </div>
    </div>

    <div
      class="offcanvas offcanvas-start nav-offcanvas"
      tabindex="-1"
      id="navbarOffcanvas"
      aria-label="Mobile navigation menu"
    >
      <div class="offcanvas-header nav-offcanvas__header">
        <a
          href="/"
          class="site-header__mobile-logo-link"
          aria-label="ချိတ်-The Hook home"
        >
          <img
            class="site-header__mobile-logo"
            src="assets/logos/logo-transparent.webp"
            alt="ချိတ်-The Hook"
          >
        </a>
      </div>

      <div class="offcanvas-body nav-offcanvas__body">
        <nav
          class="mobile-nav-links"
          aria-label="Mobile navigation"
        >
          ${mobileNavLinks}
        </nav>

        <div
          class="mobile-social-links"
          aria-label="Social media links"
        >
          ${socialLinks}
        </div>

        <div class="mobile-copyright">
          <p>
            © 2026
            <a href="/"><span lang="my">ချိတ်</span>-The Hook</a>.
            All rights reserved.
          </p>
        </div>
      </div>
    </div>
  `;
}

export function initNavbar(navbarContainer) {
  if (!navbarContainer) return;

  const toggler = navbarContainer.querySelector(".custom-navbar-toggler");
  const offcanvas = navbarContainer.querySelector("#navbarOffcanvas");

  if (!toggler || !offcanvas) return;

  offcanvas.addEventListener("show.bs.offcanvas", () => {
    navbarContainer.classList.remove("is-hidden");
    toggler.classList.add("is-open");
    toggler.setAttribute("aria-expanded", "true");
    toggler.setAttribute("aria-label", "Close navigation menu");
  });

  offcanvas.addEventListener("hide.bs.offcanvas", () => {
    toggler.classList.remove("is-open");
    toggler.setAttribute("aria-expanded", "false");
    toggler.setAttribute("aria-label", "Open navigation menu");
  });

  let previousScrollY = window.scrollY;

  function handleScroll() {
    const currentScrollY = window.scrollY;

    navbarContainer.classList.toggle("is-scrolled", currentScrollY > 0);

    if (currentScrollY <= 0 || currentScrollY < previousScrollY) {
      navbarContainer.classList.remove("is-hidden");
    } else if (!offcanvas.classList.contains("show")) {
      navbarContainer.classList.add("is-hidden");
    }

    previousScrollY = currentScrollY;
  }

  window.addEventListener("scroll", handleScroll, { passive: true });
}
