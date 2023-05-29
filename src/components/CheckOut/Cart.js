import React from 'react';

import bagg from './Asset/bag.jpg';
import style from "./style.css";
export default function Cart() {
  return (
    <>
        	
    <div>
      </div>
      <div className="nav-switch">
        <i className="fa fa-bars" />
      </div>
      
  <div className="page-area cart-page spad">
    <div className="container">
      <div className="cart-table">
        <table>
          <thead>

            <tr>
              <th className="product-th">Product</th>
              <th className='pro'>Price</th>
              <th className='pro'>Quantity</th>
              <th className="total-th">Total</th>
            </tr>

          </thead>
          <tbody>
            <tr>
              <td className="product-col">
                <img src={bagg}  />
                <div className="pc-title">
                  <h4>Black Shoulder Bag</h4>
                  <a href="#">Edit Product</a>
                </div>
              </td>
              <td className="price-col">$59.90</td>
              <td className="quy-col">
                <div className="quy-input">
                  <span className='qt'>Qty</span>
                  <input type="number" />
                </div>
              </td>
              <td className="total-col">$59.90</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="row cart-buttons">
        <div className="col-lg-5 col-md-5">
          <div className="site-btn btn-continue">Continue shooping</div>
        </div>
        <div className="col-lg-7 col-md-7 text-lg-right text-left">
          <div className="site-btn btn-clear">Clear cart</div>
          <div className="site-btn btn-line btn-update">Update Cart</div>
        </div>
      </div>
    </div>
    <div className="card-warp">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="shipping-info">
              <h4>Shipping method</h4>
              <p>Select the one you want</p>
              <div className="shipping-chooes">
                <div className="sc-item">
                  <input type="radio" name="sc" id="one" />
                  <label htmlFor="one">Next day delivery<span>$4.99</span></label>
                </div>
                <div className="sc-item">
                  <input type="radio" name="sc" id="two" />
                  <label htmlFor="two">Standard delivery<span>$1.99</span></label>
                </div>
                <div className="sc-item">
                  <input type="radio" name="sc" id="three" />
                  <label htmlFor="three">Personal Pickup<span>Free</span></label>
                </div>
              </div>
              <h4>Cupon code</h4>
              <p>Enter your cupone code</p>
              <div className="cupon-input">
                <input type="text" className='txt' />
                <button className="site-btn">Apply</button>
              </div>
            </div>
          </div>
          <div className="offset-lg-2 col-lg-6">
            <div className="cart-total-details">
              <h4>Cart total</h4>
              <p>Final Info</p>
              <ul className="cart-total-card">
                <li>Subtotal<span>$59.90</span></li>
                <li>Shipping<span>Free</span></li>
                <li className="total">Total<span>$59.90</span></li>
              </ul>
              <a className="site-btn btn-full" href="checkout.html">Proceed to checkout</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Footer top section */}	
  {/* <section className="footer-top-section home-footer">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-8 col-sm-12">
          <div className="footer-widget about-widget">
            <img src="img/logo.png" className="footer-logo" alt />
            <p>Donec vitae purus nunc. Morbi faucibus erat sit amet congue mattis. Nullam fringilla faucibus urna, id dapibus erat iaculis ut. Integer ac sem.</p>
            <div className="cards">
              <img src={visa}  />
              <img src={pic4} alt />
              <img src={pic3} alt />
              <img src={pic2} alt />
              <img src={pic1} alt />
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-6">
          <div className="footer-widget">
            <h6 className="fw-title">usefull Links</h6>
            <ul>
              <li><a href="#">Partners</a></li>
              <li><a href="#">Bloggers</a></li>
              <li><a href="#">Support</a></li>
              <li><a href="#">Terms of Use</a></li>
              <li><a href="#">Press</a></li>
            </ul>
          </div>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-6">
          <div className="footer-widget">
            <h6 className="fw-title">Sitemap</h6>
            <ul>
              <li><a href="#">Partners</a></li>
              <li><a href="#">Bloggers</a></li>
              <li><a href="#">Support</a></li>
              <li><a href="#">Terms of Use</a></li>
              <li><a href="#">Press</a></li>
            </ul>
          </div>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-6">
          <div className="footer-widget">
            <h6 className="fw-title">Shipping &amp; returns</h6>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Track Orders</a></li>
              <li><a href="#">Returns</a></li>
              <li><a href="#">Jobs</a></li>
              <li><a href="#">Shipping</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-6">
          <div className="footer-widget">
            <h6 className="fw-title">Contact</h6>
            <div className="text-box">
              <p>Your Company Ltd </p>
              <p>1481 Creekside Lane  Avila Beach, CA 93424, </p>
              <p>+53 345 7953 32453</p>
              <p>office@youremail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section> */}
  {/* Footer top section end */}	
  {/* Footer section */}
  {/* <footer className="footer-section">
    <div className="container">
      <p className="text-center text-md-end text-xl-start"> 
        All Rights Reserved
      </p>
    </div>
  </footer> */}
  {/* Footer section end */}


    </>
  )
}
