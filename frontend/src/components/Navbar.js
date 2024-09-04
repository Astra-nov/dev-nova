import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isProfileMenuOpen, setProfileMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const toggleProfileMenu = () => {
    setProfileMenuOpen(!isProfileMenuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="navbar-left">
          <div className="menu-icon" onClick={toggleSidebar}>
            &#9776; {/* Hamburger Icon */}
          </div>
          <span className="website-name">AstraNov</span>
        </div>
        <div className="navbar-center">
          <input type="text" className="search-bar" placeholder="Search..." />
          <button className="search-button">Search</button>
        </div>
        <div className="navbar-right">
          <div className="nav-item dropdown-icon" onClick={toggleDropdown}>
            &#8942; {/* 3-dot menu icon */}
          </div>
          {isDropdownOpen && (
            <div className="dropdown-menu">
              <ul>
                <li>Services</li>
                <li>Resources</li>
              </ul>
            </div>
          )}
          <span className="nav-item">Services</span>
          <span className="nav-item">Resources</span>
          <div className="nav-item notification-icon">&#128276;</div>
          <div className="profile-icon" onClick={toggleProfileMenu}>
            <img src={require('./profile.png')} alt="Profile" />
          </div>
        </div>
      </div>
      {isProfileMenuOpen && (
        <div className="profile-menu-container">
          <div className="profile-menu">
            <ul>
              <li>Profile</li>
              <li>Settings</li>
              <li>Logout</li>
            </ul>
          </div>
        </div>
      )}
      {isSidebarOpen && (
        <div className="sidebar">
          <div className="sidebar-close-button" onClick={closeSidebar}>
            &times; {/* Close Icon */}
          </div>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Help</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
