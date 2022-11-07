import React, {useEffect} from 'react'
import  './Hero.css';
import connect from '../assets/connect.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css'
import Slider from './slider/Slider';

const Hero = () => {
  useEffect(()=>{
    AOS.init({duration: 2000});
  }, []);

  return (
    <div className='main-hero' data-aos="zoom-in" id='hero'>
       <div className='side-img'>
        <Slider/>
      </div> 
      <div className='hero-bolb' data-aos="slide-right"/>
      <div className='hero-text'>
        <h1 className='text'>VITEL <span className='edd'>WIRELESS</span> LIMITED</h1>
       <h2> UNIFYING COMMUNICATION USING </h2>
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
        
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1410 218"><path fill="#0099ff" fillOpacity="1" d="M0,224L48,202.7C96,181,192,139,288,133.3C384,128,480,160,576,154.7C672,149,768,107,864,80C960,53,1056,43,1152,53.3C1248,64,1344,96,1392,112L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,319Z"></path></svg>
        
      </div>
  </div>
  )
}

export default Hero