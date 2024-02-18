import React from 'react';
import './Banner.css';
// creation du composant banner qui prend deux props en parametre :img(la source de l'image) et text (le contenu du text)
function Banner({ img, text = null}) { 
    return (
    <div className='banner'>
        <img className='banner_img' src={img} alt='banner'/>
        {text && <p>{text}</p>}
    </div>
    
    );
};
export default Banner;