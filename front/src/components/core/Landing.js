import React, { Component } from 'react';
// comps
import OrderCardList from '../orders/OrderCardList'
import Pagination from '../pagination/Pagination';
// npm 
import axios from 'axios';

class Landing extends Component {

    state = { allOrders: [], currentOrders: [], currentPage: null, totalPages: null }

    componentDidMount() {
        axios({
            method: "get", 
            url:"http://localhost:8080/orders"
        }).then(response => {
            // accessing data property from response object (array of orders)
            return response.data;
        }).then(allOrders => {
            // fetched reviews are stored in component state
            this.setState({ allOrders });
        });
    }

    onPageChanged = data => {
        const { allOrders } = this.state;
        const { currentPage, totalPages, pageLimit } = data;

        const offset = (currentPage - 1) * pageLimit;
        const currentOrders = allOrders.slice(offset, offset + pageLimit);

        this.setState({ currentPage, currentOrders, totalPages });
    }

    render() {
        return (
            <div>
                <OrderCardList />
                <Pagination totalRecords={4}/>
            </div>
        );
    }
}

export default Landing;