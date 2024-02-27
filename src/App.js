import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import ShoppingCart from './components/ShoppingCart';
import Checkout from './components/CheckOut.js';


import productsData from './data/products.json';


const App = () => {
    const [products, setProducts] = useState(productsData);
    const [cartItems, setCartItems] = useState([]);
    


    const addToCart = (product) => {
        setCartItems([...cartItems, product]);
    };

    const removeFromCart = (productId) => {
        const updatedCartItems = cartItems.filter(item => item.id !== productId);
        setCartItems(updatedCartItems);
    };

    const increaseQuantity = (productId) => {
        const updatedCartItems = cartItems.map(item =>
            item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
        );
        setCartItems(updatedCartItems);
    };

    const decreaseQuantity = (productId) => {
        const updatedCartItems = cartItems.map(item =>
            item.id === productId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
        );
        setCartItems(updatedCartItems);
    };

    const proceedToCheckout = () => {
        // Implement logic to navigate to checkout page
    };

    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/" exact>
                        <ProductList products={products} addToCart={addToCart} />
                    </Route>
                    <Route path="/product/:id">
                        <ProductDetail products={products} addToCart={addToCart} />
                    </Route>
                    <Route path="/cart">
                        <ShoppingCart
                            cartItems={cartItems}
                            removeFromCart={removeFromCart}
                            increaseQuantity={increaseQuantity}
                            decreaseQuantity={decreaseQuantity}
                            proceedToCheckout={proceedToCheckout}
                        />
                    </Route>
                    <Route path="/checkout">
                        <Checkout cartItems={cartItems} />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
