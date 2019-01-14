import Util from './util.js';
export default class Header {
    constructor() {
    }
    static toggleMenu(menuButton) {
        menuButton.classList.toggle('open-menu');
    }
}

