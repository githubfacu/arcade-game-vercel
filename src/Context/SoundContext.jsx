import React, { createContext, useContext } from 'react';

const SoundContext = createContext();

export const SoundProvider = ({ children }) => {

  const audio = new Audio('/Audios/the-strokes-is-this-it-8-bit.mp3');

  const playIsThisIt = () => {
    audio.currentTime = 0;
    audio.play()
  };

  const pauseIsThisIt = () => {
    audio.pause()
  };


  return (
    <SoundContext.Provider value={{ playIsThisIt, pauseIsThisIt }}>
      {children}
    </SoundContext.Provider>
  );
};

export const useSound = () => {
  return useContext(SoundContext);
};