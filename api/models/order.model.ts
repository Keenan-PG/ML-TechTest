
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    _id:  Object,
    orderID: {
        type: Number,
        required: true,
        unique: true,
    },
    img_url : {
        type: String,
        required: true
    },
    product_name : {
        type: String,
        required: true
    },
    category : {
        type: String,
        required: true
    },
    size : {
        type: Number,
        required: true
    },
    colour : {
        type: String,
        required: true
    },
    status : {
        type: String,
        required: true
    },
    customer_initials :  {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Order', OrderSchema, 'Orders');