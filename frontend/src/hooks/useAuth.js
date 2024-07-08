import { useState, useContext, createContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children, navigate }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const register = async ({ username, email, password, role }) => {
    setIsLoading(true);
    try {
      // Mock API call for registration
      await new Promise(resolve => setTimeout(resolve, 1000));
      setUserRole(role);
      setIsAuthenticated(true);
      setIsLoading(false);
      return true;
    } catch (error) {
      setIsLoading(false);
      console.error("Registration failed:", error);
      return false;
    }
  };

  const login = async (credentials) => {
    setIsLoading(true);
    try {
      // Mock API call for login
      await new Promise(resolve => setTimeout(resolve, 1000));
      setUserRole('user'); // Set the user role based on the response
      setIsAuthenticated(true);
      setIsLoading(false);
      return true;
    } catch (error) {
      setIsLoading(false);
      console.error("Login failed:", error);
      return false;
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUserRole(null);
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, userRole, isLoading, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
