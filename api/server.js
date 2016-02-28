'use strict';

// Base setup
// Call the packages we need
let express    = require('express'),
    bodyParser = require('body-parser'),

    APIHandler  = require('./handlers/APIHandler'),
    ItemHandler = require('./handlers/ItemHandler'),
    routes      = require('./Routes'),

    app      = express(),
    router   = express.Router(),
    handlers = {
        api: new APIHandler(),
        items: new ItemHandler()
    };

function start () {
    let port = process.env.PORT || 8080;

    // REGISTER OUR ROUTES
    // All of our routes will be prefixed with /api
    routes.setupRoutes(router, handlers);

    // Configure app to use bodyParser), letting us get the data from a POST
    app
        .use(bodyParser.urlencoded({ extended: true }))
        .use(bodyParser.json())
        .use('/api', router)
        .listen(port);

    console.log('Serving at http://localhost:' + port + '/api');
}

start();