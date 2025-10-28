import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { Container, Info, Title, Small } from './styles';

type Props = {
  movie: any;
  onPress?: () => void;
};

export default function MovieCard({ movie, onPress }: Props) {
  const image = movie.poster_path
    ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
    : undefined;
  return (
    <TouchableOpacity onPress={onPress}>
      <Container>
        {image ? (
          <Image source={{ uri: image }} style={{ width: 80, height: 120, borderRadius: 6 }} />
        ) : (
          <Image source={require('../../../assets/placeholder.png')} style={{ width: 80, height: 120 }} />
        )}
        <Info>
          <Title numberOfLines={2}>{movie.title}</Title>
          <Small>⭐ Média: {movie.vote_average} ({movie.vote_count} votos)</Small>
          <Small>🔥 Popularidade: {movie.popularity}</Small>
        </Info>
      </Container>
    </TouchableOpacity>
  )
};