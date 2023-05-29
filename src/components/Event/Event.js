import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBirthdayCake,faGift, faGlassCheers, faCalendarCheck, faUsers ,faRunning  } from '@fortawesome/free-solid-svg-icons';

export default function Event() {
  return (
    <div>
      <div class="service_area bg-event">
        <div class="container">
          <div class="row">
            <div class="col-xl-12">
              <div class="section_title ">
                <h1 style={{fontSize: "60px"}}>Our Services</h1>
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
                <h4 className="card-title">Birthday Catering</h4>
                <p>
                Celebrate with our exceptional birthday catering services. Customized menus, professional service, and unforgettable experiences. Contact us today for an extraordinary celebration.
                </p>
              </div>
            </div>
            <div class="col-xl-4 col-md-6">
              <div class="single_service">
                <div class="service_icon">
                <FontAwesomeIcon icon={faGift}  size="4x" color="rgb(205,164,94)" className="custom-icon" />
                </div>
                <h4 className="card-title">Wedding Service</h4>
                <p>
                Experience our impeccable wedding catering services, creating unforgettable culinary moments for your special day. Trust us to deliver exceptional flavors and professional service.
                </p>
              </div>
            </div>
            <div class="col-xl-4 col-md-6">
              <div class="single_service">
                <div class="service_icon">
                <FontAwesomeIcon icon={faGlassCheers}  size="4x" color="rgb(205,164,94)" className="custom-icon" />
                </div>
                <h4 className="card-title">Party Catering</h4>
                <p>
                Elevate your party with our exceptional catering services, delivering delectable flavors and professional service to make your event unforgettable. Trust us to deliver professional service.
                </p>
              </div>
            </div>
            <div class="col-xl-4 col-md-6">
              <div class="single_service">
                <div class="service_icon">
                <FontAwesomeIcon icon={faCalendarCheck}  size="4x" color="rgb(205,164,94)" className="custom-icon" />
                </div>
                <h4 className="card-title">Event Catering</h4>
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
                <h4 className="card-title">Corporate Service</h4>
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
                <h4 className="card-title">Catering On Demand</h4>
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
