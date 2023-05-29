import React, { useState } from "react";
import logo from "../../assets/img/hLogo.png";
import "../NavBar/navbar.css";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function NavBar() {
  const [isOpen, setisOpen] = useState(false);
  function handleClick() {
    setisOpen(!isOpen);
  }
  return (
    <div>
      <header id="header" className="fixed-top d-flex align-items-cente">
        <div className="container-fluid container-xl d-flex align-items-center justify-content-lg-between">
          <Link to="/" className="logo me-auto me-lg-0">
            <img src={logo} alt="" className="img-fluid" />
          </Link>
          <nav id="navbar" className="navbar order-last order-lg-0">
            <ul>
              <li>
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li>
                <a className="nav-link scrollto" href="#about">
                  Menu
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#menu">
                  About
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <Link
            to="/Reservation"
            className="book-a-table-btn scrollto d-none d-lg-flex"
          >
            Book a table
          </Link>
        </div>
        <div onClick={handleClick} className="text-white mobile-nav-bar-button">
          {isOpen ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
        </div>
        {isOpen ? (
          <div>
            <section className="mobile-nav-bar-code">
              <nav>
                <ul>
                  <li>
                    <Link to="/" className="nav-link">
                      Home
                    </Link>
                  </li>
                  <li>
                    <a className="nav-link scrollto" href="#about">
                      Menu
                    </a>
                  </li>
                  <li>
                    <a className="nav-link scrollto" href="#menu">
                      About
                    </a>
                  </li>
                  <li>
                    <a className="nav-link scrollto" href="#contact">
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
              <Link to="/Reservation" className="book-a-table-btn">
                Book a table
              </Link>
            </section>
          </div>
        ) : (
          <div></div>
        )}
      </header>
    </div>
  );
}
