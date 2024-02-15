import React, { useEffect } from "react";
import "./Hero.css";
import { IoIosArrowRoundDown } from "react-icons/io";
import worldmap from '../assets/worldmap.png'
import locationPin from '../assets/locationPin2.png'
import Typed from "react-typed";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "./slider/Slider";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className='hero-sectionTxt' data-aos='zoom-in' id='hero'>
      {/* <div className='side-img'>
        <Slider/>
      </div> 
      <div className='hero-bolb' />
      <div className='hero-text'>
        <h1 className='text'>VITEL <span className='edd'>WIRELESS</span> LIMITED</h1>
       <Typed
       strings={[
      
        "<h2> UNIFYING COMMUNICATION USING </h2>"
       ]}

       typeSpeed={150}
       backSpeed={100}
       loop
       />
       <p className='gsm'>GSM Numbers + VoIP + IoT + VAS</p>

       <p className='info'><span>to provide telecommunication services,<br/>software development,sales and installation  of computers and accessories inclusive of wireless communications
        accessories.</span></p>

       <div className='circle2'>
        <p>
        Get Connected
        </p>
       
      </div>

      <button className='span1'>Sign up</button>
      <button className='span2'>Register</button>
        
       
      </div> */}

      <div className='content_hero'>
        <h1 className='tourTech'>
          <span className='limited'>VITEL WIRELESS</span> LIMITED{" "}
        </h1>
        <p>
          Unifying Communications Using GSM Numbers + VoIP + IoT + VAS to
          provide telecommunication services,software development,sales and
          installation of computers and accessories inclusive of wireless
          communications accessories.
        </p>
        <a href='#' className='cta-button'>
          Get Started
        </a>
        <div class='vertical-line'></div>
      </div>

      <div className='parentDivArrow'>
        <div className='divArrow'>
          <IoIosArrowRoundDown />
        </div>
      </div>
      <div className='hero-background'>
        <img src={worldmap} alt='' className='heroBackImage' />
        <img src={locationPin} alt='' className='heroBackImageSecon' />
      </div>

      <div className='services'>
        <div className='sectionName'>services</div>
        <div className='parentServices'>
          <div className='ogaBoizMain'>
            <a href='http://10.0.5.51:3010/#/secureme-app' target='_blank'>
              <div className='ogaBoiz'>
                <img
                  src='https://www.vidyohealth.com/wp-content/uploads/2020/04/userlogon-secure.jpg'
                  alt=''
                />
              </div>
              SECURE ME
            </a>
          </div>
          <div className='ogaBoizMain'>
            <a href='http://10.0.5.51:3010/#/oga-app' target='_blank'>
              <div className='ogaBoiz'>
                <img
                  src='https://play-lh.googleusercontent.com/eq9swgM6k2BrEznupctPvyhGo6EO5LcfnD6kHAu8TTvZ5s6Wn-2jtaITEQf4bhps1nCa=w240-h480-rw'
                  alt=''
                />
              </div>
              OGA APP
            </a>
          </div>
          <div className='ogaBoizMain'>
            <a href='http://10.0.5.51:3010/#/login' target='_blank'>
              <div className='ogaBoiz'>
                <img src='https://t4.ftcdn.net/jpg/06/29/48/15/360_F_629481580_lgurET20CovhGhfSwnuk8LdT93UGgNiR.jpg' />
              </div>
              CLBS
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
