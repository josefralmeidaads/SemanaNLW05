import React, { ReactNode, useState } from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';

import { Container, ButtonText } from './styles';

interface RectButtonProps extends RectButtonProperties {
  title?: string;
  isActive?: boolean;
  children?: ReactNode;
}

const EnviromentButton: React.FC<RectButtonProps> = ({ children, title, isActive,...rest }) => {
  return (
    <Container active={isActive} {...rest}>
      { title ? 
        <ButtonText active={isActive}>{title}</ButtonText>
       : children }
    </Container>
  );
}

export default EnviromentButton;