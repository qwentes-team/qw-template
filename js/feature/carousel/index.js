import Carousel from './carousel';

export function initCarousel() {
  const testCarousel = '.test-carousel';
  const testCarouselProgressBarSelector = '.carousel-progress';
  const testCarouselInstance = new Carousel(testCarousel, Carousel.getBaseOptions(), testCarouselProgressBarSelector);
  testCarouselInstance.flickityInstance.on('select', () => testCarouselInstance.startProgressbar());

  const testCarousel2 = '.test-carousel-no-progressbar';
  new Carousel(testCarousel2, { ...Carousel.getBaseOptions(), autoPlay: true });
}
