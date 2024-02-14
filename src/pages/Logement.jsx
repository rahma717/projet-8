import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"
import Carrousel from "../components/Carrousel.jsx";
import './Logement.css'
import Collapse from "../components/Collapse.jsx";
import { Rating } from 'react-simple-star-rating';




export default function Logement() {
    const { id } = useParams();
    const [logement, setLogement] = useState(null);
    const navigate = useNavigate();

    
    useEffect(() => {

    const getAppart = async() => {
        const response =   await fetch('http://localhost:3000/Appartement.json')
        const data = await response.json()
        const appart = data.find(item => item.id === id)
        if (appart === undefined) {
             navigate('erreur-404');
            } else {
                setLogement(appart);
            }
        }

        getAppart();
    }, [id, navigate]);

    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (!logement) {
      
        return null;
    }

    return (
        <main>
            <Carrousel pictures={logement.pictures} />
            <div className="info-content">
                <div>
                    <h1>{logement.title}</h1>
                    <p className="location">{logement.location}</p>
                    <div className="tags">
                    {
                        logement.tags.map((tag, index) => <p className="tag" key={index}>{tag}</p> )
                    }
                    </div>
                </div>
                <div className="rating-content">
                    <div className="host-info">
                        <img className="host-picture" src={logement.host.picture} alt="" />
                        <p className="host-name">{logement.host.name}</p>
                    </div>
                    <Rating size={isMobile ? "18" : "36"} initialValue={parseInt(logement.rating)} readonly fillColor="#FF6060" />
                </div>
            </div>
            <div className="collapses">
            <Collapse title="Description" content={logement.description} />
            <div className="separator"></div>
            <Collapse title="Equipements" content={logement.equipments.map((equipment, index) => <p key={index}>{equipment}</p>)} />
            </div>
        </main>
    )
}