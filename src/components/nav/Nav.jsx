import React from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../../locales/i18next';
import { Outlet, Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import human from '../../images/human.png';
import Icon from '../../images/Icon.png';
import cart from '../../images/cart.png';
import './Nav.css';

const Nav = () => {
  const { t } = useTranslation();
  const { cart: cartItems } = useCart();

  return (
    <div className='navbar'>
      <div>
        <select defaultValue={i18n.language} onChange={(e) => {
          i18n.changeLanguage(e.target.value);
        }}>
          <option value="en">ENG</option>
          <option value="uz">UZ</option>
          <option value="ru">RU</option>
        </select>
        
      </div>

      <div className='navbar__profile'>
        <Link to="/profile">
          <img src={human} alt="human" />
          <p>{t('My profile')}</p>
        </Link>
      </div>
      <div className='navbar__icon'>
        <Link to="/">
          <img src={Icon} alt="icon" />
          <p>{t('E-Comm')}</p>
        </Link>
      </div>
      <div className='navbar__cart'>
        <Link to="/cart">
          <img src={cart} alt="cart" />
          <span className="cart-count">{cartItems.length}</span>
        </Link>
      </div>
    </div>
  );
}

export default Nav;
