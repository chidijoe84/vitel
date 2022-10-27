import React from 'react'
import  './Management.css';
import aisha from '../assets/aisha.png'
import mfong from '../assets/mfong.png'
import samson from '../assets/samson.png'
import simon from '../assets/simon.png'

const Management = () => {
  return (
    <div className='manage'>
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