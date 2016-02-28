let Item = require('../models/Item'),
    ItemHandler = function(){
        this.getItems   = getItems;
        this.getItem    = getItem;
        this.createItem = createItem;
        this.updateItem = updateItem;
        this.deleteItem = deleteItem;
    };

function getItems (req, res) {
    Item.find(function(err, Item){
        if (err) {
            res.send(err);
        }

        res.json(Item);
    });
}

function getItem (req, res) {
    Item.findById(req.params.item_id, function(err, item){
        if (err) {
            res.send(err);
        }

        res.json(item);
    })
}

function createItem (req, res) {
    var item = new Item();

    item.name = req.body.name;  // set the things name (comes from the request)

    // save the thing and check for errors
    item.save(function(err){
        if (err) {
            res.send(err);
        }

        res.json({ message: 'Item created!' });
    });
}

function updateItem (req, res) {
    // Not properly working yet...
    Item.findById(req.params.thing_id, function(err, thing){
        if (err) {
            res.send(err);
        }

        thing.name = req.body.name;

        // save the thing
        thing.save(function(err) {
            if (err) {
                res.send(err);
            }

            res.json({ message: 'Thing updated!' });
        });
    })
}

function deleteItem (req, res) {

}

module.exports = ItemHandler;