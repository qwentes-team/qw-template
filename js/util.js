

export default class Util {
    static element(selector) {
        return document.querySelector(selector);
    }

    static elements(selectors) {
        return document.querySelectorAll(selectors);
    }

    static create(elem) {
        return document.createElement(elem)
    }
}