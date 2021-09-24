import React from 'react';
import './Product.css'
const Product = (props) => {
    console.log(props.product)
    const {name, img, price, stock, seller} = props.product;
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
            </div>
            
            
        </div>
    );
};

export default Product;