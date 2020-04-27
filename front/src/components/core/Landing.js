import React, { useState, useEffect, Component } from 'react';
// comps
import OrderCardList from '../orders/OrderCardList'
import Pagination from '../pagination/Pagination';
// npm 
import axios from 'axios';

const Landing = () => {

    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    // setting defaults into component state 
    const [ordersPerPage] = useState(4);
  
    useEffect(() => {
        // async function 
        const fetchOrders = async () => {
            setLoading(true);
            const res = await axios.get('http://localhost:8080/orders');
            setOrders(res.data);
            setLoading(false);
        };
        fetchOrders(); // invoking itself within hook 
    }, []);
  
    // Get current orders
    const indexOfLastOrder = currentPage * ordersPerPage;
    const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
    const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);
  
    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
  
    return (
      <div>
        <div className="layout-Header">
            
        </div>
        <OrderCardList orders={currentOrders} loading={loading} className="layout-OrderCards" />
        <Pagination
          postsPerPage={ordersPerPage}
          totalPosts={orders.length}
          paginate={paginate}
          className="layout-Paging"
        />
      </div>
    );
  };

export default Landing;