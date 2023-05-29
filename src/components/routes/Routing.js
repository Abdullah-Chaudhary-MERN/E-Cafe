import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'
import Header from '../Header/Header'
import Home from "../Home/index"
import Cart from "../CheckOut/Cart"
import Reservation from '../Reservation/Reservation';
import AboutUs from "../AboutUs/AboutUs"

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

        </Routes>
      </BrowserRouter>
    </div>
  )
}
