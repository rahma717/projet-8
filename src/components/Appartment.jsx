import React  from "react";
import {Link} from "react-router-dom";
import './Appartment.css';

function Appartment({ logement }) {
    return (
    <div className="appartment">
    <Link to={`/logement/${logement.id}`}>
        <img src={logement.cover} alt={logement.title} />
    <div className="appartment_subtitle">{logement.title}</div>
    </Link>
    </div>
    );
}

export default Appartment;