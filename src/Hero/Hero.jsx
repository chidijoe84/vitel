import React from 'react'
import  './Hero.css';
import connect from '../assets/connect.jpg'

const Hero = () => {
  return (
    <div className='main-hero'>
      <div className='circle'>
        <p>
        Get Connected
        </p>
       
      </div>
      <div className='side-img'>
        <img src={connect} alt='connect' className='connect'/>
      </div>
      <div className='hero-text'>
        <h1 className='text'>UNIFYING <br/>COMMUNICATION</h1>
        <p>GSM Numbers + VoIP + <br /> IoT + VAS</p>
        
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fillOpacity="1" d="M0,224L48,202.7C96,181,192,139,288,133.3C384,128,480,160,576,154.7C672,149,768,107,864,80C960,53,1056,43,1152,53.3C1248,64,1344,96,1392,112L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      </div>
    </div>
  )
}

export default Hero