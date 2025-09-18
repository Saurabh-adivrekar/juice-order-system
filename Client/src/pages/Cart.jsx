import React, { useState, useEffect } from 'react';
import './Cart.css'; // Don't forget to create this CSS file!

// Import your product images
import lemon from '../assets/lemon.jpg';
import pineapple from '../assets/pineapple.jpg';
import kokum from '../assets/kokum.jpg';
import mango from '../assets/mango.jpg'; // <-- Ensure mango is imported

function Cart() {
  // Placeholder cart items data
  // In a real app, this would come from global state (Context API, Redux) or local storage
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Lemon Magic',
      price: 120,
      quantity: 1,
      image: lemon,
    },
    {
      id: 2,
      name: 'Orange Magic', // Name remains Orange Magic
      price: 130,
      quantity: 2,
      image: mango, // <--- CHANGED THIS LINE TO USE MANGO.JPG
    },
    {
      id: 3,
      name: 'Pineapple Magic',
      price: 140,
      quantity: 1,
      image: pineapple,
    },
    {
      id: 4,
      name: 'Kokum Magic',
      price: 150,
      quantity: 1,
      image: kokum,
    },
  ]);

  // Calculate totals
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 0 ? 50 : 0;
  const total = subtotal + shipping;

  const handleQuantityChange = (id, delta) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  return (
    <div className="cart-page-wrapper">
      <div className="cart-container container">
        <h1 className="cart-title">Your Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="empty-cart-message">
            <p>Your cart is empty. <a href="/products">Start shopping now!</a></p>
          </div>
        ) : (
          <div className="cart-content-grid">
            <div className="cart-items-list">
              <div className="cart-list-header">
                <span className="product-header">Product</span>
                <span className="price-header">Price</span>
                <span className="quantity-header">Quantity</span>
                <span className="subtotal-header">Subtotal</span>
                <span className="remove-header"></span>
              </div>
              {cartItems.map(item => (
                <div key={item.id} className="cart-item">
                  <div className="item-details">
                    <img src={item.image} alt={item.name} className="item-image" />
                    <span className="item-name">{item.name}</span>
                  </div>
                  <span className="item-price">₹{item.price.toFixed(2)}</span>
                  <div className="item-quantity-controls">
                    <button onClick={() => handleQuantityChange(item.id, -1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
                  </div>
                  <span className="item-subtotal">₹{(item.price * item.quantity).toFixed(2)}</span>
                  <button onClick={() => handleRemoveItem(item.id)} className="item-remove-btn">✕</button>
                </div>
              ))}
            </div>

            <div className="order-summary-card">
              <h2 className="summary-title">Order Summary</h2>
              <div className="summary-row">
                <span>Subtotal:</span>
                <span>₹{subtotal.toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Shipping:</span>
                <span>{shipping === 0 ? 'Free' : `₹${shipping.toFixed(2)}`}</span>
              </div>
              <div className="summary-total-row">
                <span>Total:</span>
                <span>₹{total.toFixed(2)}</span>
              </div>
              <button className="checkout-btn">Proceed to Checkout</button>
              <a href="/products" className="continue-shopping-link">Continue Shopping</a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;