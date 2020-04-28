import React from 'react';

const FilterOrders = ({ filterOrders }) => {

  return (
    <div className="filter-Orders">
        <div className="order-filter" onClick={() => filterOrders("Ready")}>
            <span className="dot ready" />
            Ready to Try
        </div>
        <div className="order-filter" onClick={() => filterOrders("Coming")}>
            <span className="dot coming" />
            On the way
        </div>
        <div className="order-filter" onClick={() => filterOrders("Queued")}>
            <span className="dot queued" />
            In the queue
        </div>
        <div className="order-filter" onClick={() => filterOrders("Out")}>
            <span className="dot out" />
            Out of stock
        </div>
    </div>
  );

};

export default FilterOrders;