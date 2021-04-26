import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  height: calc(100vh - 6.5rem);
  padding: 3rem 2rem;
  margin: 0 auto;
  overflow-y: scroll;
`;

export const Episode = styled.div`
  max-width: 45rem;
  height: calc(100vh - 6.5rem);
  padding: 3rem 2rem;
  margin: 0 auto;
`;

export const ThumbnailContainer = styled.div`
  position: relative;

  img {
    border-radius: 1rem;
  }
`;

export const ThumbnailButton = styled.button`
  width: 3rem;
  height: 3rem;
  border-radius: 0.75rem;
  border: 0;
  position: absolute;
  z-index: 5;
  font-size: 0;
  transition: filter 0.3s;
  left: 0;
  top: 50%;
  background: ${props => props.theme.colors.purple_500};
  transform: translate(-50%, -50%);

  &:hover {
    filter: brightness(0.7);
  }
`;

export const ButtonPlay = styled.button`
  width: 3rem;
  height: 3rem;
  border-radius: 0.75rem;
  border: 0;
  position: absolute;
  z-index: 5;
  font-size: 0;
  transition: filter 0.3s;
  right: 0;
  top: 50%;
  background: ${props => props.theme.colors.green_500};
  transform: translate(50%, -50%);

  &:hover {
    filter: brightness(0.7);
  }
`;

export const Header = styled.header`
  padding-bottom: 1rem;
  border-bottom: 1px solid ${props => props.theme.colors.gray_100};

  h1 {
    margin-top: 2rem;
    margin-bottom: 1.5rem;
  }

  span {
    display: inline-block;
    font-size: 0.875rem;

    & + span {
      margin-left: 1rem;
      padding-left: 1rem;
      position: relative;

      &::before{
        content: "";
        width: 4px;
        height: 4px;
        border-radius: 2px;
        background: #DDD;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
`;

export const Description = styled.div`
  margin-top: 2rem;
  line-height: 1.675rem;
  color: ${props => props.theme.colors.gray_800};

  p {
    margin: 1.5rem 0;
  }
`;
