import React from 'react';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { 
  HeaderContainer,
  Logo,
  Data, 
} from './styles';

const Header: React.FC = () => {
  const currentDate = format(new Date(), 'EEEE, d MMMM', {
    locale: ptBR,
  });

  return (
    <HeaderContainer>
      <Logo src="/logo.svg" alt="Podcast"/>

      <p>O melhor para você ouvir, sempre</p>

      <Data>{currentDate}</Data>
    </HeaderContainer>
  );
}

export default Header;