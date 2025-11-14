import React, { useCallback, useState, useEffect } from 'react';
import { FlatList, ActivityIndicator, RefreshControl } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MovieCard from '../../components/MovieCard';
import { Container, Header, Title } from './styles';
import { getTopRated } from '../../services/tmdb';
import { Movie, PaginatedResponse } from '../../types/movie';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'Main'>;

export default function HomeScreen({ navigation }: Props) {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
  const [totalPages, setTotalPages] = useState<number | null>(null);

  const loadMovies = useCallback(
    async (pageToLoad = 1, replaceList = false): Promise<void> => {
      if (isLoading) return;
      setIsLoading(true);

      try {
        const response = await getTopRated(pageToLoad);
        const data = response.data as PaginatedResponse<Movie>;

        setTotalPages(data.total_pages);
        setMovies(prev => (replaceList ? data.results : [...prev, ...data.results]));
        setPage(pageToLoad);
      } catch (error) {
        console.warn('error in movies loading:', error);
      } finally {
        setIsLoading(false);
        setIsRefreshing(false);
      }
    },
    [isLoading]
  );

  useEffect(() => {
    loadMovies(1, true);
  }, []);

  const handleEndReached = () => {
    if (totalPages && page >= totalPages) return;
    loadMovies(page + 1);
  };

  const handleRefresh = () => {
    setIsRefreshing(true);
    loadMovies(1, true);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#121212' }} edges={['top', 'bottom']}>
      <Container>
        <Header>
          <Title>🎬 Filmes Mais Bem Avaliados</Title>
        </Header>

        <FlatList<Movie>
          data={movies}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <MovieCard movie={item} onPress={() => navigation.navigate('Movie', { id: item.id })} />
          )}
          onEndReached={handleEndReached}
          onEndReachedThreshold={0.5}
          ListFooterComponent={
            isLoading ? <ActivityIndicator color="#E50914" style={{ marginVertical: 20 }} /> : null
          }
          refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} tintColor="#E50914" />}
        />
      </Container>
    </SafeAreaView>
  );
}
