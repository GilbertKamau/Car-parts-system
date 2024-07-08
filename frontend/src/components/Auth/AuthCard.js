// src/components/Auth/AuthCard.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import authService from '../services/authService';
import './AuthCard.css';

const AuthCard = () => {
  const [isRegister, setIsRegister] = useState(true);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isRegister) {
        await authService.register(formData);
      } else {
        await authService.login(formData);
      }
      // Redirect or handle successful registration/login
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="auth-card">
      <h2>{isRegister ? 'Register' : 'Login'}</h2>
      <form onSubmit={handleSubmit}>
        {isRegister && (
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
        )}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">{isRegister ? 'Register' : 'Login'}</button>
      </form>
      <div className="auth-toggle">
        {isRegister ? (
          <p>
            Already have an account? <Link to="#" onClick={() => setIsRegister(false)}>Login</Link>
          </p>
        ) : (
          <p>
            Don't have an account? <Link to="#" onClick={() => setIsRegister(true)}>Register</Link>
          </p>
        )}
      </div>
    </div>
  );
};

export default AuthCard;
