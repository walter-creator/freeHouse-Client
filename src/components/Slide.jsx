// src/components/Slide.js
import React from 'react';
import marie from "../assets/img/marie.jpg";
import home from "../assets/img/home-decor-1.jpg";
import home2 from "../assets/img/home-decor-2.jpg";
import home3 from "../assets/img/home-decor-3.jpg";


const Slide = ({ slide, index, slideIndex }) => {
  console.log(slide);
  return (
    <div className={`mySlides ${slideIndex === index ? 'active' : ''}`} style={{ display: slideIndex === index ? 'block' : 'none' }}>
      <div className="numbertext">{index} / 6</div>
      <img src={slide} style={{ width: '100%' }} alt={slide.alt}/>
    </div>
  );
};

export default Slide;
