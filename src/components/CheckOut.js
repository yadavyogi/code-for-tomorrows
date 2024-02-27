import React, { useState } from 'react';

const CheckOut = ({ cartItems }) => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        address: '',
        city: '',
        country: '',
        zip: '',
        cardNumber: '',
        expiryDate: '',
        cvv: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Implement logic to submit the form data (e.g., send it to a server)
        console.log(formData);
    };

    return (
        <div>
            <h2>Checkout</h2>
            <p>Number of items: {cartItems.length}</p>
            <form onSubmit={handleSubmit}>
                <label>
                    Full Name:
                    <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" value={formData.email} onChange={handleChange} />
                </label>
                <label>
                    Address:
                    <input type="text" name="address" value={formData.address} onChange={handleChange} />
                </label>
                <label>
                    City:
                    <input type="text" name="city" value={formData.city} onChange={handleChange} />
                </label>
                <label>
                    Country:
                    <input type="text" name="country" value={formData.country} onChange={handleChange} />
                </label>
                <label>
                    ZIP Code:
                    <input type="text" name="zip" value={formData.zip} onChange={handleChange} />
                </label>
                <label>
                    Card Number:
                    <input type="text" name="cardNumber" value={formData.cardNumber} onChange={handleChange} />
                </label>
                <label>
                    Expiry Date:
                    <input type="text" name="expiryDate" value={formData.expiryDate} onChange={handleChange} />
                </label>
                <label>
                    CVV:
                    <input type="text" name="cvv" value={formData.cvv} onChange={handleChange} />
                </label>
                <button type="submit">Submit Order</button>
            </form>
        </div>
    );
}

export default CheckOut;
