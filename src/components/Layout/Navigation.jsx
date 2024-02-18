import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

// création d'un composant qui gére la barre de navigation
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