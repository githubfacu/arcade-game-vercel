import React from 'react';

const GameContainer = ({ characterImage }) => {

  return (
    <div>
      <img src={characterImage} alt={`Personaje`} style={{ width: '150px' }} />
      <h2 style={{color: 'white'}}>START GAME</h2>
    </div>
  );
};

export default GameContainer;