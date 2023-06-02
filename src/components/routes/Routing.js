import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'
import Header from '../Header/Header'
import Home from "../Home/index"
import Cart from "../CheckOut/Cart"
import Reservation from '../Reservation/Reservation';
import AboutUs from "../AboutUs/AboutUs"
import Product from '../Menu/Product';
import Colddrink from '../Menu/colddrink';
import Desserts from '../Menu/Desserts';
import Sandwich from '../Menu/sandwich';
import Coffee from '../Menu/coffee';
import Tea from '../Menu/Tea';
import Bakeryitams from '../Menu/bakeryitams';
import SignUp from "../login/signUp"
import LogIn from "../login/logIn"
import Footer from '../Footer/Footer'
// import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
// import SideBar from '../../Admin/React-Dashboard-main/src/components/Sidebar';
// import sidebar_menu from './constants/sidebar-menu';
// import './App.css';
// import Orders from './pages/Orders';
// import logIn from "../login/logIn"
export default function Routing() {
  return (
    <div>
      <BrowserRouter>
      <div>
      <Header/>
      <NavBar/>

        <Routes>
            <Route exact path={'/'} Component = {Home} />
            <Route exact path={'/Reservation'} Component={Reservation}/>
            <Route exact path={'/Cart'} Component={Cart}/>
            <Route exact path={'/AboutUs'} Component={AboutUs}/>
            <Route exact path='/SignUp' Component = {SignUp} />
            <Route exact path='/logIn' Component = {LogIn} />
            <Route exact path='/Reservation' Component={Reservation}/>
            <Route path='/Product' Component={Product}>
            <Route index Component={Coffee}/>
            <Route path='Coffee' Component={Coffee} />
            <Route path='Tea' Component={Tea} />
            <Route path='BakeryItams' Component={Bakeryitams} />
            <Route path='ColdBeverages' Component={Colddrink} />
            <Route path='Sandwich' Component={Sandwich} />
            <Route path='Desserts' Component={Desserts} />
          </Route>
        </Routes>
       < Footer />
        </div>
        {/* <div className='dashboard-container'>
        <SideBar menu={sidebar_menu} />
          
          <div className='dashboard-body'>
              <Routes> */}
                  {/* <Route path="*" element={<div></div>} /> */}
                  {/* <Route exact path="/login" element={<login/>} />
                  <Route exact path="/orders" element={< Orders/>} />
                  <Route exact path="/locations" element={<div></div>} />
                  <Route exact path="/profile" element={<div></div>} />
              </Routes>
          </div>
      </div> */}
      </BrowserRouter>
    </div>
  )
}
