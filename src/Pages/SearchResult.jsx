
import Sidebar from "../layouts/Sidebar";
import imgSrc from "../assets/img/illustrations/rocket-white.png";

// images importation 

import ivanick from '../assets/img/ivancik.jpg';
import decor from "../assets/img/home-decor-3.jpg";


//components importations
import RoomCard from "../component/RoomCard";
import Nav from "../layouts/Nav";


function App() {
 
    const rooms = [
        {
            title: "Moon City",
            type: "chambre",
            desc: "mettre une decription ici",
            img: "lien de l'image importe ici"
        },
        {
            title: "Cite le generale",
            type: "studio",
            desc: "mettre une decription ici",
            img: "lien de l'image importe ici"
        },
        {
            title: "Cite Rose",
            type: "chambre",
            desc: "mettre une decription ici",
            img: "lien de l'image importe ici"
        },
        {
            title: "Cite Rose",
            type: "chambre",
            desc: "mettre une decription ici",
            img: "lien de l'image importe ici"
        },
    ];
    const divStyle = {
        backgroundImage: `url(${ivanick})`, 
        // backgroundSize: 'cover', 
        // backgroundPosition: 'center'
      };

  return (
    <>
    
    <Sidebar a2="active"/>
    
    <main class="main-content position-relative max-height-vh-100 h-100 mt-1 border-radius-lg ">
    <Nav titre="Resultat de la recherche"/>
    <div className="container-fluid py-4">
        <div className="row mt-4">
            <div className="col-lg-7 mb-lg-0 mb-4">
            <div className="card">
                <div className="card-body p-3"> 
                
                {rooms.map((room, index) =>(
                    
                    <RoomCard  key={index}
                        title = {room.title}
                        type = "chambre"
                        desc ="Tres belle chambres moderne avec espace cuisine et douche interne situe en bordu de route et 
                        et proche du campus universitaire"
                        img = {decor}
                    />
                ))}
                    {/** mettons le RoomCard ici et bouclons  */}

                    <RoomCard  
                        title = "Queen city"
                        type = "chambre"
                        desc ="Tres belle chambres moderne avec espace cuisine et douche interne situe en bordu de route et 
                        et proche du campus universitaire"
                        img = {ivanick}
                    />
                </div>
            </div>
            </div>
            <div className="col-lg-5">
                <div className="card h-100 p-3">
                    <div className="overflow-hidden position-relative border-radius-lg bg-cover h-100" style={divStyle}>
                    <span className="mask bg-gradient-dark"></span>
                    <div className="card-body position-relative z-index-1 d-flex flex-column h-100 p-3">
                        <h5 className="text-white font-weight-bolder mb-4 pt-2">Work with the rockets</h5>
                        <p className="text-white">Wealth creation is an evolutionarily recent positive-sum game. It is all about who take the opportunity first.</p>
                        <a className="text-white text-sm font-weight-bold mb-0 icon-move-right mt-auto" href="javascript:;">
                        voire les details
                        <i className="fas fa-arrow-right text-sm ms-1" aria-hidden="true"></i>
                        </a>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div> 
    </main>
    
     
    
    </>
  )
}

export default App;
