import { RectButton } from 'react-native-gesture-handler';
import styled, { css } from 'styled-components/native';

interface ButtonProps {
  active?: boolean;
}

export const Container = styled(RectButton)<ButtonProps>`
  background-color: ${props => props.theme.colors.shape};
  height: 40px;
  width: 76px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  margin-right: 5px;

  ${props => props.active && css`
    background-color: ${props => props.theme.colors.green_light};
  `};
`;

export const ButtonText = styled.Text<ButtonProps>`
  color: ${props => props.theme.colors.heading};
  font-family: ${props => props.theme.fonts.text};
  
  ${props => props.active && css`
    font-family: ${props => props.theme.fonts.heading};
    color: ${props => props.theme.colors.green_dark};
  `};
`;
