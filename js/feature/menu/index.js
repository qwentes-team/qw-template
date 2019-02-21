import { Util } from '../../shared/util';

export function initMenu() {
  const navBarOpen = Util.element('.navbar__icon-menu');
  const navBarClose = Util.element('.menu__icon-close');
  const menu = Util.element('.menu');

  if (menu) {
    navBarOpen.addEventListener('click', () => menu.classList.toggle('is-open'));
    navBarClose.addEventListener('click', () => menu.classList.toggle('is-open'));
  }
}
