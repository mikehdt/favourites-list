'use strict';

let APIHandler = function () {
    this.defaultRoute = handleDefaultRoute;
};

function handleDefaultRoute (req, res) {
    res.json({
        message: 'API running',
        version: '1'
    });
}

export { APIHandler };