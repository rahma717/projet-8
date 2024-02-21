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

const HeaderFooterLayout = ({ children }) => {
  return (
    <>
      <Header/>
      {children}
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <HeaderFooterLayout><Outlet /></HeaderFooterLayout>,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <APropos/>,
      },
      {
        path: '/logement/:id',
        element: <Logement/>, 
    
      },
      {
        path: '*',  // Toutes les routes non définies
        element: <Error404 />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);