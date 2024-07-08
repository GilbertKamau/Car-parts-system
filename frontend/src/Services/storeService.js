import axios from 'axios';

const API_URL = '/api/stores/';

const getStores = () => {
  return axios.get(API_URL);
};

const getStore = (id) => {
  return axios.get(`${API_URL}${id}`);
};

const createStore = (storeData) => {
  return axios.post(API_URL, storeData);
};

const updateStore = (id, storeData) => {
  return axios.put(`${API_URL}${id}`, storeData);
};

const deleteStore = (id) => {
  return axios.delete(`${API_URL}${id}`);
};

const approveStore = (storeId) => {
  return axios.put(`${API_URL}${storeId}/approve`);
};

const storeService = {
  getStores,
  getStore,
  createStore,
  updateStore,
  deleteStore,
  approveStore,
};

export default storeService;
