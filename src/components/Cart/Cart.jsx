import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {
    return (
        <div className='cart'>
            <h4>Order Summmary</h4>
            <p>Seleted Item: {cart.length}</p>

        </div>
    );
};

export default Cart;