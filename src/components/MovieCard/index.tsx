import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { Container, Info, Title, Small } from './styles';
import { Movie } from '../../types/movie';

type Props = {
  movie: Movie;
  onPress?: () => void;
};

export default function MovieCard({ movie, onPress }: Props) {
  const posterUri = movie?.poster_path
    ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
    : undefined;

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <Container>
        {posterUri ? (
          <Image
            source={{ uri: posterUri }}
            style={{
              width: 90,
              height: 130,
              borderRadius: 8,
              backgroundColor: '#222',
            }}
          />
        ) : (
          <Image
            source={require('../../../assets/placeholder.png')}
            style={{ width: 90, height: 130 }}
          />
        )}
        <Info>
          <Title numberOfLines={2}>{movie?.title ?? '—'}</Title>
          <Small>
            ⭐ Média: {movie?.vote_average?.toFixed(1) ?? '—'} ({movie?.vote_count ?? 0} votos)
          </Small>
          <Small>🔥 Popularidade: {movie?.popularity ?? 0}</Small>
        </Info>
      </Container>
    </TouchableOpacity>
  );
}
