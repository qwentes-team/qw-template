import Flickity from 'flickity';
import { Util } from '../../shared/util';

export default class Carousel {
  constructor(elementSelector, options = {}, progressBarSelector = '.no-selector') {
    this.element = Util.element(elementSelector);
    this.options = options;
    this.flickityInstance = new Flickity(this.element, this.options);
    this.isPaused = false;
    this.duration = 4;
    this.interval = 10;
    this.progressBarElement = Util.element(progressBarSelector);
    if (this.progressBarElement) {
      this.initProgressBar();
    }
  }

  initProgressBar() {
    this.element.addEventListener('mouseenter', () => (this.isPaused = true));
    this.element.addEventListener('mouseleave', () => (this.isPaused = false));

    this.startProgressbar();
  }

  startProgressbar() {
    this._resetProgressbar();
    this.percentTime = 0;
    this.isPaused = false;
    this.tick = window.setInterval(() => this._increaseProgressbar(), this.interval);
  }

  _increaseProgressbar() {
    if (!this.isPaused) {
      const step = (this.duration * 1000) / this.interval;
      this.percentTime += 100 / step;
      this.progressBarElement.style.width = this.percentTime + '%';
      if (this.percentTime >= 100) {
        this.flickityInstance.next();
        this.startProgressbar(this.progressBarElement);
      }
    }
  }

  _resetProgressbar() {
    clearTimeout(this.tick);
    this.progressBarElement.style.width = 0 + '%';
  }

  static getBaseOptions() {
    return {
      cellAlign: 'center',
      contain: true,
      draggable: true,
      wrapAround: true
    };
  }
}
