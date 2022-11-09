import React from "react";
//import {FaYoutube, FaTwitter, FaFacebook, FaInstagramSquare} from 'react-icons/fa';
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <footer className="site-footer">
        <div className="container">
          <div className="rows">
            <div className="about">
              <h6>About</h6>
              <p className="text-justify">
                Virtel Wireless{" "}
                <i>
                  focus on vertical market solutions for IoT and VAS in Africa{" "}
                </i>{" "}
                for industries and markets that can benefit on using
                location-based data to improve on business performances. Our M2M
                e-SIM and physical SIM has revolutionized innovation in Africa’s
                mobile industry as well as enable creation of hundreds of
                thousands of jobs.{" "}
              </p>
            </div>
            <div className="main-footer-links">
              <div className="cat">
                <h6>Categories</h6>
                <ul className="footer-links">
                  <li>
                    <a href="/#hero">Sales</a>
                  </li>
                  <li>
                    <a href="/#hero" >Support 0803777-3444 </a>
                  </li>
                  <li>
                    <a href="/#hero" >Request Quote </a>
                  </li>
                  <li>
                    <a href="/#hero" >Signup </a>
                  </li>
                  <li>
                    <a href="/#hero">Login</a>
                  </li>
                </ul>
              </div>

              <div className="Quick">
                <h6>Quick Links</h6>
                <ul className="footer-links">
                  <li>
                    <a href="/#product">PRODUCTS </a>
                  </li>
                  <li>
                    <a href="/#hero">SOLUTIONS </a>
                  </li>
                  <li>
                    <a href="/#partner">PARTNERS </a>
                  </li>
                  <li>
                    <a href="/#company">COMPANY</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr />
        </div>
        <div className="containers">
          <div className="row">
            <div className="copy">
              <p className="copyright-text">
                Copyright &copy; 2022 All Rights Reserved by{" "}
                <a href="/#hero">Vitel Wireless</a>.
              </p>
            </div>

            {/* <div class="social">
              <ul class="social-icons">
                
                <li>
                  <a class="facebook" href="#">
                    <i class="fa fa-facebook"></i>
                    <FaFacebook  className="face" color="white" size='30px'/>
                  </a>
                </li>
                <li>
                  <a class="twitter" href="#">
                    <i class="fa fa-twitter"></i>
                    <FaTwitter  className="twitter" color="white" size='30px'/>
                  </a>
                </li>
                <li>
                  <a class="dribbble" href="#">
                  <FaYoutube className="you" color="white" size='30px' />
                  </a>
                </li>
                <li>
                  <a class="linkedin" href="#">
                    <i class="fa fa-linkedin"></i>
                    <FaInstagramSquare className="insta" color="white" size='30px'/>
                  </a>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
