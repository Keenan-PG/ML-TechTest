import React from 'react';
// components
import OrderCard from './OrderCard';

const OrderCardList = (props) => {

    /* Render */
    
    return props.orders.map((order, i) => {
        return (
            <OrderCard key={order.orderID} order={order} />
        );
    })
}

export default OrderCardList;