import React, { useState, useEffect } from 'react';
import orderService from '../../Services/orderService';

const OrderTracker = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    orderService.getOrders().then((data) => setOrders(data));
  }, []);

  return (
    <div>
      <h2>Order Tracker</h2>
      <ul>
        {orders.map((order) => (
          <li key={order._id}>
            Order ID: {order._id} - Status: {order.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderTracker;
