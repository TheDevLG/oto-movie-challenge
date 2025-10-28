import React from 'react';
import { FlatList, View, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import MovieCard from '../../components/MovieCard';
import { RootState } from '../../store/index';
import { clearFavorites } from '../../store/favoritesSlice';
import { Container, Empty, ClearButton } from './styles';

export default function FavoritesScreen({ navigation }: any) {
  const favorites = useSelector((s: RootState) => s.favorites.items);
  const dispatch = useDispatch();

  return (
    <Container>
      {favorites.length === 0 ? (
        <Empty>
          <Text>Nenhum favorito ainda</Text>
        </Empty>
      ) : (
        <>
          <ClearButton onPress={() => dispatch(clearFavorites())}>
            <Text style={{ color: 'white' }}>Limpar todos</Text>
          </ClearButton>
          <FlatList
            data={favorites}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => (
              <MovieCard movie={item} onPress={() => navigation.navigate('Movie', { id: item.id })} />
            )}
          />
        </>
      )}
    </Container>
  );
}