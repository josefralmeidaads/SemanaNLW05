import React from 'react';
import Icons from '@expo/vector-icons/AntDesign';
import { 
  Container,
  Wrapper, 
  Title,
  LogoHome, 
  Subtitle,
  ButtonAvancar,
  ButtonAvancarText
} from './styles';

import wateringImg from '../../assets/watering.png';
import { useNavigation } from '@react-navigation/core';

const Welcome: React.FC = () => {
  const navigation = useNavigation();

  const handleStart = () => {
    navigation.navigate('UserIdentification');
  }

  return (
    <Container>
      <Wrapper>
        <Title>Gerencia {'\n'} suas plantas de {'\n'} forma fácil</Title>

        <LogoHome source={wateringImg} resizeMode="contain"/>

        <Subtitle>
          Não se esqueça mais de regar suas plantas.
          Nós cuidamos de lembrar você
          sempre que precisar.
        </Subtitle>

        <ButtonAvancar activeOpacity={0.8} onPress={handleStart}>
          <ButtonAvancarText>
            <Icons 
              name="right" 
              color={"#FFFFFF"}
              size={20}
            />
          </ButtonAvancarText>
        </ButtonAvancar>
      </Wrapper>
    </Container>
  );
}

export default Welcome;