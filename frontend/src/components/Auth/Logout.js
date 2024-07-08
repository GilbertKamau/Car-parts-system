import React, { useEffect } from 'react';
import authService from '../../Services/authService';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    authService.logout().then(() => {
      navigate('/login');
    }).catch((error) => {
      console.error('Logout error:', error);
    });
  }, [navigate]);

  return (
    <div>
      <p>Logging out...</p>
    </div>
  );
};

export default Logout;
