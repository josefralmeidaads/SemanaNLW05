import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background: ${props => props.theme.colors.white};
  height: 6.5rem;
  display: flex;
  align-items: center;
  padding: 2rem 4rem;
  border-bottom: 1px solid ${props => props.theme.colors.gray_100};

  p {
    margin-left: 2rem;
    padding: 0.25rem 0 0.25rem 2rem;
    border-left: 1px solid ${props => props.theme.colors.gray_100};
  }
`;

export const Logo = styled.img`
  
`;

export const Data = styled.span`
  margin-left: auto;
  text-transform: capitalize;
`;
