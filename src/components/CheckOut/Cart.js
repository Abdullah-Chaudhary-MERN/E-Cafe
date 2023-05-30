import React from 'react';
// import bagg from './Asset/bag.jpg';
import "./style.css";
import { IoIosArrowForward } from "react-icons/io";
import {Link} from 'react-router-dom'

export default function Cart() {
  return (
    <>
        	<section className='sec'>
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
          </section>
    <div>
      </div>
      <div className="nav-switch">
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
                {/* <img src={bagg}  /> */}
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
          <div className="site-btn btn-line btn-update"><a>Update Cart</a></div>
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
    </>
  )
}
