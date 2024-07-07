
import React from 'react';

const Thumbnail = ({ slide, index, currentSlide, isActive }) => {
  return (
    <div className="column">
      <img
        className={`demo cursor ${isActive ? 'active' : ''}`}
        src={slide.src.replace('_wide', '')}
        style={{ width: '100%' }}
        onClick={() => currentSlide(index)}
        alt={slide.alt}
      />
    </div>
  );
};

export default Thumbnail;
