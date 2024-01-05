import { useState, useEffect } from 'react';

const useCarousel = (premios, pause, onVisibleChange, itemCount = 9, initialIndex = 0) => {
  const [currentPremioIndex, setCurrentPremioIndex] = useState(initialIndex);
  const [visiblePremios, setVisiblePremios] = useState(premios);
  const [transition, setTransition] = useState(false);

  useEffect(() => {
    
    const intervalId = setInterval(() => {
      if(!pause){
        setTransition(true);
        setCurrentPremioIndex((prevIndex) => (prevIndex + 1) % premios.length);

        setTimeout(() => {
          setTransition(false);
        }, 500);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [premios, pause]);

  useEffect(() => {
    const updatedVisiblePremios = [
      ...premios.slice(currentPremioIndex),
      ...premios.slice(0, currentPremioIndex),
    ].slice(0, itemCount);

    setVisiblePremios(updatedVisiblePremios);

    if (typeof onVisibleChange === 'function') {
      onVisibleChange(currentPremioIndex);
    }
  }, [currentPremioIndex, pause, onVisibleChange , itemCount, premios]);
  

  const containerStyle = {
    transition: transition ? 'transform 0.5s ease-in-out' : 'none',
  };

  return { visiblePremios, containerStyle };
};

export default useCarousel;