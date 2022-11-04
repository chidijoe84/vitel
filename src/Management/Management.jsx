import React, {useEffect} from 'react'
import  './Management.css';
import aisha from '../assets/aisha.png'
import mfong from '../assets/mfong.png'
import samson from '../assets/samson.png'
import simon from '../assets/simon.png'
import AOS from 'aos';
import 'aos/dist/aos.css'

const Management = () => {
  
useEffect(()=>{
  AOS.init({duration: 2000});
}, []);

  return (
    <div className='manage' id='management' data-aos="fade-up">
      <h1>Our <span className='title'>Management </span>Team</h1>
      <hr/>
      <div className='manage-team'>
        <div className='team-pix'><img src={aisha} alt='management'/></div> 
        <div className='team-pix'><img src={mfong} alt='management'/></div>
        <div className='team-pix'><img src={simon} alt='management'/></div>
       <div className='team-pix'><img src={samson} alt='management'/></div>
      </div>
    </div>
  )
}

export default Management