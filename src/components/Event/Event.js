import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBirthdayCake,faGift, faGlassCheers, faCalendarCheck, faUsers ,faRunning  } from '@fortawesome/free-solid-svg-icons';

export default function Event() {
  return (
    <div>
      <div class="service_area">
        <div class="container">
          <div class="row">
            <div class="col-xl-12">
              <div class="section_title ">
                <h1 style={{fontSize: "50px"}}>Our Services</h1>
                <p>
                  inappropriate behavior is often laughed off as “boys will be
                  boys,” women face higher conduct standards <br /> especially
                  in the workplace. That’s why it’s crucial that, as women.
                </p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-xl-4 col-md-6">
              <div class="single_service">
                <div class="service_icon">
                <FontAwesomeIcon icon={faBirthdayCake}  size="4x" color="rgb(205,164,94)" className="custom-icon" />
                </div>
                <h4>Birthday Catering</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
            <div class="col-xl-4 col-md-6">
              <div class="single_service">
                <div class="service_icon">
                <FontAwesomeIcon icon={faGift}  size="4x" color="rgb(205,164,94)" className="custom-icon" />
                </div>
                <h4>Wedding Service</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
            <div class="col-xl-4 col-md-6">
              <div class="single_service">
                <div class="service_icon">
                <FontAwesomeIcon icon={faGlassCheers}  size="4x" color="rgb(205,164,94)" className="custom-icon" />
                </div>
                <h4>Party Catering</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
            <div class="col-xl-4 col-md-6">
              <div class="single_service">
                <div class="service_icon">
                <FontAwesomeIcon icon={faCalendarCheck}  size="4x" color="rgb(205,164,94)" className="custom-icon" />
                </div>
                <h4>Event Catering</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
            <div class="col-xl-4 col-md-6">
              <div class="single_service">
                <div class="service_icon">
                <FontAwesomeIcon icon={faUsers}  size="4x" color="rgb(205,164,94)" className="custom-icon" />
                </div>
                <h4>Corporate Service</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
            <div class="col-xl-4 col-md-6">
              <div class="single_service">
                <div class="service_icon">
                <FontAwesomeIcon icon={faRunning}  size="4x" color="rgb(205,164,94)" className="custom-icon" />
                </div>
                <h4>Catering On Demand</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
