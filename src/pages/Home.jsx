import React from 'react'
import Banner from '../components/Layout/Banner'
import AppartmentContainer from '../components/AppartmentContainer'
import BannerLogo from '../assets/banner.png'



// Composant représentant la page d'accueil
const Home =() =>{
  return (
    <main>
       {/* Composant Banner avec une image et un texte */}
    <Banner img={BannerLogo} text={"Chez vous, partout et ailleurs"} />
    {/* Composant AppartmentContainer pour afficher la liste des logements */}
    <AppartmentContainer/>
        
    </main>
  )
};

export default Home