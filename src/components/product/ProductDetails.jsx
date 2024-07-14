import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate, NavLink } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import '../../components/product/ProductDetails.css';
import '../../App.css';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart, removeFromCart, updateCart } = useCart();
  const [count, setCount] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://backend-e-commerce-production.up.railway.app/api/v1/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Xatolik yuzaga keldi:', error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    addToCart(product, count);
  };

  const handleRemove = () => {
    removeFromCart(product.id);
    navigate('/cart');
  };

  const handleIncrease = () => {
    const newCount = count + 1;
    setCount(newCount);
    updateCart(product.id, newCount);
  };

  const handleDecrease = () => {
    if (count > 1) {
      const newCount = count - 1;
      setCount(newCount);
      updateCart(product.id, newCount);
    }
  };

  const handlePrompt = () => {
    const result = window.prompt("Xarid qilish uchun ro'yhatdan o'ting. Ro'yhatdan o'tasizmi?");
    if (result) {
      window.location.href = "/login"; 
    } else {
    
    }
  };
  

  if (!product) return <div>Loading...</div>;

  return (
    <div className="product-details">
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <p>Rating: {product.rating}</p>
      <div className="count-controls">
        <button onClick={handleDecrease}>-</button>
        <span>{count}</span>
        <button onClick={handleIncrease}>+</button>
      </div>
      <button id="red" onClick={handleAddToCart}>Add to Cart</button>
      <button onClick={handleRemove}>Remove from Cart</button>
      <button id="blue"onClick={handlePrompt}>Xarid qilish uchun ro'yhatdan o'ting</button>
    </div>
  );
};

export default ProductDetails;
