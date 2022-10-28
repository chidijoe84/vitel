import React from 'react'
import './Partners.css'
import gistme from '../assets/gist (2).png'
import ontrac from '../assets/ontrac.png'
import mtn from '../assets/mtn.png'
import ncc from '../assets/ncc (2).png'

const Partners = () => {
  return (
    <div className='part'>
     <div><h1 className='head'><span className='our'>Our</span> Partners <hr/></h1> </div> 
    <div className='main-content'>
    
     <img src={gistme} alt='gistme' className='log'/>
     <img src={ontrac} alt='ontrac tec' className='log' />
     <img src={mtn} alt='MTN'  className='log'/>
     <img src={ncc} alt='NCC' className='log2'/>
    </div>
    </div>
   
  )
}

export default Partners