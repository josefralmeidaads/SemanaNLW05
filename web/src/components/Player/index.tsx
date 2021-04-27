import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import SliderRC from 'rc-slider';
import 'rc-slider/assets/index.css';

import { usePlayer } from '../../contexts/PlayerContext';
import { 
  PlayerContainer,
  PlayerHeader,
  PlayerImg,
  PlayerEmpty,
  PlayerCurrentEpisode,
  PlayerFooter,
  PlayerProgress,
  ProgressCurrent,
  EmptySlider,
  Slider,
  PlayerButtonsDiv,
  PlayerButtons,
  PlayerButtonsLoop,
  PlayerButtonsShuffle,
  ButtonPlay,
  PlayerButtonsImg, 
} from './styles';
import convertDurationToTimeString from '../../utils/convertDurationToTimeString';

const Player: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [progress, setProgress] = useState(0);

  const { 
    episodeList, 
    currentEpisodeIndex, 
    isPlaying,
    isLooping,
    isShuffle,
    togglePlay,
    toggleLooping,
    toggleShuffle,
    onPlayKeyboard,
    playNext,
    playPrevious,
    enablePreviousAndNextButton, 
  } = usePlayer();
  const episode = episodeList[currentEpisodeIndex];

  useEffect(() => {
    if(!audioRef.current){
      return;
    }

    if(isPlaying){
      audioRef.current.play();
    }else {
      audioRef.current.pause();
    }
  } ,[isPlaying]);

  const setupProgressListener = () => {
    audioRef.current.currentTime = 0;

    audioRef.current.addEventListener('timeupdate', () => {
      setProgress(audioRef.current.currentTime);
    });
  }

  const handleSeek = (amount: number) => {
    audioRef.current.currentTime = amount;
    setProgress(amount);
  }

  return (
    <PlayerContainer>
      <PlayerHeader>
        <PlayerImg src={"playing.svg"} alt="Tocando agora" />
        <strong>Tocando agora</strong>
      </PlayerHeader>

      {!episode ? (
      <PlayerEmpty>
        <strong>Selecione um podcast para ouvir</strong>
      </PlayerEmpty>
      ) : (
      <PlayerCurrentEpisode>
        <Image 
          src={episode.thumbnail}
          width={592}
          height={592}
          objectFit="cover"
        />
        <strong>{episode.title}</strong>
        <span>{episode.members}</span>
      </PlayerCurrentEpisode>
      ) }

      <PlayerFooter empty={!episode ? true : false}>
        <PlayerProgress>
          <ProgressCurrent>{convertDurationToTimeString(progress)}</ProgressCurrent>
            <Slider>
              {!episode ? (
                <EmptySlider />
              ) : (
                <SliderRC 
                  max={episode.duration}
                  value={progress}
                  onChange={handleSeek}
                  trackStyle={{background: "#04D361"}}
                  railStyle={{background: "#9F75FF"}}
                  handleStyle={{borderColor: "#04D361"}}
                />
              )}
            </Slider>
          <ProgressCurrent>{episode?.durationFormatted ?? '00:00:00'}</ProgressCurrent>
        </PlayerProgress>
        
        {episode && (
          <audio 
            ref={audioRef}
            src={episode.url}
            autoPlay
            loop={isLooping}
            onPlay={() => onPlayKeyboard(true)}
            onPause={() => onPlayKeyboard(false)}
            onLoadedMetadata={setupProgressListener}
            onEnded={playNext} 
          />
        )}

        <PlayerButtonsDiv>
          <PlayerButtonsShuffle 
            disabled={!episode || !enablePreviousAndNextButton} 
            onClick={toggleShuffle}
            shuflle={isShuffle}
          >
            <PlayerButtonsImg src="/shuffle.svg" alt="Embaralhar"/>
          </PlayerButtonsShuffle>

          <PlayerButtons disabled={!episode || !enablePreviousAndNextButton} onClick={playPrevious}>
            <PlayerButtonsImg src="/play-previous.svg" alt="voltar"/>
          </PlayerButtons>

          <ButtonPlay 
            disabled={!episode} 
            onClick={togglePlay}
          >
            {!isPlaying ? <PlayerButtonsImg src="/play.svg" alt="tocar"/>
            : <PlayerButtonsImg src="/pause.svg" alt="tocar"/>}
          </ButtonPlay>

          <PlayerButtons disabled={!episode || !enablePreviousAndNextButton} onClick={playNext}>
            <PlayerButtonsImg src="/play-next.svg" alt="avançar"/>
          </PlayerButtons>

          <PlayerButtonsLoop
            disabled={!episode} 
            onClick={toggleLooping}
            loop={isLooping}
          >
            <PlayerButtonsImg src="/repeat.svg" alt="repetir" color="#000"/>
          </PlayerButtonsLoop>
        </PlayerButtonsDiv>
      </PlayerFooter>

    </PlayerContainer>
  );
}

export default Player;