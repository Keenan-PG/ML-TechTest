import React, { Component } from 'react';
// components
import OrderCard from './OrderCard';
// npm 
import axios from 'axios';

class OrderCardList extends Component {
    constructor() {
        super();
    
        // initialize state(s) of comp
        this.state = {
            orders: []
        }
      }
    
    /* Lifecycle method(s) */
    
    // componentDidMount() lifecycle method to call api upon component rendering

    componentDidMount() {
        // get request to endpoint
        axios({
            method: "get", 
            url:"http://localhost:8080/orders"
        }).then(response => {
            // accessing data property from response object (array of orders)
            return response.data;
        }).then(orders => {
            // fetched reviews are stored in component state
            this.setState({ orders });
        });
    }  

    /* Render */
    
    render() {
        return this.state.orders.map((order, i) => {
            return (
                <OrderCard key={order.orderID} order={order} />
            );
        })
    }
}

export default OrderCardList;