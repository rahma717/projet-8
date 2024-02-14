import React from 'react';
import { NavLink } from 'react-router-dom';


const Logo = () => {
    return (
        <NavLink to="/">
        <div className='logo'>
      <img src='./images/LOGO.png' alt='Logo Kasa'/>
      </div>
      </NavLink>
    );
};

export default Logo;