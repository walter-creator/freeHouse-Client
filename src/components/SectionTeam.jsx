
import TeamCard from "./TeamCard";
import { listLogements } from "../api";


import  { useState, useEffect } from 'react';


// eslint-disable-next-line react/prop-types
const FilterButtons = ({ filterSelection, activeFilter }) => {
  const buttons = ['Tout', 'Appartement', 'Chambre', 'Studio', 'Services'];

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

// eslint-disable-next-line react/prop-types
const FilterableContainer = ({ activeFilter }) => {
  const [items, setItems] = useState([]);

  // get all logements and for each logement get all medias
  useEffect(() => {
    listLogements().then((data) => {
      data.forEach((logement) => {
        logement.medias = logement.medias.map((media) => media.lien);
      })
      setItems(data);
      console.log(data);
    });
  }, []);

  

  

  return (
    <div className="contain">
      {items.map((item, index) => {
        const shouldShow = activeFilter === 'Tout' || item.genre.includes(activeFilter);
        return (
            
        <div key={index}
            className={`col-lg-3 col-sm-6 filterDiv ${shouldShow ? 'show' : ''}`}
        >
            <TeamCard
            titre = {item.titre}
            img={item.medias[0]}
            prix={item.prix}
        />
        </div>
        );
      })}
    </div>
  );
};

const SectionTeam = () => {
  const [activeFilter, setActiveFilter] = useState('Tout');

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
                    <p className="text-muted fs-17">Trouvez le logement qui convient le mieux a vos criteres, plus qua cliquer pour etre satisfait </p> 
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