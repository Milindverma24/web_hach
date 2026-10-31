let menuToggle = document.querySelector('.menuToggle');
let lightDark = document.querySelector('.lightDark');
let body = document.querySelector('body');
let video = document.querySelector('video');
let dark = false;
let navigation = document.querySelector('.navigation');

menuToggle.onclick = function () {
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
};

lightDark.onclick = function () {
    dark = !dark;
    lightDark.classList.toggle('active');
    body.classList.toggle('dark');

    if (dark) {
        video.setAttribute('src','../assets/rain-forest-2.mp4');
    } else {
        video.setAttribute('src','../assets/rain-forest-1.mp4');
    }
};

