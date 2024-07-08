import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth';

const register = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    if (response.data) {
      localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Error registering user');
  }
};

const login = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, userData);
    if (response.data) {
      localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Error logging in');
  }
};

const logout = () => {
  localStorage.removeItem('user');
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user'));
};

const getUserRole = async () => {
  try {
    const user = getCurrentUser();
    if (!user || !user.token) {
      throw new Error('No token found');
    }

    const response = await axios.get(`${API_URL}/userRole`, {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });

    return response.data.role;
  } catch (error) {
    throw new Error('Failed to get user role');
  }
};

const authService = {
  register,
  login,
  logout,
  getCurrentUser,
  getUserRole,
};

export default authService;


