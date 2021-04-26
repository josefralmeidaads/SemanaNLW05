import React, { useEffect, useRef } from 'react';
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
  ButtonPlay,
  PlayerButtonsImg, 
} from './styles';

const Player: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const { 
    episodeList, 
    currentEpisodeIndex, 
    isPlaying,
    togglePlay, 
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
          <ProgressCurrent>00:00</ProgressCurrent>
            <Slider>
              {!episode ? (
                <EmptySlider />
              ) : (
                <SliderRC 
                  trackStyle={{background: "#04D361"}}
                  railStyle={{background: "#9F75FF"}}
                  handleStyle={{borderColor: "#04D361"}}
                />
              )}
            </Slider>
          <ProgressCurrent>00:00</ProgressCurrent>
        </PlayerProgress>
        
        {episode && (
          <audio 
            ref={audioRef}
            src={episode.url}
            autoPlay 
          />
        )}

        <PlayerButtonsDiv>
          <PlayerButtons disabled={!episode}>
            <PlayerButtonsImg src="/shuffle.svg" alt="Embaralhar"/>
          </PlayerButtons>

          <PlayerButtons disabled={!episode}>
            <PlayerButtonsImg src="/play-previous.svg" alt="voltar"/>
          </PlayerButtons>

          <ButtonPlay 
            disabled={!episode} 
            onClick={togglePlay}
          >
            {!isPlaying ? <PlayerButtonsImg src="/play.svg" alt="tocar"/>
            : <PlayerButtonsImg src="/pause.svg" alt="tocar"/>}
          </ButtonPlay>

          <PlayerButtons disabled={!episode}>
            <PlayerButtonsImg src="/play-next.svg" alt="avançar"/>
          </PlayerButtons>

          <PlayerButtons disabled={!episode}>
            <PlayerButtonsImg src="/repeat.svg" alt="repetir"/>
          </PlayerButtons>
        </PlayerButtonsDiv>
      </PlayerFooter>

    </PlayerContainer>
  );
}

export default Player;