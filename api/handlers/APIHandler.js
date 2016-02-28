let APIHandler = function() {
    this.defaultRoute = handleDefaultRoute;
};

function handleDefaultRoute (req, res) {
    res.json({ message: 'API version 1' });
}

module.exports = APIHandler;