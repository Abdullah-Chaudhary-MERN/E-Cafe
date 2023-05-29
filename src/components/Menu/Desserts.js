import React, { useEffect, useState } from 'react';
import axios from 'axios';
import  '../../App.css';


export default function Desserts() {
  const [valu, setValue] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:4000/user');
      setValue(response.data.desserts);
    };
    fetchData();
  }, []);

  return (
    <div className="main_container">
      {valu.map(item => (
        <div className="product-card" key={item.id}>
          <div className="product-image"><img src={item.image} alt={item.title} /></div>
          <h2 className="product-title">{item.title}</h2>
          <p className="product-price">{item.price}</p>
          <p className="product-description">{item.description}</p>
          <a href="#" className="product-button">Add to Cart</a>
        </div>
  ))}
    </div>
  );

}



