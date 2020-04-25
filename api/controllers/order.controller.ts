const Order = require('../models/order.model')

// Create a new Order
exports.createOne = (req, res) => {
    // Validate request
    if(
        !req.body.orderID || 
        !req.body.product_name || 
        !req.body.category || 
        !req.body.size || 
        !req.body.colour || 
        !req.body.status || 
        !req.body.customer_initials
    ) {
        return res.status(400).send({
            message: "Request does not contain all data needed to create a new order!"
        });
    }

    // Create an Order    
    const order = new Order({
        orderID: req.body.orderID,
        product_name: req.body.product_name,
        category: req.body.category,
        size: req.body.size,
        colour: req.body.colour,
        status: req.body.status,
        customer_initials: req.body.customer_initials
    });

    // Save Order in the database
    order.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occured :-("
        });
    });
};

// Retrieve all Orders
exports.findAll = (req, res) => {
    Order.find()
    .then(orders => {
        res.send(orders);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occured :-("
        });
    });
};

// Delete an order with orderID
exports.deleteOne = (req, res) => {
    // using mongoose method to find via ID and remove record
    console.log(req.params);
    console.log(req.params.orderId);
    const param = req.params.orderId;
    Order.deleteOne({ orderID: param }, function (err) {
        (err) ? console.log(err.message) : null;
        res.send({ message: 'Done :)' });
    });

};