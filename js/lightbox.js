(function () {
    const photos = [
        'assets/images/house-1/1.jpeg',
        'assets/images/house-1/2.jpeg',
        'assets/images/house-1/3.jpeg',
        'assets/images/house-1/4.jpg',
        'assets/images/house-1/5.jpg',
        'assets/images/house-1/6.jpg',
        'assets/images/house-1/7.jpg',
        'assets/images/house-1/8.jpg',
        'assets/images/house-1/9.jpg',
        'assets/images/house-1/10.jpg',
        'assets/images/house-1/11.jpg',
        'assets/images/house-1/12.jpg',
        'assets/images/house-1/13.jpg',
        'assets/images/house-1/14.jpeg',
    ];

    let current = 0;
    const lightbox = document.getElementById('lightbox');
    const img      = document.getElementById('lightboxImg');
    const counter  = document.getElementById('lightboxCounter');

    function show(index) {
        current = (index + photos.length) % photos.length;
        img.src = photos[current];
        counter.textContent = (current + 1) + ' / ' + photos.length;
    }

    function open(index) {
        show(index);
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function close() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Fotos de la galería desktop
    document.querySelectorAll('.gallery-photo').forEach(function (photo, i) {
        photo.addEventListener('click', function (e) {
            if (e.target.closest('.gallery-btn-all')) return;
            open(i);
        });
    });

    // Botón "Ver todas las fotos"
    document.querySelector('.gallery-btn-all').addEventListener('click', function () {
        open(0);
    });

    // Fotos del carrusel mobile
    document.querySelectorAll('.gallery-carousel__item').forEach(function (item, i) {
        item.addEventListener('click', function () { open(i); });
    });

    // Controles del lightbox
    document.getElementById('lightboxClose').addEventListener('click', close);
    document.getElementById('lightboxPrev').addEventListener('click', function () { show(current - 1); });
    document.getElementById('lightboxNext').addEventListener('click', function () { show(current + 1); });

    // Cerrar al hacer click en el fondo
    lightbox.addEventListener('click', function (e) {
        if (e.target === lightbox) close();
    });

    // Teclado
    document.addEventListener('keydown', function (e) {
        if (!lightbox.classList.contains('active')) return;
        if (e.key === 'Escape')     close();
        if (e.key === 'ArrowLeft')  show(current - 1);
        if (e.key === 'ArrowRight') show(current + 1);
    });

    // Swipe mobile
    var touchStartX = 0;
    lightbox.addEventListener('touchstart', function (e) {
        touchStartX = e.touches[0].clientX;
    }, { passive: true });
    lightbox.addEventListener('touchend', function (e) {
        var diff = touchStartX - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 50) {
            diff > 0 ? show(current + 1) : show(current - 1);
        }
    });
})();
