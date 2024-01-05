import React from 'react';
import Premio from './Premio';
import useCarousel from '../hooks/useCarousel';
import '../styles/Carousel.css';

const Carousel = ({ premios, pause, neonSwitch }) => {
  const { visiblePremios } = useCarousel(premios, pause);

  const switchShadowSet = () => {
    if(neonSwitch === false){
      return '0 0 10px 5px #2eff2a'
    } else{
      return '0 0 10px 5px #ff2aff'
    }
  }

  return (
    <div className="juego-container" style={{boxShadow: `${switchShadowSet()}`}}>
      {visiblePremios.map((premio) => (
        <Premio key={premio.id} src={premio.src} alt={premio.alt} />
      ))}
    </div>
    
  );
};

export default Carousel;