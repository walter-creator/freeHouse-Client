
import { listLogements } from "../api";
import '../vendor/bootstrap/css/bootstrap.min.css';
import '../assets/css/templatemo-villa-agency.css';
import '../assets/css/fontawesome.css';
import '../assets/css/flex-slider.css';
import '../assets/css/owl.css';
import '../assets/css/animate.css';
import '../acceuil/Icons.css';
import Categories from '../acceuil/Icons';


import  { useState, useEffect } from 'react';


// eslint-disable-next-line react/prop-types, no-unused-vars
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

// eslint-disable-next-line react/prop-types, no-unused-vars
const FilterableContainer = ({ activeFilter }) => {
  const [items, setItems] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [selectedCategory, setSelectedCategory] = useState('');

  // get all logements and for each logement get all medias
  useEffect(() => {
    listLogements().then((data) => {
      data.forEach((logement) => {
        logement.medias = logement.medias.map((media) => media.lien);
      })
      setItems(data);
      setFilteredProperties(data);
      console.log(data);
    });
  }, []);

  

  

  const handleSelectCategory = (genre) => {
    setSelectedCategory(genre);
    if (genre === '') {
      setFilteredProperties(items);
    } else {
      const filtered = items.filter(property => property.genre === genre);
      if(filtered.length === 0){
        setFilteredProperties(items);
      }else{
        setFilteredProperties(filtered);
      }
     
    }
  };

  return (
    <div className="section properties">
      <div className="container">
        <Categories onSelectCategory={handleSelectCategory} />
        <div className="row properties-box">
          {filteredProperties.map((property, index) => (
            <div key={index} className="col-lg-4 col-md-6 align-self-center mb-30 properties-items">
              <div className="item">
                <a href="/detail" >
                  <img src={property.medias[0]} alt={property.genre} style={{maxHeight:"200px"}} />
                </a>
                <span className="category">{property.genre}</span>
                <h6>{property.prix} FCFA/ mois</h6>
                <h4><a href="/detail">{property.localisation}</a></h4>
                <ul>
                  <li>Bedrooms: <span>{property.chambre}</span></li>
                  <li>Bathrooms: <span>{property.douche}</span></li>
                  <li>Area: <span>{property.salon}</span></li>
                  <li>Floor: <span>{property.cuisine}</span></li>
                  <li>Parking: <span>{property.parking}</span></li>
                </ul>
                <div className="main-button">
                  <a href="/discussion">Contacter Maintenant</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const SectionTeam = () => {
  const [activeFilter, setActiveFilter] = useState('Tout');

  // eslint-disable-next-line no-unused-vars
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
                    {/* <FilterButtons filterSelection={filterSelection} activeFilter={activeFilter} /> */}
                    <FilterableContainer activeFilter={activeFilter} />
                </div>
            </div>
        </section>
    </>
    
  );
};

export default SectionTeam;