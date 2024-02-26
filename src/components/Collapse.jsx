import React, { useState } from "react";
import './Collapse.css';
import ArrowBack from '../assets/ArrowBack.png';

function Collapse({ title, content }) {
   // Utilisation du state pour suivre l'état d'ouverture ou de fermeture du collapse
    const [open, setOpen] = useState(false);
  // Fonction pour basculer entre l'état ouvert et fermé
    const handleToggle = () => {
      setOpen(!open);
    };
  
    return (
      <div className={`collapse ${open && "active"}`}>
        {/* Barre de titre du collapse avec possibilité de basculer son état en cliquant */}
        <div className="collapse_title" onClick={handleToggle}>
          <p>{title}</p>
           {/* Affiche une flèche d'ouverture ou de fermeture en fonction de l'état du collapse */}
          <img
            src={ArrowBack}
            alt="fleche douverture"
            className={`collapse_icon ${open ? "active" : ""}`}
          />
        </div>
        {/* Affiche le contenu du collapse uniquement s'il est ouvert */}
        {open && <div className={`collapse_content ${open && "active"}`}>
          <div className={`collapse_content-text ${open && "active"}`}>{content}</div>
        </div>}
      </div>
    );
  }
  
  export default Collapse; 