import React from "react";
import Logo from "./Logo.jsx";
import Navigation from "./Navigation.jsx";
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <Logo />
      <Navigation />
    </div>
  );
};

export default Header;