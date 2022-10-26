import React from 'react';
import logo from '../assets/logo.png'
import './Header.css';

const Header = () => {
  return (
    <div>
        <div className='top-nav'>
            <a href='$'>Sales </a>
            <a href='#'> | Support 0803777-3444 </a>
            <a href='#'> | Request Quote </a>
            <a href='#'> | Signup </a>
            <a href='#'> | Login</a>
        </div>

        <div className='menu-items'>
            <div className='logo'><img src={logo} alt='logo'/></div>
            <div className='menu-ind-item'>
            <a href='$'> PRODUCTS </a>
            <a href='#'> | SOLUTIONS  </a>
            <a href='#'> | PARTNERS  </a>
            <a href='#'> | COMPANY</a>
            </div>

        </div>
    </div>
  )
}

export default Header