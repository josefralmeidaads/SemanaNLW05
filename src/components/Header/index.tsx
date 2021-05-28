import React from 'react';
import { 
  Container,
  Content,
  Greeting,
  UserName,
  ImgHeader, 
} from './styles';

import avatar from '../../assets/avata.png';

const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <Greeting>Olá</Greeting>
        <UserName>Larissa</UserName>
      </Content>
      <ImgHeader source={{ uri: "https://scontent-gru1-2.xx.fbcdn.net/v/t1.6435-9/78850675_906950959701239_5697756477331079168_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=cp4t_hqyfqYAX_W-G8s&_nc_ht=scontent-gru1-2.xx&oh=a703db8076e8ea007fbe940de17f6350&oe=60D5484A" }}/>
    </Container>
  );
}

export default Header;