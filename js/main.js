document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('active');
        menuToggle.setAttribute('aria-expanded', navLinks.classList.contains('active'));
    });

    // Ocultar el CTA flotante mobile cuando el footer entra en pantalla
    const mobileCta = document.querySelector('.mobile-cta');
    const footer = document.querySelector('footer');
    if (mobileCta && footer) {
        new IntersectionObserver(function(entries) {
            mobileCta.classList.toggle('mobile-cta--hidden', entries[0].isIntersecting);
        }, { threshold: 0.01 }).observe(footer);
    }
});
