import React, { useState, useEffect } from 'react';
import './ProductDetails.css'; // Don't forget to create this CSS file!

// Import all relevant product images
import lemon from '../assets/lemon.jpg';
import mango from '../assets/mango.jpg';
import pineapple from '../assets/pineapple.jpg';
import kokum from '../assets/kokum.jpg';
import alljuice from '../assets/alljuice.jpg'; // For product variations if needed

function ProductDetails() {
  // Hardcoded product data for demonstration, matching Natural Kokan theme
  // In a real app, this would come from an API based on a productId
  const productData = {
    id: 'lemon-magic',
    name: 'Lemon Magic Beverage',
    shortDescription: 'Naturally flavored refreshing drink with the zest of real lemons. A perfect blend of tang and sweetness.',
    mainImage: lemon,
    galleryImages: [ // Use other product images for variations
      { id: 1, src: lemon, alt: 'Lemon Magic' },
      { id: 2, src: mango, alt: 'Mango Magic' },
      { id: 3, src: pineapple, alt: 'Pineapple Magic' },
      { id: 4, src: kokum, alt: 'Kokum Magic' },
      { id: 5, src: alljuice, alt: 'Assorted Juices' }, // Example using alljuice
    ],
    details: [
      'Ingredients: Natural Lemon Extract, Purified Water, Cane Sugar, Citric Acid, Ascorbic Acid',
      'Certifications: FSSAI Certified, Vegan, No Artificial Colors',
      'Shelf Life: 12 Months from manufacturing date',
    ],
    packSizes: [
      { label: 'Single Bottle (200ml)', value: 'single', price: 100 },
      { label: 'Case (24 x 200ml bottles)', value: 'case', price: 2200 },
      { label: 'Half Pallet (240 bottles)', value: 'half-pallet', price: 9500 },
      { label: 'Full Pallet (480 bottles)', value: 'full-pallet', price: 18000 },
    ],
    basePrice: 100, // Default price for single bottle
  };

  const [selectedImage, setSelectedImage] = useState(productData.mainImage);
  const [selectedPackSize, setSelectedPackSize] = useState(productData.packSizes[0].value);
  const [quantity, setQuantity] = useState(1);
  const [currentPrice, setCurrentPrice] = useState(productData.basePrice);

  // Update current price based on selected pack size
  useEffect(() => {
    const pack = productData.packSizes.find(p => p.value === selectedPackSize);
    if (pack) {
      setCurrentPrice(pack.price);
    }
  }, [selectedPackSize, productData.packSizes]);

  const handlePackSizeChange = (e) => {
    setSelectedPackSize(e.target.value);
    setQuantity(1); // Reset quantity when pack size changes
  };

  const handleQuantityChange = (delta) => {
    setQuantity(prev => Math.max(1, prev + delta));
  };

  const handleAddToCart = () => {
    const selectedPack = productData.packSizes.find(p => p.value === selectedPackSize);
    alert(`Added ${quantity} x ${productData.name} (${selectedPack.label}) to cart for ₹${(currentPrice * quantity).toFixed(2)}`);
    // In a real app, dispatch to cart context/Redux
  };

  const handleAddToWishlist = () => {
    alert(`"${productData.name}" added to wishlist!`);
    // In a real app, dispatch to wishlist context/Redux
  };

  return (
    <div className="product-details-page-wrapper">
      <div className="product-details-header container">
        <h1 className="product-page-title">Product Details</h1>
      </div>

      <div className="product-details-main container">
        <div className="product-image-section">
          <img src={selectedImage} alt={productData.name} className="main-product-image" />
        </div>

        <div className="product-info-section">
          <h2 className="product-name">{productData.name}</h2>
          <p className="product-short-description">{productData.shortDescription}</p>

          <ul className="product-details-list">
            {productData.details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>

          <div className="available-packs">
            <label htmlFor="pack-size-select">Available Pack Sizes</label>
            <div className="custom-select-wrapper">
              <select
                id="pack-size-select"
                className="pack-size-select"
                value={selectedPackSize}
                onChange={handlePackSizeChange}
              >
                {productData.packSizes.map(pack => (
                  <option key={pack.value} value={pack.value}>
                    {pack.label}
                  </option>
                ))}
              </select>
              <span className="select-arrow">&#9660;</span> {/* Custom arrow */}
            </div>
          </div>

          <div className="pricing-info">
            {productData.packSizes.map(pack => {
              if (pack.value === selectedPackSize) {
                return <p key={pack.value} className="current-selected-price">Price: ₹{pack.price.toFixed(2)} ({pack.label})</p>;
              }
              // You can show other pack prices if desired, or remove this loop
              // Example: if (pack.value !== selectedPackSize) { return <p key={pack.value} className="other-pack-price">Price per {pack.label}: ₹{pack.price.toFixed(2)}</p>; }
              return null;
            })}
          </div>

          <div className="quantity-and-cart">
            <div className="quantity-controls">
              <button onClick={() => handleQuantityChange(-1)}>-</button>
              <input type="text" value={quantity} readOnly />
              <button onClick={() => handleQuantityChange(1)}>+</button>
            </div>
            <button className="add-to-cart-button" onClick={handleAddToCart}>Add to Cart</button>
            <button className="add-to-wishlist-button" onClick={handleAddToWishlist}>Add to Wishlist</button>
          </div>
        </div>
      </div>

      <div className="product-variations-section container">
        <h3 className="variations-title">Product Variations</h3>
        <div className="variation-thumbnails">
          {productData.galleryImages.map(img => (
            <img
              key={img.id}
              src={img.src}
              alt={img.alt}
              className={`thumbnail-image ${selectedImage === img.src ? 'active' : ''}`}
              onClick={() => setSelectedImage(img.src)}
            />
          ))}
        </div>
      </div>

      {/* Simplified Footer-like contact/policy info */}
      <div className="product-page-info-footer">
        <div className="container info-grid">
          <div className="info-item">
            <span className="info-icon">📞</span>
            <p>Customer Care: <br/>+91 8169699302</p>
          </div>
          <div className="info-item">
            <span className="info-icon">🚚</span>
            <p>Shipping Policies: <br/>Across Maharashtra</p>
          </div>
          <div className="info-item">
            <span className="info-icon">🔒</span>
            <p>Privacy Policy: <br/>Your data is safe</p>
          </div>
          <div className="info-item">
            <span className="info-icon">📄</span>
            <p>Terms: <br/>Click to read</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;