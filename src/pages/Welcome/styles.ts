import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-around;
  padding: 0 20px;
`;

export const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  color: ${props => props.theme.colors.heading};
  margin-top: 38px;
  line-height: 38px;
  font-family: ${props => props.theme.fonts.heading};
`;

export const LogoHome = styled.Image`
  height: ${Dimensions.get('window').width * 0.7}px;
`;

export const Subtitle = styled.Text`
  text-align: center;
  font-size: 17px;
  line-height: 25px;
  padding: 0 20px;
  color: ${props => props.theme.colors.heading};
  font-family: ${props => props.theme.fonts.text};
`;

export const ButtonAvancar = styled.TouchableOpacity`
  width: 56px;
  height: 56px;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.colors.green};
  border-radius: 16px;
`;

export const ButtonAvancarText = styled.Text`
  color: #FFFFFF;
  font-size: 24px;
`;

