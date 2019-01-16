import Util from './util.js';
import Header from './header.js';
import Slider from './slider.js';

document.addEventListener('DOMContentLoaded', function() {
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

  //INITIATE SLIDER AND PROGRESS BAR RELATED
  const options = {
    cellAlign: 'center',
    contain: true,
    draggable: true,
    wrapAround: true
  };
  const testSlider = new Slider('.test-carousel', options);
  const sliderStatus = Util.element('.test-carousel-status');
  testSlider.updateStatus(sliderStatus);

  testSlider.slider.on('select', () => {
    testSlider.updateStatus(sliderStatus);
  });

  const duration = 4;
  const interval = 10;
  const sliderWrapper = Util.element('.test-carousel');
  const progressBar = Util.element('.progress');

  testSlider.progressBar(sliderWrapper, duration, interval, progressBar);
});
