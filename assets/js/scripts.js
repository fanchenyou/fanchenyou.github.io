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

var publicationBackToTop = document.querySelector('.publication-back-to-top');

if (publicationBackToTop) {
    function togglePublicationBackToTop() {
        publicationBackToTop.classList.toggle('visible', window.scrollY > 160);
    }

    window.addEventListener('scroll', togglePublicationBackToTop);
    togglePublicationBackToTop();
}
