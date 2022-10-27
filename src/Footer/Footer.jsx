import React from 'react'
import  './Footer.css';
const Footer = () => {
  return (
    <div>
      <footer class="site-footer">
      <div class="container">
        <div class="rows">
          <div class="about">
            <h6>About</h6>
            <p class="text-justify">Virtel Wireless <i>focus on vertical market solutions for IoT and VAS in Africa </i> for industries and markets that can benefit on using location-based data to improve on business performances. Our M2M e-SIM and physical SIM has revolutionized innovation in Africa’s mobile industry as well as enable creation of hundreds of thousands of jobs.  </p>
          </div>

          <div class="cat">
            <h6>Categories</h6>
            <ul class="footer-links">
              <li><a href="#">Sales</a></li>
              <li><a href="#">Support 0803777-3444 </a></li>
              <li><a href="#">Request Quote </a></li>
              <li><a href="#">Signup </a></li>
              <li><a href="#">Login</a></li>
              
            </ul>
          </div>

          <div class="Quick">
            <h6>Quick Links</h6>
            <ul class="footer-links">
              <li><a href="#">PRODUCTS </a></li>
              <li><a href="#">SOLUTIONS </a></li>
              <li><a href="#">PARTNERS </a></li>
              <li><a href="#">COMPANY</a></li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
      <div class="containers">
        <div class="row">
          <div class="copy">
            <p class="copyright-text">Copyright &copy; 2022 All Rights Reserved by 
         <a href="#">Vitel Wireless</a>.
            </p>
          </div>

          <div class="social">
            <ul class="social-icons">
              <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
              <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
              <li><a class="dribbble" href="#"><i class="fa fa-dribbble"></i></a></li>
              <li><a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>   
            </ul>
          </div>
        </div>
      </div>
</footer>
    </div>
  )
}

export default Footer