import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { ButtonTouch, ButtonTouchText } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  children?: string;
}

const ButtonComponent: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <ButtonTouch {...rest}>
        <ButtonTouchText>
          {children}
        </ButtonTouchText>
      </ButtonTouch>
  );
}

export default ButtonComponent;