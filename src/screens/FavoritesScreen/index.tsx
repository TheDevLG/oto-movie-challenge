import React from 'react';
import { FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector, useDispatch } from 'react-redux';
import MovieCard from '../../components/MovieCard';
import { RootState } from '../../store';
import { clearFavorites } from '../../store/favoritesSlice';
import { Container, Empty, EmptyText, ClearButton, ClearButtonText } from './styles';

export default function FavoritesScreen({ navigation }: any) {
  const favorites = useSelector((s: RootState) => s.favorites.items);
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#121212' }} edges={['top', 'bottom']}>
      <Container>
        {favorites.length === 0 ? (
          <Empty>
            <EmptyText>💔 Nenhum favorito ainda</EmptyText>
          </Empty>
        ) : (
          <>
            <ClearButton onPress={() => dispatch(clearFavorites())}>
              <ClearButtonText>🗑️ Limpar todos</ClearButtonText>
            </ClearButton>

            <FlatList
              data={favorites}
              keyExtractor={(item) => String(item.id)}
              renderItem={({ item }) => (
                <MovieCard
                  movie={item}
                  onPress={() => navigation.navigate('Movie', { id: item.id })}
                />
              )}
            />
          </>
        )}
      </Container>
    </SafeAreaView>
  );
}
