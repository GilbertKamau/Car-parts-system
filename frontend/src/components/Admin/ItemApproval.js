import React, { useEffect, useState } from 'react';
import productService from '../../Services/productService';

const ItemApproval = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    productService.getPendingProducts().then((data) => setProducts(data));
  }, []);

  const handleApprove = (productId) => {
    productService.approveProduct(productId).then(() => {
      setProducts(products.map(product => product._id === productId ? { ...product, approved: true } : product));
    });
  };

  return (
    <div>
      <h2>Item Approval</h2>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            {product.name} - {product.approved ? 'Approved' : 'Pending'}
            {!product.approved && <button onClick={() => handleApprove(product._id)}>Approve</button>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemApproval;
