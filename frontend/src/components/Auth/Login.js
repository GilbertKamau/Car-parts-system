import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../../Services/authService';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await authService.login({ email, password });
      const userRole = await authService.getUserRole(); // Fetch role after login
      switch (userRole) {
        case 'admin':
          navigate('/admin-dashboard');
          break;
        case 'user':
          navigate('/user-dashboard');
          break;
        case 'supplier':
          navigate('/supplier-dashboard');
          break;
        default:
          navigate('/login'); // Default redirect to login if role is unknown
          break;
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;

