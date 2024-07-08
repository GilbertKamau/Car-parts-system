import React, { useEffect, useState } from 'react';
import salesService from '../../Services/salesService';

const SalesData = () => {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    salesService.getSalesData().then((data) => setSales(data));
  }, []);

  return (
    <div>
      <h2>Sales Data</h2>
      <ul>
        {sales.map((sale) => (
          <li key={sale._id}>
            {sale.date} - {sale.amount} USD
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SalesData;
