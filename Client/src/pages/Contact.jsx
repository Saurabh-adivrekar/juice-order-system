import React, { useState } from 'react';
import './Contact.css'; // Make sure to create this CSS file!

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('');
    
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      alert('Please fill out all fields.');
      return;
    }
    
    setLoading(true);

    try {
      const response = await fetch('http://localhost:8080/api/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' }); // Clear form
        alert('Your message has been sent successfully!');
      } else {
        setStatus('error');
        const errorData = await response.json();
        alert(errorData.message || 'Failed to send your message. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      alert('Network error. Failed to connect to the server.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-page-wrapper">
      <div className="contact-container container">
        <h1 className="contact-title">Get in Touch</h1>
        <p className="contact-subtitle">We would love to hear from you!</p>
        
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="contact-input"
              placeholder="Your Full Name"
              required
              disabled={loading}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="contact-input"
              placeholder="Your Email Address"
              required
              disabled={loading}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="contact-textarea"
              placeholder="Your Message"
              required
              disabled={loading}
            ></textarea>
          </div>
          
          <button
            type="submit"
            className="contact-submit-btn"
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;