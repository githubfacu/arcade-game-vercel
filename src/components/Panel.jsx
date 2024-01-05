import React, { useState, useEffect } from 'react';
import { useSound } from '../Context/SoundContext';
import '../styles/Panel.css'

const Panel = ({ premios, pause, indice, tirosRestantes }) => {
  const [itemsArr, setItemsArr] = useState([])
  const [score, setScore] = useState(0)
  const { playIsThisIt, pauseIsThisIt } = useSound();
  const [animation, setAnimation] = useState({boxShadow: '0 0 10px 5px white'})
  const items = premios
  const correctAnswer = new Audio('/Audios/bonus-alert-767.mp3');
  const wrongAnswer = new Audio('/Audios/wrong-answer-buzz-950.mp3');
  const winnerSound = new Audio('/Audios/medieval-fanfare-6826.mp3');
  const endGameSound = new Audio('/Audios/end-6993.mp3');


  const renderizarElemento = (index) => {

    if(itemsArr[index]){
      const itemEnArr = itemsArr[index];
      const itemOriginal = items[index];

      if (itemEnArr === itemOriginal) {

        return (
            <img
              key={index}
              src={itemEnArr.src}
              alt={itemEnArr.alt}
              style={{ filter: 'none' }}               
            />        
        );
      } else {
        return (
          <img
            key={index}
            src={items[index].src}
            alt={items[index].alt}
          />
        );
      };
    } else {
      return (
        <img
          key={index}
          src={items[index].src}
          alt={items[index].alt}
        />
      );
    };
  }

  useEffect(() => {
    if(indice >= 0 && pause === true){
      const premioEncontrado = premios.find((premio) => premio.id === indice + 1)
      setItemsArr((prevItemsArr) => [...prevItemsArr, premioEncontrado]);
    }
  }, [pause]);

  useEffect(() => {
    const index = itemsArr.length -1
    if(pause === true && itemsArr[index] === items[index]){
      setScore((prev) => prev + 1)
      correctAnswer.play()
    }
    if(pause === true && itemsArr[index] !== items[index]){
      wrongAnswer.play()
    }
    console.log(score);
  }, [itemsArr]);

  useEffect(() => {
    if (tirosRestantes === 0){
      pauseIsThisIt()
      if(score === 8){
        setTimeout(() => {
          setAnimation({boxShadow: '0 0 10px 5px #31a9ff'})
          winnerSound.play()
        },1500)
        setTimeout(() => {
          setAnimation({animation: 'customAnimation 3s ease infinite'})
          playIsThisIt()
        },9000)
      } else{
        setTimeout(() => {
          endGameSound.play()
        },1500)
        // setTimeout(() => {
        //   setAnimation({animation: 'customAnimation 3s ease infinite'})
        //   playIsThisIt()
        // },6000)
      }
    }
  }, [pause])

  return (
    <div className='contenedor-de-premios' style={animation}>
        <div className="panel">
          <ul>
            <li key='1' className="casilla">
              {renderizarElemento(0)}
            </li>
            <li key='2' className="casilla">
              {renderizarElemento(1)}
            </li>
            <li key='3' className="casilla">
              {renderizarElemento(2)}
            </li>
            <li key='4' className="casilla">
              {renderizarElemento(3)}
            </li>
            <li key='5' className="casilla">
              {renderizarElemento(4)}
            </li>
            <li key='6' className="casilla">
              {renderizarElemento(5)}
            </li>
            <li key='7' className="casilla">
              {renderizarElemento(6)}
            </li>
            <li key='8' className="casilla">
              {renderizarElemento(7)}
            </li>
            <li key='9' className="casilla">
              {renderizarElemento(8)}
            </li>
          </ul>
        </div>
        <p>Score: {score} to 9</p>      
    </div>
  );
};

export default Panel;