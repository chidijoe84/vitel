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
    <div className='company'>
      <div className='clip'/>
      <div className='company-text'>
        <h1>our Company <hr /></h1> 
        <p>{isReadMore ? children : children.substr(0, 400)}</p>

        <button onClick={toggleBtn}>{isReadMore ? "Read less" : "...Read more" }</button>
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
  )
}

export default Company