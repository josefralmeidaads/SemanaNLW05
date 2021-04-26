import { createContext, useContext, useState } from 'react';
import { ReactNode } from 'react';

interface Episode {
  id: number,
  title: string,
  members: string,
  published_at: Date,
  published_at_Formatted: string,
  thumbnail: string,
  description: string,
  duration: Number,
  durationFormatted: string,
  url: string,
}

interface PlayerContextData {
  episodeList: Episode[];
  currentEpisodeIndex: number;
  isPlaying: boolean;
  play: (episode) => void;
  togglePlay: () => void;
}

export const PlayerContext = createContext<PlayerContextData>({} as PlayerContextData);

export const PlayerProvider = ({ children }) => {
  const [episodeList, setEpisodeList] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0);

  const play = (episode) => {
    setEpisodeList([episode]);
    setCurrentEpisodeIndex(0);
    setIsPlaying(true);
  }

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  }

  return (
    <PlayerContext.Provider 
      value={{
        currentEpisodeIndex,
        episodeList,
        isPlaying,
        play,
        togglePlay,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
}

export function usePlayer(){
   const { play, togglePlay, currentEpisodeIndex, episodeList, isPlaying } = useContext(PlayerContext);

   return { play, togglePlay, currentEpisodeIndex, episodeList, isPlaying };
}
