import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://backend-e-commerce-production.up.railway.app/api/v1/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Xatolik yuzaga keldi:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Products List</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>
              {product.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
