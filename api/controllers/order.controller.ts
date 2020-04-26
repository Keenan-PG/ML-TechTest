const Order = require('../models/order.model')

// Create a new Order
exports.createOne = (req, res) => {
    // Validate request
    if(
        !req.body.orderID || 
        !req.body.img_url || 
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
        img_url: req.body.img_url,
        product_name: req.body.product_name,
        category: req.body.category,
        size: req.body.size,
        colour: req.body.colour,
        status: req.body.status,
        customer_initials: req.body.customer_initials
    });

    // Save Order in the database if validation passes
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
        if (!orders) {
            res.status(404).send({
                message: "No orders!"
            });
        }
        // if no errors - send orders as response 
        res.send(orders);
        
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occured :-("
        });
    });
};

// Delete an order with orderID
exports.deleteOne = (req, res) => {
    // storing parameter (cleaner code)
    const param = req.params.orderId;

    // using .deleteOne instead of .findByIdAndRemove as i've created my own unique index in the DB (orderID)
    Order.deleteOne({ orderID: param }).then(order => {
        // custom validation to match response behaviour of .deleteOne
        if(order.deletedCount === 0) {
            return res.status(404).send({
                message: "Order not found with id " + param
            });
        }
        // no response at all
        if(!order) {
            return res.status(500).send({
                message: "Something went wrong :("
            });
        }
        
        // send successful response if there's no errors and deletedCount isn't 0
        if (order.deletedCount) {
            res.send({ 
                message: `Deleted order number ${param} :)` 
            });
        }
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Order not found with id " + param
            });                
        }
        return res.status(500).send({
            message: "Could not order note with id " + param
        });
    });

};