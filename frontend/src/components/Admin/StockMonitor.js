import React, { useEffect, useState } from 'react';
import productService from '../../Services/productService';

const StockMonitor = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    productService.getProducts().then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <h2>Stock Monitor</h2>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            {product.name} - {product.quantity} in stock
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StockMonitor;
