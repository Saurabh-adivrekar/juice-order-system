import React, { useState } from 'react';
import './ContactUs.css';  // Import the CSS for styling

function ContactUs() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic for submitting the form (could be an API call or just logging the data)
        alert('Message Sent!');
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className="contact-us-container">
            <div className="contact-us-form">
                <h1>Contact Us</h1>
                <p>We’d love to hear from you. Please fill out the form below and we’ll get back to you as soon as possible.</p>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit" className="submit-button">Send Message</button>
                </form>
            </div>

            <div className="contact-info">
                <h2>Our Contact Information</h2>
                <p>If you prefer, you can reach us at the following:</p>
                <p><strong>Phone:</strong> +123 456 7890</p>
                <p><strong>Email:</strong> support@collabzone.com</p>
                <p><strong>Address:</strong> 123 CollabZone Street, City, Country</p>
            </div>
        </div>
    );
}

export default ContactUs;
