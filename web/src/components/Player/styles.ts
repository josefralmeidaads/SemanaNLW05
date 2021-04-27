import styled, { css } from 'styled-components';

interface ButtonLoopProps {
  loop: boolean;
}

interface ButtonShuffleProps {
  shuflle: boolean;
}

interface FooterPlayerProps {
  empty: boolean;
}

export const PlayerContainer = styled.div`
  padding: 3rem 4rem;
  width: 25.6rem;
  height: 100vh;

  background: ${props => props.theme.colors.purple_500};
  color: ${props => props.theme.colors.white};
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: space-between;
`;

export const PlayerHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  
  strong {
    font-family: Lexend, sans-serif;
    font-weight: 600;

  }
`;

export const PlayerImg = styled.img`

`;

export const PlayerEmpty = styled.div`
  width: 100%;
  height: 20rem;
  border: 1.5px dashed ${props => props.theme.colors.purple_300};
  border-radius: 1.5rem;
  background: linear-gradient( 143.8deg, rgba(145, 100, 250, 0.8)0%, rgba(0, 0, 0, 0)100%);

  padding: 4rem;
  text-align: center;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PlayerCurrentEpisode = styled.div`
  margin-top: -10rem;
  text-align: center;
  width: 100%;
  height: 20rem;

  img {
    border-radius: 1.5rem;
  }

  strong {
    display: block;
    margin-top: 1rem;
    font: 600 1.25rem 'Lexend', sans-serif;
    line-height: 1.5rem;
  }

  span {
    display: block;
    margin-top: 1rem;
    opacity: 0.6;
  }
`;

export const PlayerFooter = styled.footer<FooterPlayerProps>`
  align-items: center;
  justify-content: center;
  ${props => props.empty && css`
      opacity: 0.5;
  `}
`;

export const PlayerProgress = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  font-size: 0.875rem;
  width: 20rem;
`;

export const ProgressCurrent = styled.span`
  display: inline-block;
  width: 4rem;
  text-align: center;
`;

export const Slider = styled.div`
  width: 100%;
`;

export const EmptySlider = styled.div`
  width: 100%;
  height: 4px;
  background: ${props => props.theme.colors.purple_300};
  border-radius: 2px;
`;

export const PlayerButtonsDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 2.5rem;
  gap: 1.5rem;
`;

export const PlayerButtons = styled.button`
 background: transparent;
 border: 0;
 font-size: 0%;
  transition: filter 0.3s;

 &:disabled{
   cursor: not-allowed;
   opacity: 0.5;
 }
 &:hover:not(:disabled) {
   filter: brightness(0.5);
 }
`;

export const PlayerButtonsLoop = styled.button<ButtonLoopProps>`
  background: transparent;
  border: 0;
  font-size: 0%;
  transition: filter 0.3s;

  &:disabled{
    cursor: not-allowed;
    opacity: 0.5;
  }
  &:hover:not(:disabled) {
    filter: brightness(0.5);
  }

  ${props => props.loop && css`
    filter: invert(0.35) sepia(1) saturate(10) hue-rotate(60deg);
  `}
`;

export const PlayerButtonsShuffle = styled.button<ButtonShuffleProps>`
  background: transparent;
  border: 0;
  font-size: 0%;
  transition: filter 0.3s;

  &:disabled{
    cursor: not-allowed;
    opacity: 0.5;
  }
  &:hover:not(:disabled) {
    filter: brightness(0.5);
  }

  ${props => props.shuflle && css`
    filter: invert(0.35) sepia(1) saturate(10) hue-rotate(60deg);
  `}
`;

export const ButtonPlay = styled.button`
 background: transparent;
 border: 0;
 font-size: 0;
 width: 4rem;
 height: 4rem;
 border-radius: 1rem;
 background: ${props => props.theme.colors.purple_400};
 transition: filter 0.3s;
 &:disabled{
   cursor: not-allowed;
   opacity: 0.5;
 }
 &:hover:not(:disabled) {
   filter: brightness(0.5);
 }
`;

export const PlayerButtonsImg = styled.img`

`;