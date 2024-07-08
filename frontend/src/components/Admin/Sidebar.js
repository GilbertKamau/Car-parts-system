// src/components/Admin/Sidebar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Admin Dashboard</h2>
      <ul>
        <li>
          <NavLink to="/admin/user-list" activeClassName="active-link">User List</NavLink>
        </li>
        <li>
          <NavLink to="/admin/stock-monitor" activeClassName="active-link">Stock Monitor</NavLink>
        </li>
        <li>
          <NavLink to="/admin/order-monitor" activeClassName="active-link">Order Monitor</NavLink>
        </li>
        <li>
          <NavLink to="/admin/store-approval" activeClassName="active-link">Store Approval</NavLink>
        </li>
        <li>
          <NavLink to="/admin/traffic-monitor" activeClassName="active-link">Traffic Monitor</NavLink>
        </li>
        <li>
          <NavLink to="/admin/sales-data" activeClassName="active-link">Sales Data</NavLink>
        </li>
        <li>
          <NavLink to="/admin/item-approval" activeClassName="active-link">Item Approval</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
