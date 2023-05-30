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
export default function Routing() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <NavBar/>
        <Routes>
            <Route exact path={'/'} Component = {Home} />
            <Route exact path={'/Reservation'} Component={Reservation}/>
            <Route exact path={'/Cart'} Component={Cart}/>
            <Route exact path={'/AboutUs'} Component={AboutUs}/>
            <Route exact path='/' Component = {Header} />
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
      </BrowserRouter>
    </div>
  )
}
