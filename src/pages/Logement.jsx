import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"
import Carrousel from "../components/Carrousel.jsx";
import './Logement.css'
import Collapse from "../components/Collapse.jsx";
import { Rating } from 'react-simple-star-rating';




export default function Logement() {
    // Récupération de l'ID de la route
    const { id } = useParams();
    const [logement, setLogement] = useState(null);
    const navigate = useNavigate();
   // Utilisation de useEffect pour effectuer la requête une fois que le composant est monté
    
    useEffect(() => {

    const getAppart = async() => {
        // Récupération des données depuis le fichier JSON
        const response =   await fetch('http://localhost:3000/Appartement.json')
        const data = await response.json()
        // Recherche du logement correspondant à l'ID
        const appart = data.find(item => item.id === id)
         // Redirection vers la page d'erreur 404 si le logement n'est pas trouvé
        if (appart === undefined) {
             navigate('erreur-404');
            } else {
                setLogement(appart);
            }
        }
   // Appel de la fonction pour récupérer le logement
        getAppart();
    }, [id, navigate]);

    // Vérification de la largeur de l'écran pour déterminer le mode mobile

    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    // Affichage du composant en attendant que les données du logement soient chargées
    if (!logement) {
      
        return null;
    }

    return (
        <main>
             {/* Composant Carrousel pour afficher les images du logement */}
            <Carrousel pictures={logement.pictures} />
            <div className="info-content">
                <div>
                    <h1>{logement.title}</h1>
                    <p className="location">{logement.location}</p>
                     {/* Affichage des tags associés au logement */}
                    <div className="tags">
                    {
                        logement.tags.map((tag, index) => <p className="tag" key={index}>{tag}</p> )
                    }
                    </div>
                </div>
                <div className="rating-content">
                    <div className="host-info">
                    {/* Affichage de l'image et du nom de l'hôte */}
                        <img className="host-picture" src={logement.host.picture} alt="" />
                        <p className="host-name">{logement.host.name}</p>
                    </div>
                    {/* Affichage de la note du logement */}
                    <Rating size={isMobile ? "18" : "36"} initialValue={parseInt(logement.rating)} readonly fillColor="#FF6060" />
                </div>
            </div>
              {/* Affichage des informations détaillées du logement avec des composants Collapse */}
            <div className="collapses">
            <Collapse title="Description" content={logement.description} />
            <div className="separator"></div>
            <Collapse title="Equipements" content={logement.equipments.map((equipment, index) => <p key={index}>{equipment}</p>)} />
            </div>
        </main>
    )
}