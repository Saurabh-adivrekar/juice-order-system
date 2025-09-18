import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

// NEW: Import eye icons from react-icons/ai
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    contact: ''
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword || !formData.contact) {
      setErrorMessage('Please fill all fields');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }

    if (formData.password.length < 6) {
      setErrorMessage('Password must be at least 6 characters');
      return;
    }

    if (!/^\d{10}$/.test(formData.contact)) {
      setErrorMessage('Contact number must be exactly 10 digits');
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: formData.name,
          email: formData.email,
          password: formData.password,
          contact: formData.contact
        })
      });

      if (response.ok) {
        alert("Registration successful!");
        navigate("/login");
      } else {
        const errorText = await response.text();
        setErrorMessage(errorText || "Registration failed. Try again.");
      }
    } catch (error) {
      setErrorMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="register-wrapper">
      <div className="register-form-container">
        <h2 className="register-title">Create Account</h2>
        <p className="register-subtitle">Sign up to get started</p>
        <form onSubmit={handleRegister}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="register-input"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="contact"
            placeholder="Contact Number"
            className="register-input"
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="register-input"
            onChange={handleChange}
            required
          />
          {/* NEW: Password Input with Toggle Icon */}
          <div className="password-input-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              className="register-input"
              onChange={handleChange}
              required
            />
            <button
              type="button"
              className="password-toggle-btn"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </button>
          </div>
          {/* NEW: Confirm Password Input with Toggle Icon */}
          <div className="password-input-wrapper">
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm Password"
              className="register-input"
              onChange={handleChange}
              required
            />
            <button
              type="button"
              className="password-toggle-btn"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </button>
          </div>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <button type="submit" className="register-button">Register</button>
        </form>
        <p style={{ marginTop: '15px' }}>
          Already have an account? <a href="/login">Login here</a>
        </p>
      </div>
    </div>
  );
}

export default Register;