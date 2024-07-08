import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from 'react-dom/client'
import App from './App';
import './styles/index.css';
import { AuthProvider } from './context/AuthContext';

// Create a root
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render your app within the root
root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);

