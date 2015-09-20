var app = app || {};

(function($, Backbone, _){
    'use strict';

    app.PropertyModel = Backbone.Model.extend({
        defaults: {
            list:      '',
            id:        '-1',
            agency:    {},
            price:     'No price set',
            mainImage: '',
            saved:     false
        },

        initialize: function (model) {
            // Sanity check for colours, 7 characters for "#RRGGBB"
            // (could also account for 4 character "#RGB", if we wanted...)
            if (model.agency.brandingColors.primary.length !== 7) {
                // Just doing a check against this so browsers which don't
                // support warn won't completely choke up at this point...
                if (console.warn) {
                    console.warn('Property ID', model.id, 'has an invalid primary hex colour (' + model.agency.brandingColors.primary + ')');
                }

                // Let's assume plain white instead
                model.agency.brandingColors.primary = '#ffffff';
            }

            // Update the parent collection type
            if (this.collection && this.collection.getCollectionType) {
                this.set('list', this.collection.getCollectionType());
            }
        },

        setSaved: function () {
            this.set('saved', true);
        },

        removeSaved: function () {
            this.set('saved', false);
        }
    });
})(jQuery, Backbone, _);