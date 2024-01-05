import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { useSound } from '../Context/SoundContext';
import '../styles/CharacterSelection.css'

const CharacterSelection = () => {
  const navigate = useNavigate();
  const { pauseIsThisIt } = useSound();
  const startAudio = new Audio('Audios/start.mp3');
  const selectAudio = new Audio('/Audios/select.mp3');  

  pauseIsThisIt();

  useEffect(() => {
    if(sessionStorage.getItem('pin')){
      sessionStorage.clear()
    }else{
      window.location.replace('/')
    }
  }, []);

  const handleCharacterClick = async (character) => {
    await startAudio.play();
    sessionStorage.setItem('pin', 'A')
    navigate(`/game?character=${character}`);
  };

  const handleCharacterHover = () => {
    selectAudio.play();
  };

  return (
    <div className='fondo'>
      <h2 className='select'>SELECT PLAYER</h2>
        <div className='personajes'>
          <img
            src="/Images/malon.png"
            alt="Personaje 1"
            onMouseOver={() => handleCharacterHover()}
            onClick={() => handleCharacterClick(1)}
          />
          <img
            src="/Images/gurin.png"
            alt="Personaje 2"
            onMouseOver={() => handleCharacterHover()}
            onClick={() => handleCharacterClick(2)}
            style={{border: '3px solid #399fda'}}
          />
        </div>
    </div>
  );
};

export default CharacterSelection;