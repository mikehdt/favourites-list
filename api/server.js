"use strict";

// Base setup
// Call the packages we need
import express from 'express';
import bodyParser from 'body-parser';

import { APIHandler } from './handlers/APIHandler';
import { ItemHandler } from './handlers/ItemHandler';
import { setupRoutes } from './Routes';

function start () {
    let app      = express(),
        router   = express.Router(),
        port = process.env.PORT || 8080,
        handlers = {
            api  : new APIHandler(),
            items: new ItemHandler()
        };

    // REGISTER OUR ROUTES
    // All of our routes will be prefixed with /api
    setupRoutes(router, handlers);

    // Configure app to use bodyParser), letting us get the data from a POST
    app
        .use(bodyParser.urlencoded({ extended: true }))
        .use(bodyParser.json())
        .use('/api', router)
        .listen(port);

    console.log('Serving at http://localhost:' + port + '/api');
}

start();