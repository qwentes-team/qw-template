const Flickity = require('flickity');
import Util from './util.js';

export default class Slider {
  constructor() {}
  static create(element, options) {
    return new Flickity(Util.element(element), options);
  }

  static updateStatus(slider, sliderStatus) {
    var slideNumber = slider.selectedIndex + 1;
    sliderStatus.textContent = '0' + slideNumber;
  }
  static progressBar(sliderWrapper, flkty, duration, interval, progressBar) {
    // Pause control
    let isPaused = false;
    sliderWrapper.addEventListener('mouseenter', function() {
      isPaused = true;
    });
    sliderWrapper.addEventListener('mouseleave', function() {
      isPaused = false;
    });
    let percentTime, step, tick;
    function startProgressbar() {
      resetProgressbar();
      percentTime = 0;
      isPaused = false;
      tick = window.setInterval(increase, interval);
    }
    function increase() {
      if (!isPaused) {
        step = (duration * 1000) / interval;
        percentTime += 100 / step;
        progressBar.style.width = percentTime + '%';
        if (percentTime >= 100) {
          flkty.next();
          startProgressbar();
        }
      }
    }
    function resetProgressbar() {
      progressBar.style.width = 0 + '%';
      clearTimeout(tick);
    }
    startProgressbar();
  }
}
