import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../components/rated/Rated.css';

const Rated = () => {
  const [topRatedProducts, setTopRatedProducts] = useState([]);

  useEffect(() => {
    const fetchTopRatedProducts = async () => {
      try {
        const response = await axios.get('https://backend-e-commerce-production.up.railway.app/api/v1/products');
        // Mahsulotlarni reyting bo'yicha tartiblangan qilib olish
        const sortedProducts = response.data.sort((a, b) => b.rating - a.rating);
        // Faqat 3 ta eng yuqori reytingga ega mahsulotlarni olib tashlash
        const topThreeProducts = sortedProducts.slice(0, 3);
        setTopRatedProducts(topThreeProducts); // Olingan ma'lumotni holatga saqlang
      } catch (error) {
        console.error('Eng yuqori reytingga ega mahsulotlarni olishda xato yuz berdi:', error.message);
        // Xatolar qanday ishlanishi kerakligini tanlang (masalan, tarmoq xatosi, tasdiqlash xatosi)
      }
    };

    fetchTopRatedProducts(); // Komponent o'rnatilganda olingan ma'lumotlar tezlik bilan
  }, []);

  return (
    <div className="rated-container">
      <h1>MOST TOP RATED PRODUCTS</h1>
      <div className="card-list">
        {topRatedProducts.map(product => (
          <div key={product.id} className="card">
            <img src={product.image} alt={product.name} className="card-image" />
            <div className="card-content">
              <h3 className="card-title">{product.name}</h3>
              {/* <p className="card-description">{product.description}</p> */}
              <p className="card-rating">Rating: ${product.rating}</p>
              <p className="card-price">Price: ${product.price}</p>
             
              {/* Boshqa ma'lumotlar kerak bo'lsa ularni ham qo'shish */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rated;
 