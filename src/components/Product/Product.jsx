
import React from 'react';
import './Product.css';

const Product = ({ product, AddToCart }) => {
    // const { product, AddToCart } = props;
    // console.log(props);

    const { name, img, price, ratings, seller } = product;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h4>Name: {name.slice(0, 20)}...</h4>
                <h5>Price: ${price}</h5>
                <br />
                <p><small>Manufacturer: {seller}</small></p>
                <p><small>Ratings: {ratings}</small></p>
            </div>
            <button onClick={() => AddToCart(product)} className='btn-cart'><p>Add To Cart</p></button>
        </div>

    );
};

export default Product;