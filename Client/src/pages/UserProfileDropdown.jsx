// src/components/UserProfileDropdown.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

// Important: Ensure you have Font Awesome React installed:
// npm install @fortawesome/fontawesome-svg-core @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faEnvelope, faUser, faPhone } from '@fortawesome/free-solid-svg-icons';

// Placeholder user data (In a real app, this would come from global state/context/API after login)
const mockUserData = {
  email: 'user@example.com',
  userName: 'John Doe',
  contact: '+91 98765 43210',
};

// ADDED 'isOpen' PROP
function UserProfileDropdown({ isOpen, onClose }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log('Logging out...');
    alert('You have been logged out!');
    navigate('/login');
    onClose();
  };

  return (
    // Conditional class based on isOpen prop
    <div className={`user-profile-dropdown ${isOpen ? 'open' : ''}`}>
      <div className="dropdown-header">
        <FontAwesomeIcon icon={faUserCircle} className="header-icon" />
        <span className="header-title">User Profile</span>
      </div>

      <div className="dropdown-details">
        <div className="detail-item">
          <FontAwesomeIcon icon={faEnvelope} className="detail-icon" />
          <span className="detail-label">Registered Email</span>
          <span className="detail-value">{mockUserData.email}</span>
        </div>
        <div className="detail-item">
          <FontAwesomeIcon icon={faUser} className="detail-icon" />
          <span className="detail-label">User Name</span>
          <span className="detail-value">{mockUserData.userName}</span>
        </div>
        <div className="detail-item">
          <FontAwesomeIcon icon={faPhone} className="detail-icon" />
          <span className="detail-label">Contact</span>
          <span className="detail-value">{mockUserData.contact}</span>
        </div>
      </div>

      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default UserProfileDropdown;