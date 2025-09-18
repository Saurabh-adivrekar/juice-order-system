import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Home.css';

// Product images
import lemon from '../assets/lemon.jpg';
import mango from '../assets/mango.jpg';
import pineapple from '../assets/pineapple.jpg';
import kokum from '../assets/kokum.jpg';
import naturalKokanLogo from '../assets/natural-kokan-logo.png';
import heroBackground from '../assets/hero-bg.jpg';
import bannerImage from '../assets/alljuice.jpg'; 

function Home() {
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [loggedInUserEmail, setLoggedInUserEmail] = useState('');

  // Dropdown & Scroll logic from previous steps (unchanged)
  const getLoggedInUserEmail = () => {
    return localStorage.getItem('userEmail') || '';
  };
  const handleLogout = () => {
    localStorage.removeItem('userEmail');
    setIsLoggedIn(false);
    setShowProfileDropdown(false);
    navigate('/login');
  };
  const closeDropdownAndNavigate = (path) => {
    setShowProfileDropdown(false);
    navigate(path);
  };
  useEffect(() => {
    const userEmail = localStorage.getItem('userEmail');
    if (userEmail) {
      setIsLoggedIn(true);
      setLoggedInUserEmail(userEmail);
    }
  }, []);
  const toggleDropdown = () => {
    setShowProfileDropdown(prev => !prev);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowProfileDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowScrollTopButton(true);
      } else {
        setShowScrollTopButton(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const handleShopNowClick = () => {
    navigate('/product-details');
  };
  const handleBulkOrderClick = () => {
    alert('Bulk Order functionality coming soon!');
  };

  return (
    <>
      <header className="header">
        <nav className="navbar container">
          <div className="logo">
            <img src={naturalKokanLogo} alt="Natural Konkan Logo" className="logo-img" />
            <span className="logo-text">Natural Konkan</span>
          </div>
          <ul className="nav-links">
            <li><Link to="/" className="nav-button active">Home</Link></li>
            <li><Link to="/about" className="nav-button">About</Link></li>
            <li><Link to="/product-details" className="nav-button">Products</Link></li>
            <li><Link to="/order-details" className="nav-button">Orders</Link></li>
            <li><Link to="/contact" className="nav-button">Contact</Link></li>
            <li><Link to="/cart" className="nav-button">Cart</Link></li>
            <li><Link to="/wishlist" className="nav-button">WishList</Link></li>
            <div className="profile-dropdown-container" ref={dropdownRef}>
              <div className="profile-icon profile-icon-trigger" onClick={toggleDropdown}>
                👤
              </div>
              <div className={`profile-dropdown-menu ${showProfileDropdown ? 'open' : ''}`}>
                {isLoggedIn ? (
                  <>
                    <span className="dropdown-user-email">Welcome, {loggedInUserEmail}!</span>
                    <button className="dropdown-item logout-btn" onClick={handleLogout}>LOGOUT</button>
                  </>
                ) : (
                  <>
                    <Link to="/login" className="dropdown-item" onClick={() => closeDropdownAndNavigate("/login")}>LOGIN</Link>
                    <Link to="/register" className="dropdown-item" onClick={() => closeDropdownAndNavigate("/register")}>REGISTER</Link>
                  </>
                )}
              </div>
            </div>
          </ul>
          <div className="mobile-menu">☰</div>
        </nav>
      </header>

      <main>
        {/* --- NEW: Immersive Hero Section --- */}
        <section className="hero-v2" style={{ backgroundImage: `linear-gradient(to bottom, rgba(76, 175, 80, 0.5), rgba(255, 140, 0, 0.5)), url(${heroBackground})` }}>
          <div className="hero-content-v2 container">
            <h1 className="hero-title-v2">Crafted with the Essence of Konkan</h1>
            <p className="hero-subtitle-v2">Experience the pure, untamed flavor of natural beverages, directly from our farms to your home.</p>
            <div className="hero-actions-v2">
              <button className="primary-cta-v2" onClick={handleShopNowClick}>Shop Now</button>
              <button className="secondary-cta-v2" onClick={handleBulkOrderClick}>Bulk Order</button>
            </div>
          </div>
        </section>

        {/* --- NEW: Section to highlight key values/flavors --- */}
        <section className="highlights-section container">
            <div className="highlight-card">
                <img src={lemon} alt="Zesty Lemon" className="highlight-image" />
                <h3 className="highlight-title">Zesty Lemon Magic</h3>
                <p className="highlight-text">A burst of fresh citrus to energize your day.</p>
            </div>
            <div className="highlight-card">
                <img src={kokum} alt="Rich Kokum" className="highlight-image" />
                <h3 className="highlight-title">Authentic Kokum</h3>
                <p className="highlight-text">The traditional Konkan taste, rich and refreshing.</p>
            </div>
            <div className="highlight-card">
                <img src={pineapple} alt="Tropical Pineapple" className="highlight-image" />
                <h3 className="highlight-title">Tropical Pineapple</h3>
                <p className="highlight-text">A sweet and tangy escape to paradise.</p>
            </div>
        </section>

        {/* --- NEW: Banner for Bulk Orders --- */}
        <section className="banner-section" style={{ backgroundImage: `url(${bannerImage})` }}>
            <div className="banner-overlay">
                <div className="banner-content container">
                    <h2 className="banner-title">Need in Bulk?</h2>
                    <p className="banner-subtitle">Get special pricing and free delivery on all wholesale orders for your restaurant, store, or event.</p>
                    <button className="banner-cta" onClick={handleBulkOrderClick}>Get a Quote</button>
                </div>
            </div>
        </section>

        {/* --- Featured Products & Benefits (Updated from old Home) --- */}
        <section className="featured-products container">
          <h2>Our Signature Flavors</h2>
          <p className="section-description">Handcrafted with authentic Kokan fruits</p>
          <div className="product-showcase">
            <div className="product-card">
              <img src={lemon} alt="Lemon" />
              <h3>Lemon Magic</h3>
              <p>₹100 per bottle</p>
            </div>
            <div className="product-card">
              <img src={mango} alt="Mango" />
              <h3>Mango Magic</h3>
              <p>₹150 per bottle</p>
            </div>
            <div className="product-card">
              <img src={pineapple} alt="Pineapple" />
              <h3>Tropical Pineapple</h3>
              <p>₹140 per bottle</p>
            </div>
            <div className="product-card">
              <img src={kokum} alt="Kokum" />
              <h3>Kokan Kokum</h3>
              <p>₹130 per bottle</p>
            </div>
          </div>
        </section>

        <section className="benefits">
          <div className="container">
            <h2>Why Choose Natural Kokan?</h2>
            <div className="benefits-grid">
              <div className="benefit-item">
                <div className="benefit-icon">🌿</div>
                <h3>100% Natural</h3>
                <p>No artificial flavors or preservatives</p>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">🏆</div>
                <h3>Premium Quality</h3>
                <p>Sourced from local Kokan farmers</p>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">🚚</div>
                <h3>Fast Delivery</h3>
                <p>Across Maharashtra in 2-3 days</p>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">💰</div>
                <h3>Bulk Discounts</h3>
                <p>Special prices for retailers</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="main-footer">
        <div className="container footer-grid">
          <div className="footer-column brand-info">
            <div className="logo footer-logo">
              <img src={naturalKokanLogo} alt="Natural Kokan Logo" className="footer-logo-img" />
              <span className="footer-logo-text">Natural Kokan</span>
            </div>
            <p className="brand-tagline">
              Hydrate with Nature's Finest. Bringing the authentic taste of Kokan to you.
            </p>
            <div className="social-links">
              <a href="https://facebook.com/naturalkokan" target="_blank" rel="noopener noreferrer" className="social-icon">FB</a>
              <a href="https://instagram.com/naturalkokan" target="_blank" rel="noopener noreferrer" className="social-icon">IG</a>
              <a href="https://linkedin.com/company/naturalkokan" target="_blank" rel="noopener noreferrer" className="social-icon">LI</a>
              <a href="https://youtube.com/naturalkokan" target="_blank" rel="noopener noreferrer" className="social-icon">YT</a>
            </div>
          </div>

          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/products">Our Flavors</Link></li>
              <li><Link to="/order">Place Order</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/benefits">Why Choose Us</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Support</h3>
            <ul className="footer-links">
              <li><Link to="/faq">FAQs</Link></li>
              <li><Link to="/shipping">Shipping & Delivery</Link></li>
              <li><Link to="/returns">Cancellations & Returns</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms & Conditions</Link></li>
              <li><Link to="/sitemap">Sitemap</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container">
            <div className="shop-keywords">
              <span className="keyword-label">Shop By Keyword:</span>
              <Link to="/products?q=kokum" className="keyword-link">Kokum Juice</Link>
              <Link to="/products?q=lemon" className="keyword-link">Lemon Drink</Link>
              <Link to="/products?q=pineapple" className="keyword-link">Pineapple Beverage</Link>
              <Link to="/products?q=orange" className="keyword-link">Orange Fresh</Link>
              <Link to="/products?q=natural" className="keyword-link">Natural Juices</Link>
              <Link to="/products?q=organic" className="keyword-link">Organic Drinks</Link>
            </div>
            <p className="copyright">&copy; {new Date().getFullYear()} Natural Kokan. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {showScrollTopButton && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          &#9650;
        </button>
      )}
    </>
  );
}

export default Home;