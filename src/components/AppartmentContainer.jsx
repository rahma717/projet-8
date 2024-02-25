import React, { useEffect, useState } from 'react';
import './AppartmentContainer.css';
import Appartment from './Appartment.jsx';

function AppartmentContainer() {
    // Utilisation du state pour stocker la liste des logements
    const [logements, setLogements] = useState(null)
    // Utilisation de useEffect pour effectuer la requête une fois que le composant est monté
    useEffect(() => {
        const getLogements = async () => {
     // Utilisation de 'await' avec 'fetch' pour effectuer une requête
            const response = await fetch('/Appartement.json')
            const data = await response.json()
             // Mise à jour du state avec les données récupérées
            setLogements(data)
        }
         // Appel de la fonction pour récupérer les logements
        getLogements();
    }, [])
  // Affichage d'un message de chargement si les logements ne sont pas encore disponibles
    if (!logements) return <div>Chargement...</div>
    return (
    <div className='Appartment_container'>
     {  /* Mapping à travers la liste des logements et rendu du composant Appartment pour chaque logement */
        logements.map(logement => <Appartment key={logement.id} logement={logement} />)
     }
     </div>
    
    );
   }
   
   export default AppartmentContainer;