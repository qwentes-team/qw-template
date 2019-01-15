import Util from './util.js';
export default class Header {
    constructor() {}
    static toggleMenu(menuButton) {
        menuButton.classList.toggle('open-menu');
    }
    static fixElementOnScroll(el, anchor, classe) {
        window.addEventListener('scroll', () => {
            const mainMenuAnchor = anchor.getBoundingClientRect().top;
            if (mainMenuAnchor < 0) {
                el.classList.add(classe);
            } else {
                el.classList.remove(classe);
            }
        });
    }
}
