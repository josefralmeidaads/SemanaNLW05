import React, { ReactNode } from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { SvgFromUri } from 'react-native-svg';

import { Container, NamePlant } from './styles';

interface PlantsProps extends RectButtonProps {
  children?: ReactNode;
  data: {
    name: string;
    photo: string;
  };
}

const PlantCardPrimary: React.FC<PlantsProps> = ({children , data,...rest}) => {
  return (
    <Container {...rest}>
      {children ? children :
        (<>
          <SvgFromUri 
            uri={data.photo}
            width={110}
            height={110}
          />
          <NamePlant>
            {data.name}
          </NamePlant>
        </>
        )
      }
    </Container>
  );
}

export default PlantCardPrimary;