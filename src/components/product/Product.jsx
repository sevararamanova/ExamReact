import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import './Product.css';
import cartImage from '../../images/cart.png'; 

const Product = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://backend-e-commerce-production.up.railway.app/api/v1/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className='product'>
      <h1>All Products</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            {product.image && <img src={product.image} alt={product.name} className="product-image" />}
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <Link to={`/products/${product.id}`}>See More</Link>
            <img id="cart"src={cartImage} alt="Add to Cart" onClick={() => addToCart(product)} className="cart-icon" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
