import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import './Product.css'
import Rating from 'react-rating';
const Product = (props) => {
    
    const {name, img, price, stock, seller, star} = props.product;
    const element = <FontAwesomeIcon icon={faShoppingCart} />

    return (
        <div className="product">
            <div>
            <img src={img} alt="" />
            </div>

            <div className="product-info">
            <h3>{name}</h3>
            <p><small>Brand: {seller}</small></p>
            <p>Price: {price}</p>
            <p><small>only {stock} left in stock</small></p>
            <Rating 
                initialRating={star}
                emptySymbol="far fa-star star-color"
                fullSymbol="fas fa-star star-color"
                readonly></Rating>
            <br />
            <button onClick={() => props.handleAddToCart(props.product)} className="add-cart-btn">{element} add to cart</button>
            </div>
            
            
        </div>
    );
};

export default Product;