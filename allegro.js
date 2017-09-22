// ==UserScript==
// @name         domyslna kategoria allegro
// @namespace    muskala
// @version      0.2
// @description  domyslna kategoria allegro
// @author       Marcin Muska³a
// @include      /.*allegro\.pl.*/
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

//@TODO: give a shit