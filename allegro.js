// ==UserScript==
// @name         domyslna kategoria allegro
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  domyslna kategoria allegro
// @author       Marcin Muska³a
// @include      /.*allegro.*/
// @grant        none
// @run-at document-start
// ==/UserScript==

(function() {
    var expectedOrder = 'order=t';
    var orderRegex = /order\=\w/;
    var url = window.location.href;
    if (orderRegex.test(url)) {
        if (url.indexOf(expectedOrder) === -1) {
            window.location.href = url.replace(orderRegex, expectedOrder);
        }
    } else if (url.indexOf('allegro.pl/kategoria') !== -1) {
        window.location.href = url + '?' + expectedOrder;
    }
})();