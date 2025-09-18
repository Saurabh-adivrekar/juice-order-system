import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    if (!email) {
      setError('Please enter your email address.');
      return;
    }
    if (!password) {
      setError('Please enter your password.');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("http://localhost:8080/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: email,
          password: password
        })
      });

      if (response.ok) {
        // --- NEW: Save user data on successful login ---
        // In a real app, you would save an auth token here. For this, we'll use email.
        localStorage.setItem('userEmail', email); 
        // --- End New ---
        alert("Login successful! Welcome " + email);
        navigate("/home");
      } else {
        const errorData = await response.json();
        if (errorData && errorData.message) {
          setError(errorData.message);
        } else {
          setError("Invalid email or password. Please try again.");
        }
      }
    } catch (networkError) {
      setError("Login failed. Please try again later.");
      console.error("Login fetch error:", networkError);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-form-container">
        <h2 className="login-title">Welcome Back</h2>
        <p className="login-subtitle">Login to your account</p>
        <form onSubmit={handleLogin}>
          {error && <p className="login-error">{error}</p>}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="login-input"
            required
            disabled={loading}
          />
          <div className="password-input-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="login-input"
              required
              disabled={loading}
            />
            <button
              type="button"
              className="password-toggle-btn"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </button>
          </div>
          <button
            type="submit"
            className="login-button"
            disabled={loading}
          >
            {loading ? 'Logging In...' : 'Login'}
          </button>
        </form>
        <p className="login-footer">
          Don't have an account? <a href="/register">Register here</a>
        </p>
      </div>
    </div>
  );
}

export default Login;