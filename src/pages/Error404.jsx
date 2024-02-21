import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Error404.css";

// composant qui gère la page d'erreur

const Error404 = () => {
  return (
    <>
    <div className='error404'>
      <h1>404</h1>
      <h3>Oups! La page que vous demandez n'existe pas.</h3>
      {/* Ajoutez du contenu supplémentaire ou des liens vers la page d'accueil, etc. */}
    <NavLink to= "/">
      <span className='linkreturnhomepage'>Retourner sur la page d'accueil</span>
    </NavLink>
    </div>
    </>
  );
};

export default Error404;