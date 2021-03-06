import React from 'react';
import { Link } from 'react-router-dom';
import './product.css'

const Product = (props) => {
    // console.log(props)
    const {img, name, seller, price, stock, key} = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt=""/>
            </div>
            <div>
                <h4 className="product-name" ><Link to={"/product/"+ key}>{name}</Link> </h4>
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                <p><small>only {stock} left</small></p>
                { props.showAddToCart && <button onClick={()=> props.handleAddProduct(props.product)} className="main-button">add to cart</button>}
            </div>
        </div>
    );
};

export default Product;