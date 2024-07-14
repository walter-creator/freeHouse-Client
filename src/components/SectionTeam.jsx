import cham1 from "../assets/img/chambre/chambre1.jpg";
import cham2 from "../assets/img/chambre/chambre2.jpg";
import cham3 from "../assets/img/chambre/chambre3.jpg";
import cham4 from "../assets/img/chambre/chambre4.jpg";
import TeamCard from "./TeamCard";


import React, { useState } from 'react';


const FilterButtons = ({ filterSelection, activeFilter }) => {
  const buttons = ['Tout', 'Appartemet', 'Chambre', 'Studio', 'Services'];

  return (
    <div id="myBtnContainer">
      {buttons.map((filter) => (
        <button
          key={filter}
          className={`btn ${activeFilter === filter ? 'active' : ''}`}
          onClick={() => filterSelection(filter)}
        >
          {filter === 'all' ? 'Show all' : filter.charAt(0).toUpperCase() + filter.slice(1)}
        </button>
      ))}
    </div>
  );
};

const FilterableContainer = ({ activeFilter }) => {
  const items = [
    { class: 'Appartemet', label: 'Apartment Étoile', img: cham1, prix: 12000 },
    { class: 'Services Studio', label: 'cableur',img: cham2,prix: 15000 },
    { class: 'Appartemet', label: 'Résidence Lune', img: cham3,prix: 15000 },
    { class: 'Services', label: 'charpente', img: cham4,prix: 16000 },
    { class: 'Appartemet Chambre', label: 'Domaine Soleil', img: cham1 ,prix: 17000 },
    { class: 'Services', label: 'Plomberie', img: cham2 ,prix: 18000},
    { class: 'Chambre', label: 'Cité Universitaire Horizon', img: cham3 ,prix: 19000},
    { class: 'Chambre', label: 'Campus Vert', img: cham4 ,prix: 20000},
    { class: 'Studio', label: 'Studio Cosy', img: cham1,prix: 22000 },
    { class: 'Studio Chambre', label: 'Studio Élégance', img: cham2 ,prix: 25000},
    { class: 'Studio', label: 'Studio Élégance', img: cham3 ,prix: 55000},
    { class: 'Studio', label: 'Nid Douillet', img: cham4 ,prix: 10000},
    { class: 'Chambre', label: 'Résidence Athéna', img: cham1 ,prix: 8000},
  ];

  

  return (
    <div className="contain">
      {items.map((item, index) => {
        const shouldShow = activeFilter === 'Tout' || item.class.includes(activeFilter);
        return (
            
        <div key={index}
            className={`col-lg-3 col-sm-6 filterDiv ${shouldShow ? 'show' : ''}`}
        >
            <TeamCard
            titre = {item.label}
            img = {item.img}
            prix={item.prix}
        />
        </div>
        );
      })}
    </div>
  );
};

const SectionTeam = () => {
  const [activeFilter, setActiveFilter] = useState('tout');

  const filterSelection = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <>
        <section className="section team " style={{ zIndex: 1 }}>
            <div id="particles-js" style={{ zIndex: -1 }}>
            </div>
            <div className="container">
                <div className="row ">
                    <div className="col-lg-7">
                        <div className="text-center mb-5">
                            <h1 className="heading text-dark">Pour vous</h1>
                        </div> <br />
                    </div>
                    <p className="text-muted fs-17">Trouvez le logement qui convient le mieux a vos criteres, plus qu'a cliquer pour etre satisfait </p> 
                    <p className="text-muted fs-16"> <em> cliquer sur les boutons de filtre </em>  </p>
                </div>
                
                <div className="row gy-4">
                    <FilterButtons filterSelection={filterSelection} activeFilter={activeFilter} />
                    <FilterableContainer activeFilter={activeFilter} />
                </div>
            </div>
        </section>
    </>
    
  );
};

export default SectionTeam;