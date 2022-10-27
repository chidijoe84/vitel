import React, { useState } from 'react'
import think from '../assets/think.jpg';
import think2 from '../assets/think2.jpg';
import big from '../assets/big.jpg';
import download from '../assets/download.jfif';
import connect from '../assets/connect.jpg';
import './Company.css'
const Company = ({ children }) => {
const [isReadMore, setIsReadMore] = useState(false);

const toggleBtn = () => {
  setIsReadMore(prevState => !prevState)
}

  return (
    <>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 318"><path fill="#0099ff"  d="M0,224L48,208C96,192,192,160,288,176C384,192,480,256,576,288C672,320,768,320,864,288C960,256,1056,192,1152,170.7C1248,149,1344,171,1392,181.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
    <div className='company'>
      <div className='clip'/>
      <div className='company-text'>
        <h1>our Company <hr /></h1> 
        <p>{isReadMore ? children : children.substr(0, 400)}</p>

        <button onClick={toggleBtn} className='btn'>{isReadMore ? "Read less" : "...Read more" }</button>
      </div>
      <div className='section2'>
      <div className='section3'> 
      <img src={think} alt=''/>
      <div>
        <h3>Thinking Big and Thinking Outside the Box </h3>
        <p>When it comes to how you connect and how you should communicate, Vitel is the only company to give you a solution that bundles data, airtime, and devices into one package. Your phone number is works anywhere there is network of MTN, Airtel, Glo, 9Mobile, MAFAB (5G Network), and Ntel (4G Network). </p>
        </div>
      </div>

      <div className='section3 mid'> 
      <img src={think2} alt=''/>
      <div>
        <h3>More Options and Less Money</h3>
        <p>Our radical approach to IoT and VAS integrated solution means that everything we offer, from cloud-based telephone solution, Conference Bridging, Employee performance measurement, to Smart home & Smart city solution are delivered securely and at least cost possible.</p>
        </div>
      </div>

      <div className='section3 last'> 
      <img src={think2} alt=''/>
      <div>
        <h3>Remote Workforce are now part of mainstream business </h3>
        <p>Being apart and working remotely doesn’t mean collaboration and communication will reduce, with Cloud solutions from Vitel, communications is as simply as Push-to-Talk mobile and desktop devices 
              </p>
              </div>
      </div>
      </div>
    </div>
    </>
  )
}

export default Company