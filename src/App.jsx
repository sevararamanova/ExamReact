import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Nav from './components/nav/Nav';
import Hero from './components/hero/Hero';
import Product from './components/product/Product'; // Product komponentini import qilib oling
import Cart from './components/cart/Cart';
import ProductDetails from './components/product/ProductDetails'; 
import { CartProvider } from './context/CartContext'; 
import ProductList from './components/ProductList'; // ProductList komponentini import qilib oling

function App() {
  const location = useLocation();

  return (
    <CartProvider>
      <div className="container">
        <Nav />
        <Hero />
        <Product/>
        <Routes>
          <Route path="/" element={<ProductList />} /> {/* ProductList komponentini "/"" yo'liga qo'shing */}
          <Route path="/cart" element={<Cart />} />
          <Route path="/products/:id" element={<ProductDetails />} /> {/* /products/:id yo'lini qo'shing */}
          {location.pathname === "/product" && <Route path="/product" element={<Product />} />} {/* useLocation bilan "/product" yo'lini qo'shing */}
        </Routes>
      </div>
    </CartProvider>
  );
}

export default App;
