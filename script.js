const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav-links");

/* MENU MOBILE */
if (toggle) {
  toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
}

/* SCROLL FLUIDO */
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function(e) {

    const target = this.getAttribute("href");

    if (target.startsWith("#")) {
      e.preventDefault();

      document.querySelector(target).scrollIntoView({
        behavior: "smooth"
      });

      nav.classList.remove("active");
    }
  });
});

/* ⭐ ANIMAZIONI OGNI VOLTA CHE SCROLLI (RIATTIVE) */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {

    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show"); // ← importante: reset animazione
    }

  });
}, {
  threshold: 0.2
});

document.querySelectorAll(".hidden").forEach(el => {
  observer.observe(el);
});

/* FADE IN PAGINA */
window.addEventListener("load", () => {
  document.body.classList.add("page-loaded");
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function() {

    const target = this.getAttribute("href");

    // se è link interno tipo index.html#sezione
    if (target.includes("index.html#")) {
      // lascia navigazione normale (non bloccare)
      return;
    }

  });
});