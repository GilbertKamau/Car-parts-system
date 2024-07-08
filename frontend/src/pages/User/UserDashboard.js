// src/pages/User/UserDashboard.js
import React from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import ShoppingCart from '../../components/User/ShoppingCart';
import OrderTracker from '../../components/User/OrderTracker';
import ItemSearch from '../../components/User/ItemSearch';
import PaymentForm from '../../components/User/PaymentForm';
import './UserDashboard.css';

const UserDashboard = () => {
  const { user } = useAuth();

  if (!user) return <div>Loading...</div>;

  return (
    <div className="user-dashboard">
      <div className="sidebar">
        <Link to="shopping-cart">Shopping Cart</Link>
        <Link to="order-tracker">Order Tracker</Link>
        <Link to="item-search">Item Search</Link>
        <Link to="payment-form">Payment Form</Link>
      </div>
      <div className="dashboard-content">
        <Routes>
          <Route path="shopping-cart" element={<ShoppingCart />} />
          <Route path="order-tracker" element={<OrderTracker />} />
          <Route path="item-search" element={<ItemSearch />} />
          <Route path="payment-form" element={<PaymentForm />} />
          <Route path="*" element={<Navigate to="shopping-cart" />} />
        </Routes>
      </div>
    </div>
  );
};

export default UserDashboard;


