import Util from './util.js';
import Header from './header.js';
import Slider from './slider.js';

document.addEventListener("DOMContentLoaded", function () {
    const navBar = Util.element('.navbar');
    navBar.addEventListener('click', () => {
        Header.toggleMenu(navBar);
    });
    const mainMenu = document.querySelector('header');

    //FIXED MENU ON SCROLL
    const mainTopLimit = document.querySelector('body');
    if (window.innerWidth > 600 && mainTopLimit) {
        Header.fixElementOnScroll(mainMenu, mainTopLimit, 'fixed-header');
    }
    if (window.innerWidth < 600) {
        Header.fixElementOnScroll(mainMenu, mainTopLimit, 'fixed-header');
    }
    // //MENU MOBILE BEHAVIOR
    // const menuMobile = document.querySelector('.menu-mobile');
    // const menuTitle = document.querySelector('.menu-hamburger p');
    // const menuButton = document.querySelector('.menu-hamburger');

    // menuButton.addEventListener('click', () => {
    //     menuMobile.classList.toggle('slide-down');
    //     menuButton.classList.toggle('menu-open');
    //     if (menuTitle.innerHTML == 'Menu') {
    //         document.body.classList.add('no-scroll');
    //         menuTitle.innerHTML = 'Chiudi';
    //         header.checkScrollMobile(menuMobile, mainMenu);
    //     } else {
    //         menuTitle.innerHTML = 'Menu';
    //         document.body.classList.remove('no-scroll');
    //         header.checkScrollMobile(menuMobile, mainMenu);
    //     }
    // })

    //slider
    const options = {
        cellAlign: 'center',
        contain: true,
        draggable: true,
        wrapAround: true
    }
    const testSlider = Slider.create('.test-carousel', options);
    const sliderStatus = Util.element('.test-carousel-status');
    Slider.updateStatus(testSlider, sliderStatus);

    testSlider.on('select', () => {
        Slider.updateStatus(testSlider, sliderStatus);
    });
    var duration = 4;
    var interval = 10;
    var sliderWrapper = Util.element('.test-carousel');
    var progressBar = Util.element('.progress');
    Slider.progressBar(sliderWrapper, testSlider, duration, interval, progressBar);
});