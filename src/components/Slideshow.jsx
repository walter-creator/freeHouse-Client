// src/components/Slideshow.js
import React, { useState } from 'react';
import Slide from './Slide';
import Thumbnail from './Thumbnail';


//images 
import marie from "../assets/img/marie.jpg";
import home from "../assets/img/home-decor-1.jpg";
import home2 from "../assets/img/home-decor-2.jpg";
import home3 from "../assets/img/home-decor-3.jpg";
console.log(home);

const Slideshow = () => {
 
  return (
    <div className="slideCadre">
      <div className="container">
            <div className="mySlides">
              <div className="numbertext">1 / 6</div>
              <img src={home} style={{ width: "100%" }} alt="chambre 1" />
            </div>
            <div className="mySlides">
              <div className="numbertext">2 / 6</div>
              <img src={home3} style={{ width: "100%" }} alt="Cinque Terre" />
            </div>
            <div className="mySlides">
              <div className="numbertext">3 / 6</div>
              <img src={home2} style={{ width: "100%" }} alt="Mountains and fjords" />
            </div>
            <div className="mySlides">
              <div className="numbertext">4 / 6</div>
              <img src={home3} style={{ width: "100%" }} alt="Northern Lights" />
            </div>
            <div className="mySlides">
              <div className="numbertext">5 / 6</div>
              <img src={home} style={{ width: "100%" }} alt="Nature and sunrise" />
            </div>
            <div className="mySlides">
              <div className="numbertext">6 / 6</div>
              <img src={home2} style={{ width: "100%" }} alt="Snowy Mountains" />
            </div>
            <a className="prev" onClick={() => plusSlides(-1)}>❮</a>
            <a className="next" onClick={() => plusSlides(1)}>❯</a>
            <div className="caption-container">
              <p id="caption"></p>
            </div>
            <div className="row">
              <div className="column">
                <img className="demo cursor" src={home} style={{ width: "100%" }} onClick={() => currentSlide(1)} alt="The Woods" />
              </div>
              <div className="column">
                <img className="demo cursor" src={home3} style={{ width: "100%" }} onClick={() => currentSlide(2)} alt="Cinque Terre" />
              </div>
              <div className="column">
                <img className="demo cursor" src={home2} style={{ width: "100%" }} onClick={() => currentSlide(3)} alt="Mountains and fjords" />
              </div>
              <div className="column">
                <img className="demo cursor" src={home3} style={{ width: "100%" }} onClick={() => currentSlide(4)} alt="Northern Lights" />
              </div>
              <div className="column">
                <img className="demo cursor" src={home} style={{ width: "100%" }} onClick={() => currentSlide(5)} alt="Nature and sunrise" />
              </div>
              <div className="column">
                <img className="demo cursor" src={home3} style={{ width: "100%" }} onClick={() => currentSlide(6)} alt="Snowy Mountains" />
              </div>
            </div>
              </div>
            </div>
  );
};

export default Slideshow;
