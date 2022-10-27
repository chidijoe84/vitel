import React from 'react'
import './Partners.css'
import gistme from '../assets/gist.png'
import ontrac from '../assets/ontrac.png'
import mtn from '../assets/mtn.png'
import Ncc from '../assets/Ncc.jpg'

const Partners = () => {
  return (
    <div className='part'>
     <div><h1 className='head'><span className='our'>Our</span> Partners <hr/></h1> </div> 
    <div className='main-content'>
    
      <div className='image'><img src={gistme} alt='gistme'/></div>
      <div className='image image2'><img src={ontrac} alt='ontrac tec' className='image2'/></div>
      <div className='image image2'><img src={mtn} alt='MTN'   className='image2'/></div>
      <div className='image'><img src={Ncc} alt='NCC'/></div>
    </div>
    </div>
   
  )
}

export default Partners