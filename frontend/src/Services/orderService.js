import axios from 'axios';

const API_URL = '/api/orders/';

const getOrders = () => {
  return axios.get(API_URL);
};

const getOrder = (id) => {
  return axios.get(`${API_URL}${id}`);
};

const createOrder = (orderData) => {
  return axios.post(API_URL, orderData);
};

const updateOrder = (id, orderData) => {
  return axios.put(`${API_URL}${id}`, orderData);
};

const deleteOrder = (id) => {
  return axios.delete(`${API_URL}${id}`);
};

const orderService = {
  getOrders,
  getOrder,
  createOrder,
  updateOrder,
  deleteOrder,
};

export default orderService;
