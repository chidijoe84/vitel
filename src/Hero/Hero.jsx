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
      <div className='hero-bolb' />
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
        
       
      </div>
  </div>
  )
}

export default Hero