import React from 'react';
import { Link } from 'react-router-dom';
import './About.css'; // Make sure to create this CSS file!

// You'd typically use a background image for a page header
import aboutPageHero from '../assets/hero-bg.jpg'; // Using existing image as a placeholder

function About() {
  return (
    <div className="about-page-wrapper">
      <div 
        className="about-hero" 
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${aboutPageHero})` 
        }}
      >
        <div className="about-hero-content container">
          <h1 className="about-title">Our Story: The Taste of Konkan, Preserved.</h1>
        </div>
      </div>

      <section className="about-section container">
        <div className="section-content">
          <h2 className="section-heading">Who We Are</h2>
          <p>
            Natural Konkan was born from a passion for authentic flavors and a deep respect for our heritage. Our journey began on the sun-kissed farms of the Konkan coast, a region blessed with fertile soil and unique produce. We saw an opportunity to bring the pure, unadulterated taste of these fruits to the world, free from the artificial additives that have become so common. Every bottle of our beverage is a tribute to this legacy—a promise of purity, quality, and tradition.
          </p>
        </div>
      </section>

      <section className="philosophy-section">
        <div className="container">
          <h2 className="section-heading">Our Promise to You</h2>
          <div className="philosophy-grid">
            <div className="philosophy-item">
              <span className="philosophy-icon">🌿</span>
              <h3>100% Natural</h3>
              <p>We use only natural ingredients, with no artificial preservatives, colors, or flavors. Pure and simple.</p>
            </div>
            <div className="philosophy-item">
              <span className="philosophy-icon">💎</span>
              <h3>Authentic Quality</h3>
              <p>Our fruits are hand-picked from trusted local farms, ensuring a premium taste that's true to its origin.</p>
            </div>
            <div className="philosophy-item">
              <span className="philosophy-icon">🤝</span>
              <h3>Local Community</h3>
              <p>By partnering with local farmers, we support our community and promote sustainable agricultural practices.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="call-to-action-section">
        <div className="container cta-content">
          <h2 className="cta-heading">Ready to Taste the Difference?</h2>
          <p className="cta-subheading">Discover the pure, refreshing flavors of Natural Konkan today.</p>
          <Link to="/products" className="cta-button">Explore Our Products</Link>
        </div>
      </section>
    </div>
  );
}

export default About;