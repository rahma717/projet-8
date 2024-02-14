import React from 'react';
import { NavLink } from 'react-router-dom';
import Layouts from '../components/Layout/Layout';
import "./Error404.css";
// composant qui gère la page d'erreur

const Error404 = () => {
  return (
    <Layouts>
    <div className='error404'>
      <h1>404</h1>
      <h3>Oups! La page que vous demandez n'existe pas.</h3>
      {/* Ajoutez du contenu supplémentaire ou des liens vers la page d'accueil, etc. */}
    <NavLink to= "/">
      <span>Retourner sur la page d'accueil</span>
    </NavLink>
    </div>
    </Layouts>
  );
};

export default Error404;