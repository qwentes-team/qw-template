import '@babel/polyfill';
import Util from './util.js';
import Carousel from './carousel.js';

document.addEventListener('DOMContentLoaded', () => {
  initMenu();
  initCarousel();
  initAccordions();
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

function initAccordions() {
  const accordions = Util.elements('.accordion');
  const IS_OPEN_CLASS = 'is-open';

  const closeAllAccordions = indexToNotClose => {
    for (let i = 0; i < accordions.length; i++) {
      indexToNotClose !== i && accordions[i].classList.remove(IS_OPEN_CLASS);
    }
  };

  const toggleAccordion = (el, indexToNotClose) => {
    const INTERNAL_TYPE = 'internal';
    if (el.dataset.type !== INTERNAL_TYPE) {
      closeAllAccordions(indexToNotClose);
    }

    el.classList.toggle(IS_OPEN_CLASS);
  };

  for (let i = 0; i < accordions.length; i++) {
    const children = [...accordions[i].children];
    const headerChildren = [...children[0].children];
    const arrow = headerChildren.find(child => child.className === 'accordion__arrow');
    const minusPlus = headerChildren.find(child => child.className === 'accordion__minus-plus');

    arrow && arrow.addEventListener('click', () => toggleAccordion(accordions[i], i));
    minusPlus && minusPlus.addEventListener('click', () => toggleAccordion(accordions[i], i));
  }
}
