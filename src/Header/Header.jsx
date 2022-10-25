import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div>
        <div className='top-nav'>
            <a href='$'>Sales </a>
            <a href='#'>| Support 0803777-3444 </a>
            <a href='#'>| Request Quote </a>
            <a href='#'>| Signup </a>
            <a href='#'>| Login</a>
        </div>

        <div className='menu-items'>
            <div><img src='vitel-wireless-web\src\assets\logo.jpg' alt='logo'/></div>
            <div className='menu-ind-item'>
            <a href='$'>Sales </a>
            <a href='#'>| Support 0803777-3444 </a>
            <a href='#'>| Request Quote </a>
            <a href='#'>| Signup </a>
            <a href='#'>| Login</a>
            </div>

        </div>
    </div>
  )
}

export default Header