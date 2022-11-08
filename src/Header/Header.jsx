import React from 'react';
import logo from '../assets/logo.png'
import './Header.css';
import MobileMenu from './MobileMenu';

const Header = ({open}, props) => {
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
            <div className='logo'><a href='/#hero'><img src={logo} alt='logo'/></a></div>
          <div className='menu'>
            <a href='/'>  SOLUTIONS  </a>
            <a href='/#product'> | PRODUCTS </a>
            <a href='/#company'> | COMPANY</a>
            <a href='/#partners'> | PARTNERS  </a>
            <a href='/#management'> | MANAGEMENT TEAM</a>
          </div>

          <MobileMenu isMobile={true} closeMobileMenu={props.closeMobileMenu} />
        </div>
    </div>
  )
}

export default Header