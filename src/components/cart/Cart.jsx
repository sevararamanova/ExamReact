import React from 'react';
import { useCart } from '../../context/CartContext';
import './Cart.css';




const Cart = () => {
  const { cart } = useCart();

  if (cart.length === 0) {
    return <div className="cart-empty">Your cart is empty.</div>;
  }

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul className="cart-list">
        {cart.map((item, index) => (
          <li key={index} className="cart-item">
            <h3>{item.product.name}</h3>
            <img src={item.product.image} alt={item.product.name} className="cart-item-image" />
            <p>Quantity: {item.quantity}</p>
            <p>Price: ${item.product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
