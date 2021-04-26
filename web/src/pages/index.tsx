import { GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { format, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import {
  HomePage,
  LatestEpisodes,
  AllEpisodes,
  EpisodeItem,
  EpisodeItemDetails,
  EpisodeItemTitle,
  EpisodeItemMembers,
  EpisodeItemButton,
  AllEpisodesTitle,
  TableEpisodes,
  TheadEpisodes,
  ThEpisodes,
  TbodyEpisodes,
  TrEpisodes,
  TdEpisodes,
  AllEpisodesButton,
} from '../../styles/styleIndex';
import api from "../services/api";
import convertDurationToTimeString from '../utils/convertDurationToTimeString';
import { usePlayer } from '../contexts/PlayerContext';
import episodes from './episodes/[slug]';

type Episode = {
  id: string,      
  title: string,
  members: string,
  published_at: string,
  thumbnail: string,
  description: string,
  url: string,
  duration: number,
  published_at_Formatted: string,
  durationFormatted: string
}

type HomeProps = {
  allEpisodes: Episode[];
  latestEpisodes: Episode[];
}

export default function Home({ allEpisodes, latestEpisodes }: HomeProps){
  const { play } = usePlayer();

  return (
    <HomePage>
      <LatestEpisodes>
        <h2>Últimos lançamentos</h2>

        <ul>
          {latestEpisodes.map((episode) => (
            <EpisodeItem key={episode.id}>
              <Image 
                width={192} 
                height={192} 
                src={episode.thumbnail} 
                alt={episode.title}
                objectFit="cover" 
              />

              <EpisodeItemDetails>
                <Link href={`/episodes/${episode.id}`}>
                  <EpisodeItemTitle>{episode.title}</EpisodeItemTitle>
                </Link>
                <EpisodeItemMembers>{episode.members}</EpisodeItemMembers>
                <span>{episode.published_at_Formatted}</span>
                <span>{episode.durationFormatted}</span>
              </EpisodeItemDetails>

              <EpisodeItemButton onClick={() => {play(episode)}}>
                <img src="play-green.svg" alt="tocar episodio"/>
              </EpisodeItemButton>
            </EpisodeItem>
          ))}
        </ul>
      </LatestEpisodes>

      <AllEpisodes>
        <AllEpisodesTitle> Todos os Episódios</AllEpisodesTitle>

        <TableEpisodes cellSpacing={0}>
          <TheadEpisodes>
            <TrEpisodes>
              <ThEpisodes></ThEpisodes>
              <ThEpisodes>Podcast</ThEpisodes>
              <ThEpisodes>Integrantes</ThEpisodes>
              <ThEpisodes>Data</ThEpisodes>
              <ThEpisodes>Duração</ThEpisodes>
              <ThEpisodes></ThEpisodes>
              </TrEpisodes>
          </TheadEpisodes>

          <TbodyEpisodes>
            {allEpisodes.map((episode) => (
              <TrEpisodes key={episode.id}>
                <TdEpisodes>
                  <Image 
                    src={episode.thumbnail}
                    alt={episode.title}
                    width={120}
                    height={120}
                    objectFit="cover"
                  />
                </TdEpisodes>
                <TdEpisodes>
                  <Link href={`/episodes/${episode.id}`}>
                    <a>{episode.title}</a>
                  </Link>
                </TdEpisodes>
                <TdEpisodes>{episode.members}</TdEpisodes>
                <TdEpisodes
                  style={{width: 110}}
                >
                  {episode.published_at_Formatted}
                </TdEpisodes>
                <TdEpisodes>{episode.durationFormatted}</TdEpisodes>
                <TdEpisodes>
                  <AllEpisodesButton type="button">
                    <img src="play-green.svg" alt="tocar podcast"/>
                  </AllEpisodesButton>
                </TdEpisodes>
              </TrEpisodes>
            ))}
          </TbodyEpisodes>
        </TableEpisodes>
      </AllEpisodes>
    </HomePage>
  );
}

export const getStaticProps:GetStaticProps = async() => {
  const { data } = await api.get('/episodes', {
    params: {
      _limit: 12,
      _sort: 'published_at',
      _order: 'desc'
    }
  });

  const episodes = data.map((episode) => {
    return {
      id: episode.id,
      title: episode.title,
      members: episode.members,
      published_at: episode.published_at,
      published_at_Formatted: format(parseISO(episode.published_at), 'd MMM yy', { locale: ptBR }),
      thumbnail: episode.thumbnail,
      description: episode.description,
      duration: Number(episode.file.duration),
      durationFormatted: convertDurationToTimeString(Number(episode.file.duration)),
      url: String(episode.file.url),
    };
  });

  const latestEpisodes = episodes.slice(0, 2);
  const allEpisodes = episodes.slice(2, episodes.length);

  return {
    props: {
      latestEpisodes,
      allEpisodes,
    },
    revalidate: 60 * 60 * 8,
  };
}
