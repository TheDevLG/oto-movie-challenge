import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { setFavorites } from '../store/favoritesSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@oto:favorites';

export const useFavorites = () => {
  const favorites = useSelector((state: RootState) => state.favorites.items);
  const dispatch = useDispatch();

  useEffect(() => {
    const loadFavorites = async () => {
      try {
        const raw = await AsyncStorage.getItem(STORAGE_KEY);
        if (raw) {
          dispatch(setFavorites(JSON.parse(raw)));
        }
      } catch (e) {
        console.warn('Erro ao carregar favoritos:', e);
      }
    };

    loadFavorites();
  }, [dispatch]);

  return favorites;
};
