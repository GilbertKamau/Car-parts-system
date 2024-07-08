import React, { useState } from 'react';
import paymentService from '../../Services/paymentService';

const PaymentForm = () => {
  const [paymentData, setPaymentData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    amount: '',
    paymentMethod: 'visa' // 'visa', 'mastercard', 'mpesa'
  });

  const handleChange = (e) => {
    setPaymentData({ ...paymentData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    paymentService.processPayment(paymentData).then(() => {
      // Handle success
    }).catch((error) => {
      console.error('Payment error:', error);
    });
  };

  return (
    <div>
      <h2>Payment Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="cardNumber"
          placeholder="Card Number"
          value={paymentData.cardNumber}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="expiryDate"
          placeholder="Expiry Date"
          value={paymentData.expiryDate}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="cvv"
          placeholder="CVV"
          value={paymentData.cvv}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={paymentData.amount}
          onChange={handleChange}
          required
        />
        <select name="paymentMethod" value={paymentData.paymentMethod} onChange={handleChange}>
          <option value="visa">Visa</option>
          <option value="mastercard">Mastercard</option>
          <option value="mpesa">M-Pesa</option>
        </select>
        <button type="submit">Pay</button>
      </form>
    </div>
  );
};

export default PaymentForm;
