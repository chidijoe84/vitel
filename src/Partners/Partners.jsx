import React, {useEffect} from 'react'
import './Partners.css'
import gistme from '../assets/gist (2).png'
import ontrac from '../assets/ontrac.png'
import mtn from '../assets/mtn.png'
import ncc from '../assets/ncc (2).png'
import AOS from 'aos';
import 'aos/dist/aos.css'

const Partners = () => {

    useEffect(()=>{
      AOS.init({duration: 2000});
    }, []);
  
  return (
<div className='part' id='partners' data-aos="zoom-in">
        <div><h1 className='head'><span className='our'>Our</span> Partners <hr/></h1> </div> 
  <div className='main-content'>
    
     <img src={gistme} alt='gistme' className='log log1'/>
     <img src={ontrac} alt='ontrac tec' className='log log4' />
     <img src={mtn} alt='MTN'  className='log log3'/>
     <img src={ncc} alt='NCC' className='log2'/>
  </div>
</div>
   
  )
}

export default Partners