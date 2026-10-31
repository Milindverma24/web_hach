/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

/* Menu show */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

/* Menu hidden */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLinks = document.querySelectorAll('.nav__link');

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');
    if (navMenu) {
        navMenu.classList.remove('show-menu');
    }
};

navLinks.forEach(link => link.addEventListener('click', linkAction));

/*=============== SWIPER HOMES ===============*/
const swiperHome = new Swiper('.home__swiper', {
    loop: true,
    speed: 800,
    parallax: true,
    effect: 'fade',

    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
        formatFractionCurrent: (number) => number.toString().padStart(2, '0'),
        formatFractionTotal: (number) => number.toString().padStart(2, '0')
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    }
});