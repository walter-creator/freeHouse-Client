// import React from "react";
import { useState } from "react";
import { saveLogement } from "../api";


function AppartementForm(){
    // Appartement attribute (number of rooms, number of bathroom, etc.)

    const [appartement, setAppartement] = useState({
        genre: "",
        titre: "",
        description: "",
        salon: 0,
        cuisine: 0,
        chambre: 0,
        douche: 0,
        localisation: "",
        prix: 0,
        userId: 1,
        mediaIds: [1, 2, 3, 4, 5],
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setAppartement({ ...appartement, [name]: value });
      };


      const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(appartement);
        await saveLogement(appartement);
        window.location.href = "/profile";
      };


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Genre:
                    <input type="text" name="genre" value={appartement.genre} onChange={handleChange} />
                </label>
                <label>
                    Titre:
                    <input type="text" name="titre" value={appartement.titre} onChange={handleChange} />
                </label>
                <label>
                    Description:
                    <input type="text" name="description" value={appartement.description} onChange={handleChange} />
                </label>
                <label>
                    Nombre de chambres:
                    <input type="number" name="chambre" value={appartement.chambre} onChange={handleChange} />  
                </label>
                <label>
                    Nombre de cuisine:
                    <input type="number" name="cuisine" value={appartement.cuisine} onChange={handleChange} />
                </label>
                <label>
                    Nombre de salons:
                    <input type="number" name="salon" value={appartement.salon} onChange={handleChange} />
                </label>
                <label>
                    Nombre de douche:
                    <input type="number" name="douche" value={appartement.douche} onChange={handleChange} />
                </label>
                <label>
                    Localisation:
                    <input type="text" name="localisation" value={appartement.localisation} onChange={handleChange} />
                </label>
                <label>
                    Prix:
                    <input type="number" name="prix" value={appartement.prix} onChange={handleChange} />
                </label>
                <input type="submit" value="Submit" /> 
            </form>
        </div>
    );
    
} export default AppartementForm;
