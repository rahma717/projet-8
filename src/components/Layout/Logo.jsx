import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';
// creation d'un composant Logo

const Logo = () => {
    return (
        <NavLink to="/">
        <div className='logo'>
      <img src={logo} alt='Logo Kasa'/>
      </div>
      </NavLink>
    );
};

export default Logo;