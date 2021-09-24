import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;


    let total = 0;
    for(const product of cart){
        total = total + product.price;
    }
    const shipping = 35;
    const tax = (total + shipping) *15;
    const grandTotal = total + shipping + tax;

    return (
        <div>
            <div className="cart-order">
            <h4>Order Summary</h4>
                <h5>Item Ordered: {props.cart.length}</h5>
            </div>
                <hr />
                <br />
                <div className="cart-price">
                    <p>price {total.toFixed(2)}</p>
                    <p>Shippong: {shipping}</p>
                    <p>Price including: {tax.toFixed(2)}</p>
                    <p className="cart-total"> Total Price: {grandTotal.toFixed(2)}</p>
                </div>
        </div>
    );
};

export default Cart;