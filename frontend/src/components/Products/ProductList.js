import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../../services/api'; // Assuming you have an API service for fetching products
import ProductCard from './ProductCard';
import './ProductList.css'; // Assuming you have a CSS file for styling

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
      setLoading(false);
    };

    getProducts();
  }, []);

  return (
    <div className="product-list">
      {loading ? (
        <p>Loading products...</p>
      ) : (
        products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))
      )}
    </div>
  );
};

export default ProductList;
