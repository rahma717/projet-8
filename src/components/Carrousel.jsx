import { useState } from 'react';
import PropTypes from 'prop-types';
import leftArrow from '../assets/arrow_left.png'
import rightArrow from '../assets/arrow_right.png'
import './Carrousel.css'

const Carrousel = ({ pictures = [] }) => { //recoit un tableau vide

    // État pour suivre l'index actuel dans le tableau d'images
    const [index, setIndex] = useState(0);//variable de compteur, défini au départ sur 0
   // Fonction pour gérer le clic sur la flèche de gauche
    const handleClickGauche = () => {
        // Met à jour l'index en fonction de l'état actuel
        setIndex(index === 0 ? pictures.length - 1 : index - 1);
    };
   // Fonction pour gérer le clic sur la flèche de droite
    const handleClickDroit = () => {
         // Met à jour l'index en fonction de l'état actuel
        setIndex(index === pictures.length - 1 ? 0 : index + 1);
    };

    return (
        <div className="carrousel">
             {/* Affiche la flèche de gauche uniquement s'il y a plus d'une image */}
            {pictures.length > 1 && <img src={leftArrow} alt="" className="fleche-gauche" onClick={handleClickGauche} />}
            {/* Affiche l'image principale en fonction de l'index actuel */}
            <img src={pictures[index]} alt="" className="main-image" />
            {/* Affiche la flèche de droite uniquement s'il y a plus d'une image */}
            {pictures.length > 1 && <img src={rightArrow} alt="" className="fleche-droite" onClick={handleClickDroit} />}
            {/* Affiche l'index de l'image actuelle et le nombre total s'il y a plus d'une image */}
            {pictures.length > 1 && <span>{index + 1} / {pictures.length} </span>}
        </div>
    );
};
// Prop Types pour s'assurer que la prop 'pictures' est un tableau
Carrousel.propTypes = {
    pictures: PropTypes.array.isRequired,
};

export default Carrousel;