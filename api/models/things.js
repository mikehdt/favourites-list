'use strict';

function ThingSchema () {
	this.name = '';

	this.save = function (callback) {
		if (this.name === '') {
			// Not a new thing
			callback('No new thing specified');
			return;
		}

		ThingSchema.thingData.push({
			name: this.name
		});

		// I guess it's okay?
		// save save save
		callback(false);
	};
}

// Static data
ThingSchema.thingData = [{
		name: 'Derpy'
	}, {
		name: 'Larpy'
	}, {
		name: 'Burpy'
	}];

// Static methods
ThingSchema.find = function (callback) {
	callback(false, this.thingData);
}

ThingSchema.findById = function (id, callback) {
	// Zero offset array, but we'll pretend ids start at 1
	if (ThingSchema.thingData[id - 1]) {
		callback(false, ThingSchema.thingData[id - 1]);
		return;
	}

	callback('Could not find thing with ID '+ id);
}

ThingSchema.remove = function (requestObj, callback) {
	// Zero offset array, but we'll pretend ids start at 1
	if (ThingSchema.thingData[requestObj.id - 1]) {
		ThingSchema.thingData.splice(requestObj.id - 1, 1);
		callback(false);
		return;
	}

	callback('Could not delete thing with ID '+ requestObj.id);
}

// NodeJS export
module.exports = ThingSchema;