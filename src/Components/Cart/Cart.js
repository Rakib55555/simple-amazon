import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;


    let totalQuantity = 0;
    let total = 0;

    for(const product of cart){
        
        if(!product.quantity){
            product.quantity = 1;
        }

        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }

    const shipping = total > 0 ? 35 : 0;
    const tax = (total + shipping) *0.15;
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