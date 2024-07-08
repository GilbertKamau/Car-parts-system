import React, { useState, useEffect } from 'react';
import productService from '../../Services/productService';
import ItemForm from './ItemForm';

const ProductManager = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    productService.getProducts().then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <h2>Product Manager</h2>
      <ItemForm />
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            {product.name} - {product.price} USD
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductManager;
