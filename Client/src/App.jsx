import React from 'react';
import { Routes, Route } from 'react-router-dom'; 

// Import your page components (ensure paths are correct, e.g., './pages/Login.jsx')
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Cart from './pages/Cart.jsx';
import Wishlist from './pages/WishList.jsx';
import ProductDetails from './pages/ProductDetails.jsx';
import OrderDetails from './pages/OrderDetails.jsx';
import Contact from './pages/Contact.jsx';
import FAQ from './pages/FAQ.jsx';
import About from './pages/About.jsx';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/product-details" element={<ProductDetails />} />
        <Route path="/order-details" element={<OrderDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/about" element={<About />} />

        {/* Add more routes for About, Products, Order, Contact as needed */}
      </Routes>
    </div>
  );
}

export default App;