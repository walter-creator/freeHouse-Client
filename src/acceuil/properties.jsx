import React, { useEffect, useState } from 'react';
import '../vendor/bootstrap/css/bootstrap.min.css';
import '../assets/css/templatemo-villa-agency.css';
import '../assets/css/fontawesome.css';
import '../assets/css/flex-slider.css';
import '../assets/css/owl.css';
import '../assets/css/animate.css';
import './Icons.css';
import Categories from './Icons';

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    fetch('/Data.json') // Placez Data.json dans le dossier public
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setProperties(data);
        setFilteredProperties(data);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    if (category === '') {
      setFilteredProperties(properties);
    } else {
      const filtered = properties.filter(property => property.category === category);
      setFilteredProperties(filtered);
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
                <a href="property-details.html">
                  <img src={property.image} alt={property.category} />
                </a>
                <span className="category">{property.category}</span>
                <h6>{property.price} month</h6>
                <h4><a href="property-details.html">{property.address}</a></h4>
                <ul>
                  <li>Bedrooms: <span>{property.details.bedrooms}</span></li>
                  <li>Bathrooms: <span>{property.details.bathrooms}</span></li>
                  <li>Area: <span>{property.details.area}</span></li>
                  <li>Floor: <span>{property.details.floor}</span></li>
                  <li>Parking: <span>{property.details.parking}</span></li>
                </ul>
                <div className="main-button">
                  <a href="property-details.html">Visit Now</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Properties;
