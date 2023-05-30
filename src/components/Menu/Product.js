import React from 'react'
import {Link,Outlet} from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";
import  '../../App.css';


export default function Product() {
  return (

    <div className='main_body'>
    <div class="section-title">
          <h1>Menu</h1>
          <span class="mr-2">
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Home
                    <IoIosArrowForward size={15} color="white" />
                  </Link>
                </span>
                <span>
                  <a style={{ textDecoration: "none", color: "white" }}>
                    Menu
                    <IoIosArrowForward size={15} color="white" />
                  </a>
                </span>
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
