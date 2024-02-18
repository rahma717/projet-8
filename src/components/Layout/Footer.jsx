import React from "react";
import './Footer.css';
import logofooter from'../../assets/logofooter.png';
//création d'un composant footer
const Footer = () => {
  return (
    <div className="footer">
      <img src={logofooter} alt="logo Kasa" />
      <p>©2020 Kasa. All rights reserved</p>
    </div>
  );
};

export default Footer;