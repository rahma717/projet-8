import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';
// creation du composant Logo

const Logo = () => {
    return (
      // Utilisation de NavLink pour lier le logo à la page d'accueil
        <NavLink to="/">
        <div className='logo'>
      <img src={logo} alt='Logo Kasa'/>
      </div>
      </NavLink>
    );
};

export default Logo;