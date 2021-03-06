import React, { useState, useEffect } from 'react';
// comps
import FilterOrders from '../orders/FilterOrders'
import OrderCardList from '../orders/OrderCardList'
import Pagination from '../pagination/Pagination';
// npm 
import axios from 'axios';

const Dashboard = () => {
    // getting and setting Orders
    const [orders, setOrders] = useState([]);
    // getting and setting Orders
    const [orderFilter, setOrderFilter] = useState("");
    // setting loading defaults into component state 
    const [loading, setLoading] = useState(false);
    // setting paging defaults in state
    const [currentPage, setCurrentPage] = useState(1);
    const [ordersPerPage] = useState(4);
  
    // Effect hook - API request to orders 
    useEffect(() => {
        // async function 
        const fetchOrders = async () => {
            setLoading(true);
            
            // conditional to catch filter
            let url;

            if (orderFilter) {
                url = "http://localhost:8080/orders/" + orderFilter;
                console.log("url" + url);
            } else {
                url = "http://localhost:8080/orders/";
            }

            // sending request
            const res = await axios.get(url);

            // setting order list
            setOrders(res.data);
            setLoading(false);
        };
        fetchOrders(); // invoking within hook to get return instantly
    });

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

    // setting orderFilter state
    const filterOrders = (filter) => {
        switch (filter) {
            case 'Ready':
                console.log('Ready');
                setOrderFilter("Ready");
                break;
            case 'Coming':
                console.log('Coming');
                setOrderFilter("Coming");
                break;
            case 'Queued':
                console.log('Queued');
                setOrderFilter("Queued");
                break;
            case 'Out':
                console.log('Out');
                setOrderFilter("Out");
                break;
            default:
                console.log('No valid status passed to orderFilter, cleaning state...');
                setOrderFilter("");
        }
    }
  
    return (
      <div>
        <div className="layout-Header">
            
            {/* <div className="add-Order">
                <button className="btn">
                    Add New <span>+</span>
                </button>
            </div>  */}
           
            <FilterOrders filterOrders={filterOrders} />
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

export default Dashboard;