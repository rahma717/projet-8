import React  from "react";
import {Link} from "react-router-dom";
import './Appartment.css';

function Appartment({ logement }) {
    return (
    <div className="appartment">
         {/* Utilisation de Link pour créer un lien vers la page détaillée du logement */}
    <Link to={`/logement/${logement.id}`}>
        <div className="overlay"></div>
        {/* Affiche l'image du logement avec la source provenant de logement.cover et une alternative basée sur le titre du logement */}
     <img src={logement.cover} alt={logement.title} />
      {/* Affiche le titre du logement */}
    <div className="appartment_subtitle">{logement.title}</div>
   
    </Link>
    </div>
    );
}

export default Appartment;