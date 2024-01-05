import React, {useState, useEffect} from 'react';
import '../styles/Button.css';

const Button = ({ onButtonClick, pause }) => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  useEffect(() => {
    if (pause) {
      setIsButtonDisabled(true);

      const timeoutId = setTimeout(() => {
        setIsButtonDisabled(false);
      }, 4000);
    }
  }, [pause]);

  return <div onClick={onButtonClick}>
    <button className='video-game-button' disabled={isButtonDisabled}>A</button>

  </div>;
};

export default Button;