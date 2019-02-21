import '@babel/polyfill';
import { initMenu } from './feature/menu';
import { initCarousel } from './feature/carousel';
import { initAccordions } from './feature/accordion';

document.addEventListener('DOMContentLoaded', () => {
  initMenu();
  initCarousel();
  initAccordions();
});
