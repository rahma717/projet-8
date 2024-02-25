import React from 'react';
import './Banner.css';
// creation du composant banner qui prend deux props en parametre :img(la source de l'image) et text (le contenu du text)
function Banner({ img, text = null}) { 
    return (
    <div className='banner'>
         {/* Affiche l'image avec la classe 'banner_img' et une alternative 'banner' */}
        <img className='banner_img' src={img} alt='banner'/>
        {/* Affiche le texte si la prop 'text' est fournie */}
        {text && <p>{text}</p>}
    </div>
    
    );
};
export default Banner;