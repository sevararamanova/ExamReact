import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/nav/Nav';
import Home from './components/home/Home';
import Cart from './components/cart/Cart';
import ProductDetails from './components/product/ProductDetails';
import ProductList from './components/ProductList';
import { CartProvider } from './context/CartContext';
import Adidas from './components/adidas/Adidas';
import Why from './components/why/Why';
import Rated from './components/rated/Rated';
import Footer from './components/footer/Footer';
import Login from './components/login/Login'; 
import Register from './components/register/Register';


function App() {
  return (
    <CartProvider>
      <div className="container">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/login" element={<Login />} />
         <Route path="/register" element={<Register/>} />
       
        </Routes>
        <Adidas />
        <Why />
        <Rated />
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
