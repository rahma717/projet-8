import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';


function Navigation() {
 return(
  <nav className='Navigation'>
      <ul className='Navigation_links'>
        <li><NavLink to="/">Accueil</NavLink></li>
        <li><NavLink to="/about">A Propos</NavLink></li>
      </ul>
  </nav>
 );
}

export default Navigation;