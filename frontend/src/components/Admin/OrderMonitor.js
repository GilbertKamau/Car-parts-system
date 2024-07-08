import React, { useEffect, useState } from 'react';
import orderService from '../../Services/orderService';

const OrderMonitor = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    orderService.getOrders().then((data) => setOrders(data));
  }, []);

  return (
    <div>
      <h2>Order Monitor</h2>
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

export default OrderMonitor;
