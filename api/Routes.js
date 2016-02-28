function setupRoutes (router, handlers) {
    router.get('/', handlers.api.defaultRoute);

    router.get ('/items', handlers.items.getItems);
    router.post('/items', handlers.items.createItem);
    router.get   ('/items/:item_id', handlers.items.getItem);
    router.put   ('/items/:item_id', handlers.items.updateItem);
    router.delete('/items/:item_id', handlers.items.deleteItem);
}

exports.setupRoutes = setupRoutes;