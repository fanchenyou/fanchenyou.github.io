var body = document.querySelector('body')
var menuTrigger = document.querySelector('#toggle-main-menu-mobile');
var menuContainer = document.querySelector('#main-menu-mobile');

if (menuTrigger && menuContainer) {
    menuTrigger.onclick = function() {
        menuContainer.classList.toggle('open');
        menuTrigger.classList.toggle('is-active')
        body.classList.toggle('lock-scroll')
    }
}

var carousel = document.querySelector('.home-carousel');

if (carousel) {
    var slides = carousel.querySelectorAll('.home-slide');
    var dots = carousel.querySelectorAll('.dot');
    var prevButton = carousel.querySelector('.home-carousel-btn.prev');
    var nextButton = carousel.querySelector('.home-carousel-btn.next');
    var currentIndex = 0;
    var intervalId;

    function showSlide(index) {
        slides.forEach(function(slide, idx) {
            slide.classList.toggle('active', idx === index);
        });

        dots.forEach(function(dot, idx) {
            dot.classList.toggle('active', idx === index);
        });

        currentIndex = index;
    }

    function nextSlide() {
        showSlide((currentIndex + 1) % slides.length);
    }

    function prevSlide() {
        showSlide((currentIndex - 1 + slides.length) % slides.length);
    }

    function restartAutoPlay() {
        window.clearInterval(intervalId);
        intervalId = window.setInterval(nextSlide, 5000);
    }

    if (slides.length > 0) {
        prevButton.addEventListener('click', function() {
            prevSlide();
            restartAutoPlay();
        });

        nextButton.addEventListener('click', function() {
            nextSlide();
            restartAutoPlay();
        });

        dots.forEach(function(dot, idx) {
            dot.addEventListener('click', function() {
                showSlide(idx);
                restartAutoPlay();
            });
        });

        showSlide(0);
        restartAutoPlay();
    }
}

var publicationBackToTop = document.querySelector('.publication-back-to-top');

if (publicationBackToTop) {
    function togglePublicationBackToTop() {
        publicationBackToTop.classList.toggle('visible', window.scrollY > 160);
    }

    window.addEventListener('scroll', togglePublicationBackToTop);
    togglePublicationBackToTop();
}
