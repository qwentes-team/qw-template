var Util = (function() {

    function element(selector) {
        return document.querySelector(selector);
    }

    function elements(selectors) {
        return document.querySelectorAll(selectors);
    }

    function create(elem) {
        return document.createElement(elem)
    }

    return {
        el: element,
        els: elements,
        create: create
    }
})();

module.exports = Util;