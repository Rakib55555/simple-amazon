import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import './Product.css'
const Product = (props) => {
    // console.log(props)
    const {name, img, price, stock, seller} = props.product;
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
            <button onClick={() => props.handleAddToCart(props.product)} className="add-cart-btn">{element} add to cart</button>
            </div>
            
            
        </div>
    );
};

export default Product;