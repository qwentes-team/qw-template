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
