"use strict";

import { ItemModel, ItemsModel } from '../models/Item';

ItemsModel.addFakeData();

let ItemHandler = function () {
        this.getItems   = getItems;
        this.getItem    = getItem;
        this.createItem = createItem;
        this.updateItem = updateItem;
        this.deleteItem = deleteItem;
    };

function getItems (req, res) {
    ItemsModel.find(function(err, items){
        if (err) {
            res.send(err);
        }

        res.json(items);
    });
}

function getItem (req, res) {
    ItemsModel.findById(req.params.item_id, function(err, item){
        if (err) {
            res.send(err);
        }

        res.json(item);
    })
}

function createItem (req, res) {
    var item = new ItemModel({
        name: req.body.name
    });

    // save the item and check for errors
    ItemsModel.save(item, function(err){
        if (err) {
            res.send(err);
        }

        res.json({ message: 'Item created!' });
    });
}

function updateItem (req, res) {
    // Not properly working yet...
    ItemsModel.findById(req.params.item_id, function(err, item){
        if (err) {
            res.send(err);
        }

        item.name = req.body.name;

        // Update the item
        // item.save(function(err) {
        //     if (err) {
        //         res.send(err);
        //     }

        //     res.json({ message: 'Item updated!' });
        // });
    })
}

function deleteItem (req, res) {
    ItemsModel.remove({
        id: req.params.item_id
    }, function(err, item) {
        if (err) {
            res.send(err);
        }

        res.json({ message: 'Successfully deleted' });
    });
}

export { ItemHandler };