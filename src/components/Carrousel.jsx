import { useState } from 'react';
import PropTypes from 'prop-types';
import leftArrow from '../assets/arrow_left.png'
import rightArrow from '../assets/arrow_right.png'

import './Carrousel.css'


// Définissez la validation PropTypes pour le composant Carrousel
const Carrousel = ({ pictures = [] }) => {
    const [index, setIndex] = useState(0);
   

    const handleClickGauche = () => {
        if (index === 0) {
            return setIndex(pictures.length - 1);
        }
        setIndex(index - 1);
    };

    const handleClickDroit = () => {
        if (index === pictures.length - 1) {
            return setIndex(0);
        }
        setIndex(index + 1);
    };

    return (
        <div className="carrousel">
            {pictures.length > 1 && <img src={leftArrow} alt="" className="fleche-gauche" onClick={handleClickGauche} />}
            <img src={pictures[index]} alt="" className="main-image" />
            <img src={rightArrow} alt="" className="fleche-droite" onClick={handleClickDroit} />
            <span>{index + 1} / {pictures.length} </span>
        </div>
    );
};

// Ajoutez la validation PropTypes pour la propriété 'pictures'
Carrousel.propTypes = {
    pictures: PropTypes.array.isRequired,
};

export default Carrousel;

