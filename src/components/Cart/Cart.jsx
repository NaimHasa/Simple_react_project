import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {
    console.log(cart)

    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping * product.quantity;

    }

    const tax = parseFloat((total * 0.1).toFixed(2));

    const grandTotal = (total + shipping + tax);




    return (
        <div className='cart'>
            <h4>Order Summmary</h4>
            <div className='total-info'>
                <p>Seleted Item: {quantity}</p>
                <p>Total Price: ${total}</p>
                <p>Total Shipping Charges: ${shipping}</p>
                <p>Tax: ${tax}</p>
                <h3>Grand Total: ${grandTotal}</h3>
            </div>

        </div>
    );
};

export default Cart;