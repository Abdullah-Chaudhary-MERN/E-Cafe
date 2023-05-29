import React from "react";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

import Image from "../../assets/img/ReservationBack.jpg";

export default function Reservation() {
  return (
    <div className="section-with-background">
      <section
        class="hero-wrap hero-wrap-2"
        data-stellar-background-ratio="0.5"
      >
        <div class="overlay"></div>
        <div class="container">
          <div class="row no-gutters slider-text align-items-end justify-content-center">
            <div class="col-md-9  text-center mb-4">
              <div className="backimg"></div>
              <h1 class="mb-2 bread">Book a Table</h1>
              <p class="breadcrumbs">
                <span class="mr-2">
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Home
                    <IoIosArrowForward size={15} color="black" />
                  </Link>
                </span>
                <span>
                  <a style={{ textDecoration: "none", color: "black" }}>
                    Reservation
                    <IoIosArrowForward size={15} color="black" />
                  </a>
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container-fluid row">
          <div className="col col-md-6 d-flex align-items-stretch pb-5 pb-md-0">
            <div
              className="image-container"
              style={{
                backgroundImage: `url(${Image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                flex: "1",
                height: "500px",
                marginTop: "100px",
              }}
            ></div>
          </div>
          <div className="col-md-6 p-4 p-md-5 pt-5">
            <div className="py-md-5">
              <div className="heading-section mb-5">
                <span>Book a table</span>
                <h2 className="mb-4">Make Reservation</h2>
              </div>
              <form action="#">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Name"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Email"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Phone</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Phone"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Date</label>
                      <input
                        type="text"
                        className="form-control"
                        id="book_date"
                        placeholder="Date"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Time</label>
                      <input
                        type="text"
                        className="form-control"
                        id="book_time"
                        placeholder="Time"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 select-arrow">
                    <div className="form-group">
                      <label>Person</label>
                      <div className="select-arrow">
                        <select name="" id="" className="form-control">
                          <option value="">Person</option>
                          <option value="">1</option>
                          <option value="">2</option>
                          <option value="">3</option>
                          <option value="">4+</option>
                        </select>
                        <div className="arrow-container">
                          <IoIosArrowDown className="arrow-icon" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 mt-3">
                    <div className="form-group">
                      <input
                        type="submit"
                        value="Make a Reservation"
                        className="btn btn-primary py-3 px-5 btn bg-dark"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
