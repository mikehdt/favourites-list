var app = app || {};

(function($, Backbone, _){
    'use strict';

    var ResultsCollection = Backbone.Collection.extend({
        model: app.PropertyModel,

        getCollectionType: function () {
            return 'results';
        }
    });

    app.resultsCollection = new ResultsCollection();
})(jQuery, Backbone, _);