// src/services/paymentService.js
import axios from 'axios';

const API_URL = '/api/payment';

const processPayment = async (paymentData) => {
  try {
    const response = await axios.post(`${API_URL}/process`, paymentData);
    return response.data;
  } catch (error) {
    throw new Error('Payment processing failed.');
  }
};

export default { processPayment };
