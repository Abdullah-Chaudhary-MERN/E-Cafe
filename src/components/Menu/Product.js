import React from 'react'
import {Link,Outlet} from 'react-router-dom'
import  '../../App.css';


export default function Product() {
  return (

    <div className='main_body'>
    <div class="section-title">
          <h2>Menu</h2>
          <p>Check Our Tasty Menu</p>
        </div>
    <nav className='menu_product'>
      <ul>
       <li><Link className="active" to='Coffee'> Coffee</Link></li>
       <li><Link  to='Tea'>Tea</Link></li>
       <li><Link to='BakeryItams'>Bakery Items</Link></li>
       <li><Link to='ColdBeverages'>Cold Beverages</Link></li>
       <li><Link to='Sandwich'>Sandwichs & Burgers</Link></li>
       <li><Link to='Desserts'>Desserts</Link></li>
       </ul>
    </nav>
    <Outlet/>
    
    </div>

  )
}
