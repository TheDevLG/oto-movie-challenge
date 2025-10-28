import React, { useEffect, useState } from 'react';
import { ScrollView, ActivityIndicator, Alert } from 'react-native';
import { Container, Poster, Title, Small, Button, ButtonText } from './styles';
import { getMovieDetails } from '../../api/tmdb';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { addFavorite, removeFavorite } from '../../store/favoritesSlice';

export default function MovieScreen({ route, navigation }: any) {
  const { id } = route.params;
  const [movie, setMovie] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const favorites = useSelector((s: RootState) => s.favorites.items);

  const isFav = favorites.some((m: any) => m.id === id);

  useEffect(() => {
    (async () => {
      try {
        const res = await getMovieDetails(id);
        setMovie(res.data);
      } catch (e) {
        Alert.alert('Erro', 'Não foi possível carregar o filme');
        navigation.goBack();
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  if (loading || !movie)
    return <ActivityIndicator style={{ flex: 1 }} color="#E50914" />;

  const toggleFav = () => {
    if (isFav) dispatch(removeFavorite(movie.id));
    else dispatch(addFavorite(movie));
  };

  return (
    <ScrollView style={{ backgroundColor: '#121212' }}>
      <Container>
        <Poster source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }} />
        <Title>{movie.title}</Title>
        <Small>🎭 Gêneros: {movie.genres?.map((g: any) => g.name).join(', ')}</Small>
        <Small>📅 Lançamento: {movie.release_date}</Small>
        <Small>💰 Receita: {movie.revenue ? `R$ ${movie.revenue}` : '—'}</Small>
        <Small style={{ marginTop: 12 }}>{movie.overview}</Small>

        <Button onPress={toggleFav} isFav={isFav}>
          <ButtonText>{isFav ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}</ButtonText>
        </Button>
      </Container>
    </ScrollView>
  );
}
