import Util from './util.js';
import Header from './header.js';
import Slider from './slider.js';

document.addEventListener('DOMContentLoaded', function() {
  const navBarOpen = Util.element('.navbar__icon-menu');
  const navBarClose = Util.element('.menu__icon-close');
  const menu = Util.element('.menu');

  if (menu) {
    navBarOpen.addEventListener('click', () => Header.toggleMenu(menu));
    navBarClose.addEventListener('click', () => Header.toggleMenu(menu));
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
