import Flickity from 'flickity';
import Util from './util.js';

export default class Slider {
  constructor(element, options) {
    this.element = element;
    this.options = options;
    this.slider = new Flickity(Util.element(this.element), this.options);
    this.isPaused = false;
  }

  updateStatus(sliderStatus) {
    sliderStatus.textContent = this.slider.selectedIndex + 1;
  }

  progressBar(sliderWrapper, duration, interval, bar) {
    sliderWrapper.addEventListener('mouseenter', () => (this.isPaused = true));
    sliderWrapper.addEventListener('mouseleave', () => (this.isPaused = false));

    this._startProgressbar(duration, interval, bar);
  }

  _startProgressbar(duration, interval, bar) {
    this._resetProgressbar(bar);
    this.percentTime = 0;
    this.isPaused = false;
    this.tick = window.setInterval(() => this._increaseProgressbar(interval, duration, bar), interval);
  }

  _increaseProgressbar(interval, duration, bar) {
    if (!this.isPaused) {
      const step = (duration * 1000) / interval;
      this.percentTime += 100 / step;
      bar.style.width = this.percentTime + '%';
      if (this.percentTime >= 100) {
        this.slider.next();
        this._startProgressbar(interval, duration, bar);
      }
    }
  }

  _resetProgressbar(bar) {
    clearTimeout(this.tick);
    bar.style.width = 0 + '%';
  }
}
