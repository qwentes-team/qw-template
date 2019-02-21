import Util from './util.js';
import Carousel from './carousel.js';

document.addEventListener('DOMContentLoaded', () => {
  initMenu();
  initCarousel();
});

function initMenu() {
  const navBarOpen = Util.element('.navbar__icon-menu');
  const navBarClose = Util.element('.menu__icon-close');
  const menu = Util.element('.menu');

  if (menu) {
    navBarOpen.addEventListener('click', () => menu.classList.toggle('is-open'));
    navBarClose.addEventListener('click', () => menu.classList.toggle('is-open'));
  }
}

function initCarousel() {
  const options = {
    cellAlign: 'center',
    contain: true,
    draggable: true,
    wrapAround: true
  };

  const testCarousel = '.test-carousel';
  const testCarouselProgressBarSelector = '.carousel-progress';
  const testCarouselInstance = new Carousel(testCarousel, options, testCarouselProgressBarSelector);
  testCarouselInstance.flickityInstance.on('select', () => testCarouselInstance.startProgressbar());

  const testCarousel2 = '.test-carousel-no-progressbar';
  new Carousel(testCarousel2, { ...options, autoPlay: true });
}
