'use strict';

// Need to refactor into an ES2015 class, but let's get this simpler version
// running first, eh?
function ItemModel (...args) {
    let newItem = args[0] || {};

    this.name = (newItem.name) ? newItem.name : null;

    this.save = function (callback) {
        if (this.name === null) {
            // Not a new item
            callback('No new item specified');
            return;
        }

        ItemModel.itemData.push({
            name: this.name
        });

        // I guess it's okay?
        // save save save
        callback(false);
    };
}

// Static data
ItemModel.itemData = [
    {
        name: 'Topsy'
    }, {
        name: 'Turvy'
    }, {
        name: 'Wacky'
    }
];

// Static methods
ItemModel.find = function (callback) {
    callback(false, this.itemData);
}

ItemModel.findById = function (id, callback) {
    // Zero offset array, but we'll pretend ids start at 1
    if (ItemModel.itemData[id - 1]) {
        callback(false, ItemModel.itemData[id - 1]);
        return;
    }

    callback('Could not find item with ID '+ id);
}

ItemModel.remove = function (requestObj, callback) {
    // Zero offset array, but we'll pretend ids start at 1
    if (ItemModel.itemData[requestObj.id - 1]) {
        ItemModel.itemData.splice(requestObj.id - 1, 1);
        callback(false);
        return;
    }

    callback('Could not delete item with ID '+ requestObj.id);
}

// NodeJS export
module.exports = ItemModel;