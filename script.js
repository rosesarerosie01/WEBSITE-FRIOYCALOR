let slideIndex = 0;

function moveSlide(n) {
    slideIndex += n;
    showSlide(slideIndex);
}

function showSlide(n) {
    let slides = document.querySelectorAll('.slide');
    if (n >= slides.length) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = slides.length - 1;
    }
    // Mueve la galería de imágenes
    document.querySelector('.slides').style.transform = `translateX(${-slideIndex * 100}%)`;
}

// Inicializar el slider al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    showSlide(slideIndex);
});
