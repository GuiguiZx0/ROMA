/* =========================================================
   ANIMAÇÃO DAS ARTES AO ROLAR
========================================================= */

const artworks = document.querySelectorAll(".artwork");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);

artworks.forEach((artwork) => {
    observer.observe(artwork);
});


/* =========================================================
   LIGHTBOX
========================================================= */

const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.querySelector(".lightbox img");
const closeButton = document.querySelector(".close-lightbox");

const zoomButtons = document.querySelectorAll(".zoom-button");


zoomButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const artwork = button.closest(".artwork");

        const image = artwork.querySelector("img");

        lightboxImage.src = image.src;

        lightboxImage.alt = image.alt;

        lightbox.classList.add("active");

        document.body.style.overflow = "hidden";

    });

});


/* =========================================================
   FECHAR LIGHTBOX
========================================================= */

function closeLightbox() {

    lightbox.classList.remove("active");

    document.body.style.overflow = "";

}


/* Botão X */

closeButton.addEventListener("click", closeLightbox);


/* Clicar fora da imagem */

lightbox.addEventListener("click", (event) => {

    if (event.target === lightbox) {

        closeLightbox();

    }

});


/* =========================================================
   TECLA ESC
========================================================= */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        closeLightbox();

    }

});


/* =========================================================
   EFEITO PARALLAX LEVE NO HERO
========================================================= */

const hero = document.querySelector(".project-hero");

window.addEventListener("scroll", () => {

    if (!hero) return;

    const scroll = window.scrollY;

    hero.style.backgroundPosition =
        `center ${scroll * 0.15}px`;

});
