// ==UserScript==
// @name         domyslna kategoria allegro
// @namespace    muskala
// @version      0.2.7
// @description  domyslna kategoria allegro
// @author       Marcin Muskala
// @match        *://allegro.pl/*
// @grant        none
// @run-at document-start
// ==/UserScript==

(function() {
    var expectedOrder = 'order=t';
    var orderRegex = /order\=[a-zA-Z]{1,2}/;
    var url = window.location.href;
    if (orderRegex.test(url)) {
        if (url.indexOf(expectedOrder) === -1) {
            window.location.href = url.replace(orderRegex, expectedOrder);
        }
    } else if (url.indexOf('allegro.pl/kategoria') !== -1 || url.indexOf('allegro.pl/listing') !== -1) {
        var separator = url.indexOf('?') === -1 ? '?' : '&';
        window.location.href = url + separator + expectedOrder;
    }
})();