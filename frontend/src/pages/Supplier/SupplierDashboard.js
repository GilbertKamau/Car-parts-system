// src/pages/Supplier/SupplierDashboard.js
import React from 'react';
import { Routes, Route, Navigate, Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import StoreManager from '../../components/Supplier/StoreManager';
import ProductManager from '../../components/Supplier/ProductManager';
import ItemForm from '../../components/Supplier/ItemForm'; // Add this import
import StoreDetails from '../../components/Supplier/StoreDetails'; // Add this import
import './SupplierDashboard.css';

const SupplierDashboard = () => {
  const { user } = useAuth();

  if (!user) return <div>Loading...</div>;

  return (
    <div className="supplier-dashboard">
      <nav className="top-nav">
        <Link to="store-manager">Store Manager</Link>
        <Link to="product-manager">Product Manager</Link>
        <Link to="item-form">Item Form</Link>
        <Link to="store-details">Store Details</Link>
      </nav>
      <div className="dashboard-content">
        <Routes>
          <Route path="store-manager" element={<StoreManager />} />
          <Route path="product-manager" element={<ProductManager />} />
          <Route path="item-form" element={<ItemForm />} />
          <Route path="store-details" element={<StoreDetails />} />
          <Route path="*" element={<Navigate to="store-manager" />} />
        </Routes>
      </div>
    </div>
  );
};

export default SupplierDashboard;

