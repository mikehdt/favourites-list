'use strict';

function Favourites () {
	this.name = '';

	this.save = function (callback) {
		if (this.name === '') {
			// Not a new favourite
			callback('No new favourite specified');
			return;
		}

		Favourites.favouriteData.push({
			name: this.name
		});

		// I guess it's okay?
		// save save save
		callback(false);
	};
}

// Static data
Favourites.favouriteData = [{
		name: 'Derpy'
	}, {
		name: 'Larpy'
	}, {
		name: 'Burpy'
	}];

// Static methods
Favourites.find = function (callback) {
	callback(false, this.favouriteData);
}

Favourites.findById = function (id, callback) {
	// Zero offset array, but we'll pretend ids start at 1
	if (Favourites.favouriteData[id - 1]) {
		callback(false, Favourites.favouriteData[id - 1]);
		return;
	}

	callback('Could not find favourite with ID '+ id);
}

Favourites.remove = function (requestObj, callback) {
	// Zero offset array, but we'll pretend ids start at 1
	if (Favourites.favouriteData[requestObj.id - 1]) {
		Favourites.favouriteData.splice(requestObj.id - 1, 1);
		callback(false);
		return;
	}

	callback('Could not delete favourite with ID '+ requestObj.id);
}

// NodeJS export
module.exports = Favourites;