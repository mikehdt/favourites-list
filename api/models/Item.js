"use strict";

// Need to refactor into an ES2015 class, but let's get this simpler version
// running first, eh?
class ItemModel {
    constructor(newItem) {
        newItem = newItem || {};

        // Whilst there are getters and setters in ES2015, I'm not a huge fan
        // of the way they work... when you return a class, you end up with
        // the internal property names instead of their exposed ones. So...
        // going to avoid that for now.

        // This is not going to be truly unique (there's still a miniscule
        // chance it could collide), but it's good _enough_ for demo purposes
        this.id = (newItem.id) ? newItem.id : 'item-'+ ((new Date()).getTime() + Math.floor(Math.random() * 100));
        this.name = (newItem.name) ? newItem.name : null;
        this.logo = (newItem.logo) ? newItem.logo : null;
        this.bgColor = (newItem.bgColor) ? newItem.bgColor : null;
        this.price = (newItem.price) ? newItem.price : null;
        this.imageUrl = (newItem.imageUrl) ? newItem.imageUrl : null;
    }

    changeName (value) {
        if (typeof value !== 'string') {
            throw new Error('"name" must be a string.');
        }

        this.name = value;
    }

    changeLogo (value) {
        if (value !== null && typeof value !== 'string') {
            throw new Error('"logo" must be a string.');
        }

        this.logo = value;
    }

    changeBgColor (value) {
        if (value !== null && typeof value !== 'string') {
            throw new Error('"bgColor" must be a string.');
        }

        this.bgColor = value;
    }

    changePrice (value) {
        if (value !== null && typeof value !== 'number') {
            throw new Error('"price" must be a number.');
        }

        this.price = value;
    }

    changeImageUrl (value) {
        if (value !== null && typeof value !== 'string') {
            throw new Error('"imageUrl" must be a string.');
        }

        this.imageUrl = value;
    }
}

class ItemsModel {
    static save (newItem, callback) {
        if (newItem.name === null) {
            // Not a new item
            callback('Invalid new item specified (no name)');
            return;
        }

        this.itemData.push(newItem);

        // I guess it's okay?
        // save save save
        callback(false);
    }

    // Static methods
    static find (callback) {
        callback(false, this.itemData);
    }

    static findById (id, callback) {
        // Zero offset array, but we'll pretend ids start at 1
        if (ItemModel.itemData[id - 1]) {
            callback(false, ItemModel.itemData[id - 1]);
            return;
        }

        callback('Could not find item with ID '+ id);
    }

    static remove (requestObj, callback) {
        // Zero offset array, but we'll pretend ids start at 1
        if (ItemModel.itemData[requestObj.id - 1]) {
            ItemModel.itemData.splice(requestObj.id - 1, 1);
            callback(false);
            return;
        }

        callback('Could not delete item with ID '+ requestObj.id);
    }

    // Static data, faked for now
    static addFakeData () {
        this.itemData = [
            new ItemModel({
                id: 'item-1',
                name: 'Topsy'
            }),
            new ItemModel({
                id: 'item-2',
                name: 'Turvy'
            }),
            new ItemModel({
                id: 'item-3',
                name: 'Wacky'
            })
        ];
    }
}

export { ItemModel, ItemsModel };