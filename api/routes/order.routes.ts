module.exports = (app) => {
    const orders = require('../controllers/order.controller');
    
    // Retrieve all Orders
    app.get('/orders', orders.findAll);

    // Find an order via status
    app.get('/orders/:orderStatus', orders.FindByStatus);
    
    // Create a new Order
    app.post('/orders', orders.createOne);
    
    // Delete a Order with orderID
    app.delete('/orders/:orderId', orders.deleteOne);
}