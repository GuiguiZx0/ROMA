document.addEventListener("DOMContentLoaded", () => {

  /* =======================================================
  MENU MOBILE
  ======================================================= */
  
  const menuBtn = document.getElementById("menuBtn");
  const nav = document.getElementById("nav");
  
  if (menuBtn && nav) {
  
  menuBtn.addEventListener("click", () => {
  
    const isOpen = nav.classList.toggle("active");
  
    menuBtn.setAttribute(
      "aria-expanded",
      isOpen
    );
  
    menuBtn.setAttribute(
      "aria-label",
      isOpen ? "Fechar menu" : "Abrir menu"
    );
  
    menuBtn.textContent = isOpen ? "✕" : "☰";
  
  });
  
  
  nav.querySelectorAll("a").forEach(link => {
  
    link.addEventListener("click", () => {
  
      nav.classList.remove("active");
  
      menuBtn.setAttribute(
        "aria-expanded",
        "false"
      );
  
      menuBtn.setAttribute(
        "aria-label",
        "Abrir menu"
      );
  
      menuBtn.textContent = "☰";
  
    });
  
  });
  
  
  }
  
  /* =======================================================
  CURSOR
  ======================================================= */
  
  const cursorGlow = document.querySelector(".cursor-glow");
  
  if (
  cursorGlow &&
  window.matchMedia("(pointer: fine)").matches
  ) {
  
  window.addEventListener("mousemove", event => {
  
    cursorGlow.style.left = `${event.clientX}px`;
    cursorGlow.style.top = `${event.clientY}px`;
  
  });
  
  
  } else if (cursorGlow) {
  
  cursorGlow.style.display = "none";
  
  
  }
  
  /* =======================================================
  HEADER AO ROLAR
  ======================================================= */
  
  const header = document.querySelector(".header");
  
  if (header) {
  
  window.addEventListener(
    "scroll",
    () => {
  
      if (window.scrollY > 50) {
  
        header.style.background =
          "rgba(7, 7, 7, 0.94)";
  
      } else {
  
        header.style.background =
          "rgba(11, 11, 11, 0.72)";
  
      }
  
    },
    { passive: true }
  );
  
  
  }
  
  /* =======================================================
  ANIMAÇÃO DOS ELEMENTOS
  ======================================================= */
  
  const elements = document.querySelectorAll(
  ".project-card, .service, .stats div"
  );
  
  if ("IntersectionObserver" in window) {
  
  const observer = new IntersectionObserver(
    entries => {
  
      entries.forEach(entry => {
  
        if (!entry.isIntersecting) {
          return;
        }
  
        entry.target.classList.add("is-visible");
  
        observer.unobserve(entry.target);
  
      });
  
    },
    {
      threshold: 0.15
    }
  );
  
  
  elements.forEach(element => {
  
    element.classList.add("animate-on-scroll");
  
    observer.observe(element);
  
  });
  
  
  }
  
  });