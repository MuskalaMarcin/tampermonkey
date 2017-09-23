// ==UserScript==
// @name         odleglosc olx
// @namespace    muskala
// @version      0.2.1
// @description  odleglosc olx
// @author       Marcin Muskala
// @match        *://olx.pl/*
// @grant        none
// ==/UserScript==

$(document).ready(function() {
    var multiplier = 4;

    $('.dist').each(function() {
        var $el = $(this);
        var value = $el.find('.value').text();
        $el.html($el.html().replace(new RegExp(value, 'g'), value * multiplier));
   });
});