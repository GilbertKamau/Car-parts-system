import axios from 'axios';

const API_URL = '/api/sales/';

const getSalesData = () => {
  return axios.get(API_URL);
};

const salesService = {
  getSalesData,
};

export default salesService;
