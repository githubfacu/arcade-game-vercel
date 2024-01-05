import React from 'react';
import Premio from './Premio';
import useCarousel from '../hooks/useCarousel';
import '../styles/Carousel.css';

const CarouselUnItem = ({ premios, pause, onVisibleChange }) => {
  const { visiblePremios, containerStyle } = useCarousel(premios, pause, onVisibleChange, 1, 4);

  return (
    <div className="carousel-unico" style={containerStyle}>
      {visiblePremios.map((premio) => (
        <Premio key={premio.id} src={premio.src} alt={premio.alt} />
      ))}
    </div>
  );
};

export default CarouselUnItem;