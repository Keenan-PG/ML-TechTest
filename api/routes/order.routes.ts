module.exports = (app) => {
    const orders = require('../controllers/order.controller');
    
    // Create a new Order
    app.post('/orders', orders.createOne);
    
    // Retrieve all Orders
    app.get('/orders', orders.findAll);
    
    // Delete a Note with noteId
    app.delete('/orders/:orderId', orders.deleteOne);


    // potential additions:
    
    // Update an Order with orderID
    // app.put('/notes/:orderId', orders.update);

    // Retrieve a list of Orders with status - depends whether I want front end or back end to do heavy lifting on that? can just 'Disable' on FE? Revisit.
    // app.get('/notes/:orderStatus', orders.filterByStatus);
}