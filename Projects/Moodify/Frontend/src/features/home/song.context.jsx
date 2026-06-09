import { useState } from 'react';
import { createContext } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export const SongContext = createContext();

export const SongContextProvider = ({ children }) => {
  const [song, setSong] = useState({
    url: 'https://ik.imagekit.io/gd7m5x6n2/cohort-2/moodify/songs/High_On_Me__RiskyjaTT.CoM__644QSKY1y.mp3',
    posterUrl:
      'https://ik.imagekit.io/gd7m5x6n2/cohort-2/moodify/posters/High_On_Me__RiskyjaTT.CoM__jpeg_bVAI0AtYf',
    title: 'High On Me (RiskyjaTT.CoM)',
    mood: 'happy',
  });

  const [loading, setLoading] = useState(false);

  return (
    <SongContext.Provider value={{ song, setSong, loading, setLoading }}>
      {children}
    </SongContext.Provider>
  );
};
