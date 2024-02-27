import React from 'react';
import { Link } from 'react-router-dom';

const ProductList = ({ products, addToCart }) => {
    return (
        <div>
            <h2>Product List</h2>
            {products.map(product => (
                <div key={product.id}>
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <p>${product.price}</p>
                    <button onClick={() => addToCart(product)}>Add to Cart</button>
                    <Link to={`/product/${product.id}`}>View Details</Link>
                </div>
            ))}
        </div>
    );
}

export default ProductList;
