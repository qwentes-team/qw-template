import { Util } from '../../shared/util';

export default class Accordion {
  constructor(index) {
    this.domElement = Accordion.getAccordions()[index];
    this.index = index;
    this._init();
  }

  _init() {
    const children = [...this.domElement.children];
    const headerChildren = [...children[0].children];
    const trigger = headerChildren.find(child => child.className === 'accordion__minus-plus' || child.className === 'accordion__arrow');

    trigger && trigger.addEventListener('click', () => this._toggleAccordion(this.index));
  }

  _toggleAccordion(indexToNotClose) {
    const INTERNAL_TYPE = 'internal';
    if (this.domElement.dataset.type !== INTERNAL_TYPE) {
      Accordion.closeAllAccordions(indexToNotClose);
    }

    this.domElement.classList.toggle(Accordion.IS_OPEN_CLASS());
  }

  static getAccordions() {
    return Util.elements('.accordion');
  }

  static IS_OPEN_CLASS() {
    return 'is-open';
  }

  static closeAllAccordions(indexToNotClose) {
    for (let i = 0; i < Accordion.getAccordions().length; i++) {
      indexToNotClose !== i && Accordion.getAccordions()[i].classList.remove(Accordion.IS_OPEN_CLASS());
    }
  }
}
