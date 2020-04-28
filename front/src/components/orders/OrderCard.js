import React from 'react';
import PropTypes from 'prop-types';

const OrderCard = (props) => {
    // mapping given props to order object and setting defaults
    const {
        img_url = '',
        product_name = '',
        category = '',
        size = null,
        colour = '',
        status = '',
        customer_initials = ''
    } = props.order || {};

    return (
        <div className="order-card">
            <div className="order-status">
                <div className={status}>&nbsp;</div>
            </div>
            <div className="order-card-inner">
                <div className="order-img-name-group">    
                    <div className="order-img">
                        <img src={ img_url } alt={ product_name + " Image" }/>
                    </div>
                    <div className="order-product-name">
                        { product_name }
                    </div>
                </div>
                <div className="order-category">
                    Category:<br/>
                    <span> { category }</span>
                </div>
                <div className="order-size">
                    Size:<br/>
                    <span> UK { size }</span>
                </div>
                <div className="order-colour">
                    Colour:<br/>
                    <span> { colour }</span> 
                </div>
                <div className="order-customer-initials">
                    { customer_initials }
                </div>
            </div>
        </div>
    )
}

// setting prop types 
OrderCard.propTypes = {
    order: PropTypes.shape({
        img_url: PropTypes.string.isRequired,
        product_name: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        size: PropTypes.number.isRequired,
        colour: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
        customer_initials: PropTypes.string.isRequired
    }).isRequired
};

export default OrderCard;