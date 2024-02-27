import React from 'react';

const ShoppingCart = ({ cartItems, removeFromCart, increaseQuantity, decreaseQuantity, proceedToCheckout }) => {
    return (
        <div>
            <h2>Shopping Cart</h2>
            {cartItems.map(item => (
                <div key={item.id}>
                    <h3>{item.name}</h3>
                    <p>Quantity: {item.quantity}</p>
                    <p>Total: ${item.price * item.quantity}</p>
                    <button onClick={() => removeFromCart(item.id)}>Remove</button>
                    <button onClick={() => increaseQuantity(item.id)}>+</button>
                    <button onClick={() => decreaseQuantity(item.id)}>-</button>
                </div>
            ))}
            <button onClick={proceedToCheckout}>Proceed to Checkout</button>
        </div>
    );
}

export default ShoppingCart;
