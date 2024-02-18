import React from "react";
import Logo from "./Logo.jsx";
import Navigation from "./Navigation.jsx";
import './Header.css';
// création de composant Header qui englobe les composants Logo et Navigation
const Header = () => {
  return (
    <div className="header">
      <Logo />
      <Navigation />
    </div>
  );
};

export default Header;