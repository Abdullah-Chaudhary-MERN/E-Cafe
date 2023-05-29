import React, { useEffect, useState } from 'react';
import axios from 'axios';
import  '../../App.css';

export default function Coffee() {
  const [valu, setValue] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:4000/user');
      setValue(response.data.coffee);
    };
    fetchData();
  }, []);

  return (
    <div className="main_container">
      {valu.map(item => (
        <div className="product-card" key={item.id}>
          <div className="product-image"><img src={item.image} alt={item.productTitle} /></div>
          <h2 className="product-title">{item.productTitle}</h2>
          <p className="product-price">{item.price}</p>
          <p className="product-description">{item.description}</p>
          <a href="#" className="product-button">Add to Cart</a>
        </div>
  ))}
    </div>
  );
}
