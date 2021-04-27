import { createContext, useContext, useState } from 'react';
import { ReactNode } from 'react';

interface Episode {
  id: string,      
  title: string,
  members: string,
  published_at: string,
  thumbnail: string,
  description: string,
  url: string,
  duration: number,
  published_at_Formatted: string,
  durationFormatted: string
}

interface PlayerContextData {
  episodeList: Episode[];
  currentEpisodeIndex: number;
  isPlaying: boolean;
  isLooping: boolean;
  isShuffle: boolean;
  play: (episode) => void;
  togglePlay: () => void;
  onPlayKeyboard: (data: boolean) => void;
  playList: (list: Episode[], index: number) => void;
  playNext: () => void;
  playPrevious: () => void;
  toggleLooping: () => void;
  toggleShuffle: () => void;
  enablePreviousAndNextButton: boolean;
}

interface PlayerContextProviderProps {
  children: ReactNode
}

export const PlayerContext = createContext<PlayerContextData>({} as PlayerContextData);

export const PlayerProvider = ({ children }: PlayerContextProviderProps) => {
  const [episodeList, setEpisodeList] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0);
  const [enablePreviousAndNextButton, setEnablePreviousAndNextButton] = useState(false);
  const [isLooping, setIsLooping] = useState(false);
  const [isShuffle, setIsShuffle] = useState(false);

  const play = (episode: Episode) => {
    setEpisodeList([episode]);
    setCurrentEpisodeIndex(0);
    setIsPlaying(true);
    setEnablePreviousAndNextButton(false);
  }

  const playList = (list: Episode[], index: number) => {
    setEpisodeList(list);
    setCurrentEpisodeIndex(index);
    setIsPlaying(true);
    setEnablePreviousAndNextButton(true);
  }

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  }

  const toggleLooping = () => {
    setIsLooping(!isLooping);
  }

  const toggleShuffle = () => {
    setIsShuffle(!isShuffle);
  }

  const onPlayKeyboard = (data: boolean) => {
    setIsPlaying(data);
  }

  const playNext = () => {
    if(isShuffle){
      const nextEpisode = Math.floor(Math.random() * episodeList.length);
      return setCurrentEpisodeIndex(nextEpisode);
    }else {
      if(currentEpisodeIndex >= episodeList.length - 1){
        return setCurrentEpisodeIndex(0);
      }
      setCurrentEpisodeIndex(currentEpisodeIndex + 1);
    }
  }

  const playPrevious = () => {
    if(isShuffle){
      const nextEpisode = Math.floor(Math.random() * episodeList.length);
      return setCurrentEpisodeIndex(nextEpisode);
    }else {
      if(currentEpisodeIndex <= 0){
        return setCurrentEpisodeIndex(episodeList.length - 1);
      }
      setCurrentEpisodeIndex(currentEpisodeIndex - 1);
    }
  }

  return (
    <PlayerContext.Provider 
      value={{
        currentEpisodeIndex,
        episodeList,
        isPlaying,
        isLooping,
        isShuffle,
        play,
        togglePlay,
        onPlayKeyboard,
        playList,
        playNext,
        playPrevious,
        toggleLooping,
        toggleShuffle,
        enablePreviousAndNextButton,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
}

export function usePlayer(){
   const { 
     play,
     togglePlay, 
     onPlayKeyboard, 
     playList, 
     playNext, 
     playPrevious, 
     toggleLooping , 
     toggleShuffle,
     isLooping, 
     enablePreviousAndNextButton, 
     currentEpisodeIndex, 
     episodeList, 
     isPlaying,
     isShuffle, 
   } = useContext(PlayerContext);

   return { 
     play, 
     togglePlay, 
     onPlayKeyboard, 
     playList, 
     playNext, 
     playPrevious, 
     toggleLooping,
     toggleShuffle,
     isLooping, 
     enablePreviousAndNextButton, 
     currentEpisodeIndex, 
     episodeList, 
     isPlaying,
     isShuffle, 
   };
}
