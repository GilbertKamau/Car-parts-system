import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import AdminDashboard from './pages/Admin/AdminDashboard';
import SupplierDashboard from './pages/Supplier/SupplierDashboard';
import UserDashboard from './pages/User/UserDashboard';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Logout from './components/Auth/Logout';
import { AuthProvider, useAuth } from './hooks/useAuth';
import PrivateRoute from './components/Auth/PrivateRoute';
import Header from './components/Header';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Register />} />
          <Route path="/logout" element={<Logout />} />

          {/* Admin Dashboard */}
          <Route path="/admin/*" element={
            <PrivateRoute expectedRole="admin">
              <AdminDashboard />
            </PrivateRoute>
          } />

          {/* Supplier Dashboard */}
          <Route path="/supplier/*" element={
            <PrivateRoute expectedRole="supplier">
              <SupplierDashboard />
            </PrivateRoute>
          } />

          {/* User Dashboard */}
          <Route path="/user/*" element={
            <PrivateRoute expectedRole="user">
              <UserDashboard />
            </PrivateRoute>
          } />

          {/* Redirect all other routes to login */}
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;




