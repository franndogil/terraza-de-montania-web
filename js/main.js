document.addEventListener('DOMContentLoaded', function () {
    /* ── Menú mobile ─────────────────────────────────────── */
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function () {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('active');
            menuToggle.setAttribute('aria-expanded', navLinks.classList.contains('active'));
        });
        navLinks.addEventListener('click', function (e) {
            if (e.target.tagName === 'A') {
                navLinks.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });
    }

    /* ── Resaltar link de la página actual ───────────────── */
    const here = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(function (a) {
        if (a.getAttribute('href') === here) a.classList.add('active');
    });

    /* ── Sombra de la navbar al hacer scroll ─────────────── */
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        const onScroll = function () {
            navbar.classList.toggle('scrolled', window.scrollY > 40);
        };
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
    }

    /* ── Animaciones al aparecer en pantalla ─────────────── */
    const revealEls = document.querySelectorAll('.reveal');
    if (revealEls.length && 'IntersectionObserver' in window) {
        const io = new IntersectionObserver(function (entries) {
            entries.forEach(function (e) {
                if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
            });
        }, { threshold: 0.15 });
        revealEls.forEach(function (el) { io.observe(el); });
    } else {
        revealEls.forEach(function (el) { el.classList.add('in'); });
    }

    /* ── Slider del hero (fade + dots) ───────────────────── */
    const slides = document.querySelectorAll('.hero-slide');
    if (slides.length > 1) {
        const dotsBox = document.querySelector('.hero-dots');
        let idx = 0;
        let dots = [];

        if (dotsBox) {
            slides.forEach(function (_, i) {
                const b = document.createElement('button');
                b.setAttribute('aria-label', 'Ir a la imagen ' + (i + 1));
                if (i === 0) b.classList.add('active');
                b.addEventListener('click', function () { go(i); });
                dotsBox.appendChild(b);
            });
            dots = dotsBox.querySelectorAll('button');
        }

        function go(n) {
            slides[idx].classList.remove('active');
            if (dots.length) dots[idx].classList.remove('active');
            idx = n;
            slides[idx].classList.add('active');
            if (dots.length) dots[idx].classList.add('active');
        }

        setInterval(function () { go((idx + 1) % slides.length); }, 5000);
    }

    /* ── Acordeón de FAQs ────────────────────────────────── */
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(function (item) {
        const q = item.querySelector('.faq-q');
        const a = item.querySelector('.faq-a');
        if (!q || !a) return;
        q.addEventListener('click', function () {
            const isOpen = item.classList.contains('open');
            faqItems.forEach(function (other) {
                other.classList.remove('open');
                const oa = other.querySelector('.faq-a');
                if (oa) oa.style.maxHeight = null;
            });
            if (!isOpen) {
                item.classList.add('open');
                a.style.maxHeight = a.scrollHeight + 'px';
            }
        });
    });

    /* ── CTA flotante mobile (páginas de alojamiento) ────── */
    const mobileCta = document.querySelector('.mobile-cta');
    const footer = document.querySelector('footer');
    if (mobileCta && footer && 'IntersectionObserver' in window) {
        new IntersectionObserver(function (entries) {
            mobileCta.classList.toggle('mobile-cta--hidden', entries[0].isIntersecting);
        }, { threshold: 0.01 }).observe(footer);
    }
});
