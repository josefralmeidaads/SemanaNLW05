import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { GetStaticPaths, GetStaticProps } from 'next';
import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';
import ptBR from 'date-fns/locale/pt-BR';

import api from '../../services/api';
import convertDurationToTimeString from '../../utils/convertDurationToTimeString';
import {
  Container, 
  Episode,
  ThumbnailContainer,
  ThumbnailButton,
  ButtonPlay,
  Header,
  Description, 
} from '../../styles/stylesEpisode';

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

type EpisodeProps = {
  episode: Episode;
}

const episodes: React.FC<EpisodeProps> = ({ episode }: EpisodeProps) => {
  return (
    <Container>
      <Episode>
        <ThumbnailContainer>
          <Link href="/">
            <ThumbnailButton type="button">
              <img src="/arrow-left.svg" alt="voltar"/>
            </ThumbnailButton>
          </Link>
          <Image 
            src={episode.thumbnail}
            alt={episode.title}
            width={700}
            height={160}
            objectFit="cover"
          />

          <ButtonPlay type="button">
            <img src="/play.svg" alt="Tocar episódio"/>
          </ButtonPlay>
        </ThumbnailContainer>

        <Header>
          <h1>{episode.title}</h1>
          <span>{episode.members}</span>
          <span>{episode.published_at_Formatted}</span>
          <span>{episode.durationFormatted}</span>
        </Header>

        <Description 
          dangerouslySetInnerHTML={{ __html: episode.description }}
        />
      </Episode>
    </Container>
  );
}

export const getStaticPaths: GetStaticPaths = async() => {
  const { data } = await api.get('/episodes', {
    params: {
      _limit: 2,
      _sort: 'published_at',
      _order: 'desc'
    }
  });

  const paths = data.map((episode) => {
    return {
      params: {
        slug: episode.id
      },
    };
  })

  return {
    paths,
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async(context) => {
  const { slug } = context.params;

  const { data } = await api.get(`/episodes/${slug}`);

  const episode = {
    id: data.id,
    title: data.title,
    members: data.members,
    published_at: data.published_at,
    published_at_Formatted: format(parseISO(data.published_at), 'd MMM yy', { locale: ptBR }),
    thumbnail: data.thumbnail,
    description: data.description,
    duration: Number(data.file.duration),
    durationFormatted: convertDurationToTimeString(Number(data.file.duration)),
    url: Number(data.file.url),
  }
  return {
    props: {
      episode,
    },
    revalidate: 60 * 60 * 24, // segundos * minutos * horas
  };
}

export default episodes;