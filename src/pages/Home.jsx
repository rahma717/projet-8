import React from 'react'
import Banner from '../components/Layout/Banner'
import AppartmentContainer from '../components/AppartmentContainer'
import BannerLogo from '../assets/banner.png'




const Home =() =>{
  return (
    <main>
       
    <Banner img={BannerLogo} text={"Chez vous, partout et ailleurs"} />
    <AppartmentContainer/>
        
    </main>
  )
};

export default Home