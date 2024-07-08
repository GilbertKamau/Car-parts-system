import axios from 'axios';

const API_URL = '/api/products/';

const getProducts = () => {
  return axios.get(API_URL);
};

const getProduct = (id) => {
  return axios.get(`${API_URL}${id}`);
};

const createProduct = (productData) => {
  return axios.post(API_URL, productData);
};

const updateProduct = (id, productData) => {
  return axios.put(`${API_URL}${id}`, productData);
};

const deleteProduct = (id) => {
  return axios.delete(`${API_URL}${id}`);
};

const productService = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};

export default productService;
