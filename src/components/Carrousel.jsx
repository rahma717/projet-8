import { useState } from 'react';
import PropTypes from 'prop-types';
import leftArrow from '../assets/arrow_left.png'
import rightArrow from '../assets/arrow_right.png'
import './Carrousel.css'

const Carrousel = ({ pictures = [] }) => {
    const [index, setIndex] = useState(0);

    const handleClickGauche = () => {
        setIndex(index === 0 ? pictures.length - 1 : index - 1);
    };

    const handleClickDroit = () => {
        setIndex(index === pictures.length - 1 ? 0 : index + 1);
    };

    return (
        <div className="carrousel">
            {pictures.length > 1 && <img src={leftArrow} alt="" className="fleche-gauche" onClick={handleClickGauche} />}
            <img src={pictures[index]} alt="" className="main-image" />
            {pictures.length > 1 && <img src={rightArrow} alt="" className="fleche-droite" onClick={handleClickDroit} />}
            {pictures.length > 1 && <span>{index + 1} / {pictures.length} </span>}
        </div>
    );
};

Carrousel.propTypes = {
    pictures: PropTypes.array.isRequired,
};

export default Carrousel;