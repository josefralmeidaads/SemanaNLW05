import styled from 'styled-components';

export const HomePage = styled.div`
  padding: 0 4rem;
  height: calc(100vh - 6.5rem);
  overflow-y: scroll;

  h2 {
    margin-top: 3rem;
    margin-bottom: 1.5rem;
  }

`;

export const LatestEpisodes = styled.section`
  ul {
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
  }
`;

export const EpisodeItem = styled.li`
  background: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.gray_100};
  padding: 1.25rem;
  border-radius: 1.5rem;
  position: relative;

  display: flex;
  align-items: center;

  img {
    width: 6rem;
    height: 6rem;
    border-radius: 1rem;
  }
`;

export const EpisodeItemDetails = styled.div`
  flex: 1;
  margin-left: 1rem;

  a {
    display: block;
    color: ${props => props.theme.colors.gray_800};
    font-family: 'Lexend', sans-serif;
    font-weight: 600;
    text-decoration: none;
    line-height: 1.4rem;

    &:hover {
      text-decoration: underline;
    }
  }

  span {
      display: inline-block;
      margin-top: 0.5rem;
      font-size: 0.875rem;
      &:last-child {
      margin-left: 0.5rem;
      padding-left: 0.5rem;
      position: relative;

      &::before {
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

export const EpisodeItemTitle = styled.a`
  display: block;
  color: ${props => props.theme.colors.gray_800};
  font-family: 'Lexend', sans-serif;
  font-weight: 600;
  text-decoration: none;
  line-height: 1.4rem;

  &:hover {
    text-decoration: underline;
  }
`;

export const EpisodeItemMembers = styled.p`
  font-size: 0.875rem;
  margin-top: 0.5rem;
  max-width: 70%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const EpisodeItemButton = styled.button`
  position: absolute;
  right: 2rem;
  bottom: 2rem;

  width: 2.5rem;
  height: 2.5rem;
  background: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.gray_100};
  border-radius: 0.675rem;
  transition: filter 0.3s;
  font-size: 0;

  img{
    width: 1.5rem;
    height: 1.5rem;
  }

  &:hover {
    filter: brightness(0.8);
  }
`;

export const AllEpisodes = styled.section`
  padding-bottom: 2rem;
`;

export const AllEpisodesTitle = styled.h2`
  margin-top: 3rem;
  margin-bottom: 1.5rem;
`;

export const TheadEpisodes = styled.thead`

`;

export const ThEpisodes = styled.th`
  padding: 0.75rem 1rem;
  border-bottom: 1px solid ${props => props.theme.colors.gray_100};
  color: ${props => props.theme.colors.gray_200};
  text-transform: uppercase;
  font: 500 0.75rem 'Lexend', sans-serif;
  text-align: left;
`;

export const TbodyEpisodes = styled.tbody`

`;

export const TrEpisodes = styled.tr`

`;

export const TdEpisodes = styled.td`
  padding: 0.75rem 1rem;
  border-bottom: 1px solid ${props => props.theme.colors.gray_100};
  font-size: 0.875rem;
    img {
      width: 5rem;
      height: 2.5rem;
      border-radius: 0.5rem;
    }

    a {
      color: ${props => props.theme.colors.gray_800};
      font-family: Lexend, sans-serif;
      font-weight: 600; 
      text-decoration: none;
      line-height: 1.4rem;
      font-size: 1rem;
      &:hover {
        text-decoration: underline;
      }
    }
`;

export const AllEpisodesButton = styled.button`
  width: 2rem;
  height: 2rem;
  background: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.gray_100};
  border-radius: 0.5rem;
  transition: filter 0.3s;
  font-size: 0;

  img{
    width: 1.25rem;
    height: 1.25rem;
  }

  &:hover {
    filter: brightness(0.8);
  }
`;


export const TableEpisodes = styled.table`
  width: 100%;
`;


