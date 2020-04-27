import React, { useState, useEffect, Component } from 'react';
// comps
import OrderCardList from '../orders/OrderCardList'
import Pagination from '../pagination/Pagination';
// npm 
import axios from 'axios';

const Landing = () => {
    const [orders, setOrders] = useState([]);
    // setting defaults into component state 
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [ordersPerPage] = useState(4);
  
    useEffect(() => {
        // async function 
        const fetchOrders = async () => {
            setLoading(true);
            const res = await axios.get('http://localhost:8080/orders');
            setOrders(res.data);
            setLoading(false);
        };
        fetchOrders(); // invoking within hook to get return
    }, []);

    // Get current orders
    const indexOfLastOrder = currentPage * ordersPerPage;
    const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
    const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);
  
    // Change page
    const paginate = (pageNumber, currentPage) => {
        // remove is-active class from previous page
        document.getElementById(currentPage).classList.remove("is-active");
        // set new current page (and change page)
        setCurrentPage(pageNumber);
        // add is-active class to dot which belongs to new page 
        document.getElementById(pageNumber).classList.add("is-active");
    } 
  
    return (
      <div>
        <div className="layout-Header">
            {/* 
            <div className="add-Order">
                <button className="btn">
                    Add New <span>+</span>
                </button>
            </div> 
            */}
            <div className="filter-Orders">
                <div className="order-filter">
                    <span className="dot ready" />
                    Ready to Try
                </div>
                <div className="order-filter">
                    <span className="dot coming" />
                    On the way
                </div>
                <div className="order-filter">
                    <span className="dot queued" />
                    In the queue
                </div>
                <div className="order-filter">
                    <span className="dot out" />
                    Out of stock
                </div>
            </div>
        </div>
        <OrderCardList orders={currentOrders} loading={loading} className="layout-OrderCards" />
        <Pagination
          currentPage={currentPage}
          postsPerPage={ordersPerPage}
          totalPosts={orders.length}
          paginate={paginate}
          className="layout-Paging"
        />
      </div>
    );
  };

export default Landing;