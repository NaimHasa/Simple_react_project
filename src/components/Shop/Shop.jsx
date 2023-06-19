import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/product';

const Shop = () => {

    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data));

    }, []);
    const AddToCart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart);
    }
    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(product => <Product
                        product={product}
                        key={product.id}
                        AddToCart={AddToCart}

                    ></Product>)
                }

            </div>
            <div className='product-cart'>
                <h4>Order Summmary</h4>
                <div className='product-info-total'>
                    <p>Selected Item: {cart.length}</p>
                    <p>Total Price: $250</p>
                    <p>Total Shipping Charge: $5</p>
                    <p>Tax: $2</p>
                    <p><h3>Grand Total: $1559</h3></p>
                </div>
            </div>
        </div>
    );
};

export default Shop;