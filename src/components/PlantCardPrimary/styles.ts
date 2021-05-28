import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled(RectButton)`
  flex: 1;
  max-width: 45%;
  background-color: ${props => props.theme.colors.shape};
  border-radius: 20px;
  padding: 20px 0;
  align-items: center;
  margin: 10px;
`;

export const NamePlant = styled.Text`
  color: ${props => props.theme.colors.green_dark};
  font-family: ${props => props.theme.fonts.heading};
  margin: 16px 0;
`;
