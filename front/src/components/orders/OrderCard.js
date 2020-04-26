import React from 'react';
import PropTypes from 'prop-types';

// setting prop types 
OrderCard.propTypes = {
    order: PropTypes.shape({
        orderID: PropTypes.number.isRequired,
        product_name: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        size: PropTypes.number.isRequired,
        colour: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
        customer_initials: PropTypes.string.isRequired
    }).isRequired
};

const OrderCard = (props) => {
    // mapping given props to order object and setting defaults
    const {
        orderID = null,
        product_name = '',
        category = '',
        size = null,
        colour = '',
        status = '',
        customer_initials = ''
    } = props.order || {};

    return (
        <div className="col-sm-6 col-md-4 order-card">
            <div>
                { orderID }
            </div>
            <div>
                { product_name }
            </div>
            <div>
                { category }
            </div>
            <div>
                { size }
            </div>
            <div>
                { colour }
            </div>
            <div>
                { status }
            </div>
            <div>
                { customer_initials }
            </div>
        </div>
    )
}

export default OrderCard;