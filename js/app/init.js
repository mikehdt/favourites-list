var app = app || {};

$(function(){
    'use strict';

    // Implemente FastClick to remove 300ms tap delay
    FastClick.attach(document.body);

    // Allow iOS to use :active styles (just in case)
    document.addEventListener('touchstart', function(){}, true);

    // Bootstrap the app view
    new app.AppView();
});