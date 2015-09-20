var app = app || {};

(function($, Backbone, _){
    'use strict';

    var SavedCollection = Backbone.Collection.extend({
        model: app.PropertyModel,

        getCollectionType: function () {
            return 'saved';
        }
    });

    app.savedCollection = new SavedCollection();
})(jQuery, Backbone, _);