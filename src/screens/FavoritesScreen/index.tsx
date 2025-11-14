import React from 'react';
import { FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import MovieCard from '../../components/MovieCard';
import { clearFavorites } from '../../store/favoritesSlice';
import { Container, Empty, EmptyText, ClearButton, ClearButtonText } from './styles';
import { Movie } from '../../types/movie';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'Main'>;

export default function FavoritesScreen({ navigation }: Props) {
  const favorites = useAppSelector(s => s.favorites.items as Movie[]);
  const dispatch = useAppDispatch();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#121212' }} edges={['top', 'bottom']}>
      <Container>
        {favorites?.length === 0 ? (
          <Empty>
            <EmptyText>💔 Nenhum favorito ainda</EmptyText>
          </Empty>
        ) : (
          <>
            <ClearButton onPress={() => dispatch(clearFavorites())}>
              <ClearButtonText>🗑️ Limpar todos</ClearButtonText>
            </ClearButton>

            <FlatList<Movie>
              data={favorites}
              keyExtractor={item => String(item.id)}
              renderItem={({ item }) => (
                <MovieCard movie={item} onPress={() => navigation.navigate('Movie', { id: item.id })} />
              )}
            />
          </>
        )}
      </Container>
    </SafeAreaView>
  );
}
