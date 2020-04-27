import React from 'react';
// components
import OrderCard from './OrderCard';

const OrderCardList = (props) => {

    const {
        orderID = null,
        img_url = '',
        product_name = '',
        category = '',
        size = null,
        colour = '',
        status = '',
        customer_initials = ''
    } = props.orders || {};

    /* Render */
    
    return props.orders.map((order, i) => {
        return (
            <OrderCard key={order.orderID} order={order} />
        );
    })
}

export default OrderCardList;