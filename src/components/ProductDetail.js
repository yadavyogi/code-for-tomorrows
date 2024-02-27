import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = ({ products, addToCart }) => {
    const { id } = useParams();
    const product = products.find(p => p.id === parseInt(id));

    return (
        <div>
            <h2>Product Detail</h2>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
    );
}

export default ProductDetail;
