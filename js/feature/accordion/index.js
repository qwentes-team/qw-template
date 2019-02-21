import Accordion from './accordion';

export function initAccordions() {
  for (let i = 0; i < Accordion.getAccordions().length; i++) {
    new Accordion(i);
  }
}
