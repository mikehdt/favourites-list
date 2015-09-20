var app = app || {};

$(function(){
    'use strict';

    // Implemente FastClick to remove 300ms tap delay
    FastClick.attach(document.body);

    // Bootstrap the app view
    new app.AppView();
});