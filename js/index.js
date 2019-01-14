import Util from './util.js';
import Header from './header.js';

document.addEventListener("DOMContentLoaded", function () {
    const navBar = Util.element('.navbar');
    navBar.addEventListener('click', () => {
        Header.toggleMenu(navBar);
    });
});