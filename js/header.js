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
    // checkScrollMobile(mobilHeader, headerColor) {
    //     const scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    //     const menuIsOpen = document.querySelector('.slide-down');
    //     if (menuIsOpen && scrollTop > 0) {
    //         mobilHeader.style.top = scrollTop + 50 + 'px';
    //     } else if (menuIsOpen && scrollTop == 0) {
    //         mobilHeader.style.top = 70 + 'px';
    //         headerColor.style.backgroundColor = 'rgba(152, 19, 22, 0.8)'
    //     }
    // }
    // navigationFeedback(navEl) {
    //     const getUrl = window.location.href;
    //     for (let i = 0; i < navEl.length; i++) {
    //         const getHref = navEl[i].innerHTML.replace(/ /g, '');
    //         const split = getHref.indexOf('/') + 1;
    //         const split1 = getHref.indexOf('/"');
    //         const href = getHref.slice(split, split1);
    //         if (getUrl.indexOf(href) >= 0) {
    //             navEl[i].classList.add('current');
    //         }
    //     }
    // }
}
