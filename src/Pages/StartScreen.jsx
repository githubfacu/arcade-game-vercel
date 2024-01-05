import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSound } from '../Context/SoundContext';

const StartScreen = ({ onEnterPress }) => {
  const [visible, setVisible] = useState(true);
  const { pauseIsThisIt } = useSound();
  const navigate = useNavigate(); 
  const startScreenRef = useRef();
  const audio = new Audio('/Audios/init.mp3');

  pauseIsThisIt();

  const temporizador = () => {setInterval(() => {
      setTimeout(() => {
        setVisible(false);

        setTimeout(() => {
          setVisible(true);
        }, 250);
      }, 125);
    }, 500);
  }

  useEffect(() => {
    startScreenRef.current.focus();
  }, []);

  const handleKeyPress = async (event) => {
    console.log('Key pressed:', event.key);
    if (event.key === 'Enter') {
      sessionStorage.setItem('pin', 'A')
      await audio.play();

      setTimeout(() => {
        navigate('/character-selection');
      }, 2000);
    }
  };

  const handleMouseClick = async () => {
    sessionStorage.setItem('pin', 'A')    
    await audio.play();

    setTimeout(() => {
      navigate('/character-selection');
    }, 2000);
  };

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setTimeout(() => {
        setVisible(false);

        setTimeout(() => {
          setVisible(true);
        }, 1000);
      }, 500);
    }, 2000);
    

    const keydownListener = (event) => {
      if (event.key === 'Enter') {
        clearInterval(blinkInterval);
        temporizador()
        document.removeEventListener('keydown', keydownListener);
      }
    };

    document.addEventListener('keydown', keydownListener);

    return () => {
      clearInterval(blinkInterval);
      document.removeEventListener('keydown', keydownListener);
    };
  }, [onEnterPress]);


  return (
    <div
    tabIndex={0}
    ref={startScreenRef}
    onKeyDown={handleKeyPress}
    onClick={handleMouseClick}
      style={{
        width: '100%',
        height: '100vh',
        background: 'black',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        border: '10px solid white',
        cursor: 'none',
        transition: 'visibility 0.5s ease-in-out',
      }}
    >
      <img src="/Images/Binary Land 50.png" alt="logo" style={{ marginBottom: '.5rem', maxWidth: '50%'}}/>
      <h2 style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.4s ease-in-out' }}>
        Press Enter to continue
      </h2>
    </div>
  );
};

export default StartScreen;