import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Header from './components/Layout/Header.jsx';
import Footer from './components/Layout/Footer.jsx';
import Error404 from './pages/Error404.jsx';
import Home from './pages/Home';
import APropos from './pages/APropos.jsx';
import Logement from './pages/Logement.jsx';

import './index.css'
// Composant pour la mise en page avec en-tête et pied de page
const HeaderFooterLayout = ({ children }) => {
  return (
    <>
      <Header/>
      {children}
      <Footer />
    </>
  );
};
// Création d'un routeur pour gérer les itinéraires de l'application
const router = createBrowserRouter([
  {
    // Configuration de l'élément racine avec en-tête et pied de page
    element: <HeaderFooterLayout><Outlet /></HeaderFooterLayout>,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      // Route pour la page À Propos
      {
        path: '/about',
        element: <APropos/>,
      },
      // Route pour la page de logement détaillée avec un identifiant dynamique
      {
        path: '/logement/:id',
        element: <Logement/>, 
    
      },
      {
        path: '*',  // route pour toutes les autres pages non définies (erreur 404)
        element: <Error404 />,
      },
    ],
  },
]);
// Rendu de l'application React dans la racine du document HTML
ReactDOM.createRoot(document.getElementById('root')).render(
  // Mode strict pour détecter et signaler les pratiques non recommandées
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);