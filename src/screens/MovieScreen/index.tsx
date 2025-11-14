import React, { useEffect, useState } from 'react';
import { ScrollView, ActivityIndicator, Alert } from 'react-native';
import { Container, Poster, Title, Small, Button, ButtonText } from './styles';
import { getMovieDetails } from '../../services/tmdb';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { addFavorite, removeFavorite } from '../../store/favoritesSlice';
import { Movie } from '../../types/movie';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'Movie'>;

export default function MovieScreen({ route, navigation }: Props) {
  const { id } = route.params;
  const [movie, setMovie] = useState<Movie | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const dispatch = useAppDispatch();
  const favorites = useAppSelector(s => s.favorites.items);
  const isFavorite = favorites?.some(m => m.id === id);

  useEffect(() => {
    (async () => {
      try {
        const response = await getMovieDetails(id);
        setMovie(response.data ?? null);
      } catch (error) {
        Alert.alert('Erro', 'Não foi possível carregar o filme');
        navigation.goBack();
      } finally {
        setIsLoading(false);
      }
    })();
  }, [id]);

  if (isLoading || !movie) return <ActivityIndicator style={{ flex: 1 }} color="#E50914" />;

  const toggleFavorite = (): void => {
    if (!movie) return;
    if (isFavorite) dispatch(removeFavorite(movie.id));
    else dispatch(addFavorite(movie));
  };

  const formatMoneyBR = (value?: number): string => {
    if (!value && value !== 0) return '—';
    return value!.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  };

  const formatDateBR = (date?: string): string => {
    if (!date) return '—';
    return date.replace(/^(\d{4})-(\d{2})-(\d{2})$/, '$3/$2/$1');
  };

  return (
    <ScrollView style={{ backgroundColor: '#121212' }}>
      <Container>
        <Poster source={{ uri: `https://image.tmdb.org/t/p/w500${movie?.poster_path}` }} />
        <Title>{movie?.title ?? '—'}</Title>
        <Small>🎭 Gêneros: {movie?.genres?.map(g => g.name).join(', ') ?? '—'}</Small>
        <Small>📅 Lançamento: {formatDateBR(movie?.release_date)}</Small>
        <Small>💰 Receita: R$ {movie?.revenue ? formatMoneyBR(movie.revenue) : '—'}</Small>
        <Small style={{ marginTop: 12 }}>{movie?.overview ?? '—'}</Small>

        <Button onPress={toggleFavorite} isFav={isFavorite}>
          <ButtonText>{isFavorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}</ButtonText>
        </Button>
      </Container>
    </ScrollView>
  );
}
