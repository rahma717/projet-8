import React from "react";
import './Footer.css';
import logofooter from'../../assets/logofooter.png';
//création d'un composant footer
const Footer = () => {
  return (
    <div className="footer">
       {/* Affiche le logo avec la source provenant de logofooter.png et une alternative "logo Kasa" */}
      <img src={logofooter} alt="logo Kasa" />
      {/* Affiche le texte de droits d'auteur */}
      <p>©2020 Kasa. All rights reserved</p>
    </div>
  );
};

export default Footer;