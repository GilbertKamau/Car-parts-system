// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="app-header">
      <div className="cart-indicator">
        <Link to="/user/shopping-cart">Cart</Link>
      </div>
    </header>
  );
};

export default Header;
