import "../styles/ApartmentGrid.scss";
import ApartmentCard from "./ApartmentCard.jsx";
import "../styles//ApartmentCard.scss";
import data from "../data/db.json"



const Cards = () => {
    return (
        <div className="grid">

            {/* liste la base de données */}
            {data.map((record) => {
                const { id, cover, title } = record;

                // affiche la fiche logement sur la page d'accueil
                return (
                    
                        <ApartmentCard key = {id} id = {id} title ={title} imageUrl= {cover}/>
                        
                    
                )
            })}
        </div>
    )
}

export default Cards
