// src/components/Slideshow.js
import React, { useState } from 'react';
import Slide from './Slide';
import Thumbnail from './Thumbnail';
import '../assets/css/Slideshow.css';

//images 
import marie from "../assets/img/marie.jpg";
import home from "../assets/img/home-decor-1.jpg";
import home2 from "../assets/img/home-decor-2.jpg";
import home3 from "../assets/img/home-decor-3.jpg";
console.log(home);

const Slideshow = () => {
  const [slideIndex, setSlideIndex] = useState(1);
  const slides = [
      {marie},
      {home}, 
      {home2},
      {home3}, 
      {marie}, 
      {home},
  ];

  const plusSlides = (n) => {
    let newIndex = slideIndex + n;
    if (newIndex > slides.length) newIndex = 1;
    if (newIndex < 1) newIndex = slides.length;
    setSlideIndex(newIndex);
  };

  const currentSlide = (n) => {
    setSlideIndex(n);
  };

  return (
    <div className="container">
      {slides.map((slide, index) => (
        <>
          <Slide
            key={index}
            slide={slide}
            index={index + 1}
            slideIndex={slideIndex} 
          />
        </>
      ))}
      <a className="prev" onClick={() => plusSlides(-1)}>❮</a>
      <a className="next" onClick={() => plusSlides(1)}>❯</a>

      <div className="caption-container">
        <p id="caption">{slides[slideIndex - 1].alt}</p>
      </div>

      <div className="row">
        {/* {slides.map((slide, index) => (
          <Thumbnail
            key={index}
            slide={slide}
            index={index + 1}
            currentSlide={currentSlide}
            isActive={slideIndex === index + 1}
          />
        ))} */}
      </div>
    </div>
  );
};

export default Slideshow;
