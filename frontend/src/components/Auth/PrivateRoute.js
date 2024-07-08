// src/components/Auth/PrivateRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const PrivateRoute = ({ children, expectedRole }) => {
  const { user } = useAuth();

  if (!user || user.role !== expectedRole) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default PrivateRoute;
