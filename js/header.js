var Util = require('./util.js');
var Header = (function() {
    Util.el('.navbar').addEventListener('click', toggleMenu);

    function toggleMenu() {
        this.classList.toggle('open-menu');
    }
})();

module.exports = Header;