import React, { useEffect, useState } from 'react';
import axios from 'axios';
import  '../../App.css';
import { Link } from "react-router-dom";



export default function New() {
  const [valu, setValue] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:4000/user');
      setValue(response.data.teas);
    };
    fetchData();
  }, []);

  return (
    <div>
    <p className='para'>Our Tea Menu</p>
    <div className="main_container">
      {valu.map(item => (
        <div className="product-card" key={item.id}>
          <div className="product-image"><img src={item.image} alt={item.title} /></div>
          <h2 className="product-title">{item.title}</h2>
          <p className="product-price">{item.price}</p>
          <p className="product-description">{item.description}</p>
          <Link to = "/Cart" className="product-button">Add to Cart</Link>

        </div>
  ))}
    </div>
    </div>
  );
}



