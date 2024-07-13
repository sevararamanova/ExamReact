import React from 'react';
import { useCart } from '../../context/CartContext';
import './Cart.css';

const Cart = () => {
  const { cart } = useCart();

  return (
    <div className="cart">
      <h1>Your Cart</h1>
      <div className="cart-items">
        {cart.map((product, index) => (
          <div key={index} className="cart-item">
            {product.image && <img src={product.image} alt={product.name} className="cart-image" />}
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p style={{ color: 'black' }}>Rating: {product.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
