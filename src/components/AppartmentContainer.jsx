import React, { useEffect, useState } from 'react';
import './AppartmentContainer.css';
import Appartment from './Appartment.jsx';

function AppartmentContainer() {
    const [logements, setLogements] = useState(null)
    useEffect(() => {
        const getLogements = async () => {
            const response = await fetch('/Appartement.json')
            const data = await response.json()
            setLogements(data)
        }
        getLogements();
    }, [])

    if (!logements) return <div>Chargement...</div>
    return (
    <div className='Appartment_container'>
     {
        logements.map(logement => <Appartment key={logement.id} logement={logement} />)
     }
     </div>
    
    );
   }
   
   export default AppartmentContainer;