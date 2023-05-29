import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Home from '../activity/Home/Home'
// import Index from '../activity/NavBar/index'
// import contactUs from '../activity/contactUs/contactUs'
// import register from '../activity/Register/register'
import NavBar from '../NavBar/NavBar'
// import NavBar from '../Admin/NavBarA'
import Header from '../Header/Header'
import Reservation from '../Reservation/Reservation';


export default function Routing() {
  return (
    <div>
      <BrowserRouter>
      <NavBar/>
        <Routes>
            <Route exact path={'/'} Component = {Header} />
            <Route exact path={'/Reservation'} Component={Reservation}/>

        </Routes>
      </BrowserRouter>
    </div>
  )
}
