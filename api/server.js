'use strict';

// Base setup
// Call the packages we need
var express    = require('express'),
    app        = express(),
    bodyParser = require('body-parser');

var Things     = require('./models/things'),
    Favourites = require('./models/favourites');

// Configure app to use bodyParser()
// This will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

// Set up the router
var router = express.Router();

router.use(function(req, res, next) {
    // console.log('The API is working');
    // Ensure we go to the next route and don't stop here
    next();
});

// Test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'API version 1' });
});

// more routes for our API will happen here
// on routes that end in /things
// ----------------------------------------------------
router.route('/things')
    // create a thing (accessed at POST http://localhost:8080/api/things)
    .post(function(req, res){
        var thing = new Things();
        thing.name = req.body.name;  // set the things name (comes from the request)

        // save the thing and check for errors
        thing.save(function(err){
            if (err) {
                res.send(err);
            }

            res.json({ message: 'Thing created!' });
        });
    })

    // Find all things
    .get(function(req, res){
        Things.find(function(err, things) {
            if (err) {
                res.send(err);
            }

            res.json(things);
        });
    });
// ---

// on routes that end in /things/:thing_id
// ----------------------------------------------------
router.route('/things/:thing_id')
    // get the thing with that id (GET http://localhost:8080/api/things/:thing_id)
    .get(function(req, res){
        Things.findById(req.params.thing_id, function(err, thing){
            if (err) {
                res.send(err);
            }

            res.json(thing);
        })
    })

    // Update the thing with an id (PUT http://localhost:8080/api/things/:thing_id)
    .put(function(req, res){
        // Not properly working yet...
        Things.findById(req.params.thing_id, function(err, thing){
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
    })

    // Delete the thing with an id (DELETE http://localhost:8080/api/things/:thing_id)
    .delete(function(req, res) {
        Things.remove({
            id: req.params.thing_id
        }, function(err, thing) {
            if (err) {
                res.send(err);
            }

            res.json({ message: 'Successfully deleted thing' });
        });
    });
// ---

// REGISTER OUR ROUTES
// All of our routes will be prefixed with /api
app.use('/api', router);

// Start the server
app.listen(port);

console.log('Magic happens at http://localhost:' + port + '/api');