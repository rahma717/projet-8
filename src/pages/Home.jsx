import React from 'react'
import Banner from '../components/Layout/Banner'
import AppartmentContainer from '../components/AppartmentContainer'
import BannerLogo from '../assets/banner.png'




const Home =() =>{
  return (
    <div>
       
    <Banner img={BannerLogo} text={"Chez vous, partout et ailleurs"} />
    <AppartmentContainer/>
        
    </div>
  )
};

export default Home