import React, { useState } from 'react';
import './Wishlist.css'; // Don't forget to create this CSS file!

// Import your product images
import lemon from '../assets/lemon.jpg';
import mango from '../assets/mango.jpg';
import pineapple from '../assets/pineapple.jpg';
import kokum from '../assets/kokum.jpg';
// Using existing images as placeholders for various "Prokce" products from the outline
// You can adjust these to match your specific product images
import alljuice from '../assets/alljuice.jpg'; // Assuming you want to use this for another product

function Wishlist() {
  // Placeholder wishlist items data
  // In a real app, this would come from global state or an API call
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      name: 'Lemon Magic Soft Drink',
      description: 'Zesty & refreshing concentrate. Bulk Beverage. Package Size 2L.',
      price: 240, // Example price for concentrate
      image: lemon,
    },
    {
      id: 2,
      name: 'Mango Magic Drink',
      description: 'Tropical burst of flavor. Single Bottle Beverage.',
      price: 150, // Example price for single bottle
      image: mango,
    },
    {
      id: 3,
      name: 'Pineapple Magic Beverage',
      description: 'Sweet and tangy delight. Bulk Beverage. Re-ordering shipments.',
      price: 280, // Example price
      image: pineapple,
    },
    {
      id: 4,
      name: 'Kokum Magic Drink',
      description: 'Authentic Kokan flavor. Single Bottle Beverage.',
      price: 160, // Example price
      image: kokum,
    },
    {
      id: 5,
      name: 'Assorted Juices Pack',
      description: 'Variety pack. All Juice Flavors 4 x 2L. Wishlist\'s your sification.',
      price: 999, // Example price for pack
      image: alljuice, // Using 'alljuice.jpg' for this
    },
  ]);

  const handleRemoveFromWishlist = (id) => {
    setWishlistItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const handleAddToCart = (item) => {
    // In a real application, you would dispatch an action to add this item to the cart state
    alert(`"${item.name}" added to cart! (Functionality to be implemented)`);
    // Optionally, you might also remove it from the wishlist after adding to cart
    // handleRemoveFromWishlist(item.id);
  };

  return (
    <div className="wishlist-page-wrapper">
      <div className="wishlist-header-section">
        <h1 className="wishlist-page-title">Wishlist</h1>
        <button className="wishlist-search-button">
          <i className="fas fa-search"></i> {/* Placeholder for search icon */}
          &#128269; {/* Unicode magnifying glass if Font Awesome not used */}
        </button>
      </div>

      <div className="wishlist-container container">
        {wishlistItems.length === 0 ? (
          <div className="empty-wishlist-message">
            <p>Your wishlist is empty. <a href="/products">Browse products to add items!</a></p>
          </div>
        ) : (
          <div className="wishlist-items-list">
            {wishlistItems.map(item => (
              <div key={item.id} className="wishlist-item-card">
                <div className="item-main-content">
                  <img src={item.image} alt={item.name} className="item-image" />
                  <div className="item-info">
                    <h2 className="item-name">{item.name}</h2>
                    <p className="item-details-text">{item.description}</p>
                    <p className="item-price">₹{item.price.toFixed(2)}</p>
                  </div>
                </div>
                
                <div className="item-actions">
                  <button onClick={() => handleAddToCart(item)} className="add-to-cart-btn">Add to Cart</button>
                  <button onClick={() => handleRemoveFromWishlist(item.id)} className="remove-btn">Remove</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Wishlist;