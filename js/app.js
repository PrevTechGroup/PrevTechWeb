document.addEventListener("DOMContentLoaded", function () {
  const header = document.getElementById("header");
  const nav = document.querySelector("#header nav");
  const headerContainer = document.querySelector("#header .container");

  function updateHeader() {
    if (!header) return;

    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }

  updateHeader();
  window.addEventListener("scroll", updateHeader);

  if (headerContainer && nav) {
    const menuButton = document.createElement("button");

    menuButton.className = "menu-toggle";
    menuButton.type = "button";
    menuButton.setAttribute("aria-label", "Open navigation menu");
    menuButton.setAttribute("aria-expanded", "false");

    menuButton.innerHTML = `
      <span></span>
      <span></span>
      <span></span>
    `;

    headerContainer.appendChild(menuButton);

    menuButton.addEventListener("click", function () {
      const isOpen = nav.classList.toggle("open");

      menuButton.setAttribute("aria-expanded", String(isOpen));
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
      });
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 992) {
        nav.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
      }
    });
  }

  const revealElements = document.querySelectorAll(
    ".division-card, " +
    ".project-card, " +
    ".project-detail-card, " +
    ".mission-card, " +
    ".industrial-card, " +
    ".process-step, " +
    ".process-home-step, " +
    ".counter-box, " +
    ".intro-box, " +
    ".contact-form"
  );

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -60px 0px"
      }
    );

    revealElements.forEach(function (element, index) {
      element.style.transitionDelay =
        Math.min(index % 4, 3) * 90 + "ms";

      observer.observe(element);
    });
  } else {
    revealElements.forEach(function (element) {
      element.classList.add("show");
    });
  }

  document
    .querySelectorAll('a[href^="#"]')
    .forEach(function (link) {
      link.addEventListener("click", function (event) {
        const targetId = link.getAttribute("href");

        if (!targetId || targetId === "#") return;

        const target = document.querySelector(targetId);

        if (!target) return;

        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      });
    });
});