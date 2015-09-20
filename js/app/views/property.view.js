var app = app || {};

(function($, Backbone, _){
    'use strict';

    app.PropertyView = Backbone.View.extend({
        tagName:   'li',
        className: 'property',

        events: {
            'click .property__item': 'handleClick'
        },

        template: _.template($('#tpl__property').html()),

        initialize: function (options) {
            this.options = _.extend({}, this, options || {});

            this.listenTo(this.model, 'change',  this.render);
            this.listenTo(this.model, 'destroy', this.remove);
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));

            return this;
        },

        handleClick: function (e) {
            e.preventDefault();

            var modelId = this.model.get('id'),
                modelList = this.model.get('list');

            // Attempted workaround for removing hovered state
            this.$el.blur();

            if (modelList === 'results') {
                this.trigger('saved:add', this.model);
            }
            else if (modelList === 'saved') {
                this.trigger('saved:remove', this.model, this);

                // Remove this view's model from the collection
                app.savedCollection.remove([ modelId ]);

                // Now we need to remove the view item
                this.stopListening();
                this.remove();
            }
        }
    });
})(jQuery, Backbone, _);