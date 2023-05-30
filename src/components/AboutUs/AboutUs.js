import React from "react";
import "../CheckOut/style.css";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

export default function AboutUs() {
  return (
    <>
      <div>
        
        <div className="about-section">
          <h1 className="top">About Us Page</h1>
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
                    About Us
                    <IoIosArrowForward size={15} color="white" />
                  </a>
                </span>
        </div>
        <div class="container2">
          <h2>About Us</h2>
          <p>
            Welcome to <strong>E CAFE</strong> We are not just your ordinary
            cafe; we are a unique culinary destination that combines the art of
            exceptional coffee with a diverse menu of delicious food offerings.
            Our passion for creating memorable experiences and fostering a sense
            of community sets us apart. At E Cafe, we understand that a cafe is
            more than just a place to grab a quick bite or a cup of coffee. It's
            a sanctuary where individuals come together to savor the simple joys
            of life. Whether you're seeking a quiet corner to work or a vibrant
            ambiance to connect with friends, we have created a space that
            caters to all. Our coffee is the heart and soul of E Cafe. We take
            pride in sourcing the finest beans from around the world, carefully
            roasted to perfection. From the first sip to the last, each cup is a
            celebration of rich flavors and unparalleled quality. Our skilled
            baristas are passionate about their craft and are dedicated to
            creating beautiful latte art and intricate designs, making every
            coffee a work of art.
          </p>

          <h2>Our Story</h2>
          <p>
            At <strong>E CAFE</strong>, we embarked on a journey to create a
            space that celebrates the art of coffee-making. Our passion for the
            perfect cup led us to source the finest beans from around the world.
            Through careful selection and expert roasting, we strive to bring
            out the unique flavors and aromas that make each sip a moment of
            pure bliss. And we believe in fostering a sense of community. We
            provide a welcoming and inclusive environment where individuals from
            all walks of life can come together, connect, and share their
            stories. Our friendly and attentive staff is committed to ensuring
            your visit is nothing short of extraordinary, with personalized
            service that goes above and beyond. Whether you're a coffee
            connoisseur, a food enthusiast, or simply looking for a cozy spot to
            unwind, E Cafe invites you to experience the perfect blend of
            flavors, warmth, and hospitality. We are more than just a cafe; we
            are a destination where memories are created, friendships are
            formed, and exceptional experiences are shared. Visit us today and
            let us take you on a culinary journey you won't soon forget.
          </p>
        </div>
        <h2  className="hh" style={{ textAlign: "center" }}>Our Team</h2>

    <div className="row">
          


         
      <div className="card card_container" style={{width: "18 rem"}}>
        <img src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3251108/person-icon-md.png" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">MOHAMMAD ABDULLAH</h5>
          <p className="card-text">
            SOFTWARE ENGINEER
          </p>
          <a href="#" className="btn btn-primary">
            Contact Me
          </a>
        </div>
      </div>

          
      <div className="card" style={{width: "18 rem "}}>
        <img src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3251108/person-icon-md.png" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">MUBASHIR AHMED</h5>
          <p className="card-text">
            PRODUCT DESIGNER
          </p>
          <a href="#" className="btn btn-primary">
            Contact Me  
          </a>
        </div>
      </div>

          
      <div className="card" style={{width: "18 rem "}}>
        <img src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3251108/person-icon-md.png" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">MOHAMMAD SOHAIB</h5>
          <p className="card-text">
            REACT DEVELOPER
          </p>
          <a href="#" className="btn btn-primary">
            Contact Me
          </a>
        </div>
      </div>


      <div className="card" style={{width: "18 rem "}}>
        <img src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3251108/person-icon-md.png" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">UMER</h5>
          <p className="card-text">
            SQA Engineer 
          </p>
          <a href="#" className="btn btn-primary">
            Contact Me
          </a>
        </div>
      </div>
    </div>

 </div>
    </>
  );
}
