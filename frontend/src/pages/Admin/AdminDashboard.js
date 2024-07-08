// src/pages/Admin/AdminDashboard.js
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import Sidebar from '../../components/Admin/Sidebar';
import UserList from '../../components/Admin/UserList';
import StockMonitor from '../../components/Admin/StockMonitor';
import OrderMonitor from '../../components/Admin/OrderMonitor';
import StoreApproval from '../../components/Admin/StoreApproval';
import TrafficMonitor from '../../components/Admin/TrafficMonitor';
import SalesData from '../../components/Admin/SalesData';
import ItemApproval from '../../components/Admin/ItemApproval';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const { user } = useAuth();

  if (!user) return <div>Loading...</div>;

  return (
    <div className="admin-dashboard">
      <Sidebar />
      <div className="dashboard-content">
        <Routes>
          <Route path="user-list" element={<UserList />} />
          <Route path="stock-monitor" element={<StockMonitor />} />
          <Route path="order-monitor" element={<OrderMonitor />} />
          <Route path="store-approval" element={<StoreApproval />} />
          <Route path="traffic-monitor" element={<TrafficMonitor />} />
          <Route path="sales-data" element={<SalesData />} />
          <Route path="item-approval" element={<ItemApproval />} />
          <Route path="*" element={<Navigate to="user-list" />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminDashboard;
