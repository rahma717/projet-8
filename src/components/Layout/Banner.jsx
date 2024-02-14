import React from 'react';
import './Banner.css'

function Banner({ img, text = null}) { 
    return (
    <div className='banner'>
        <img className='banner_img' src={img} alt='banner'/>
        {text && <p>{text}</p>}
    </div>
    
    );
};
export default Banner;