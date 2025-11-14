import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { setFavorites } from '../store/favoritesSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Movie } from '../types/movie';

const STORAGE_KEY = '@oto:favorites';

export const useFavorites = (): Movie[] => {
  const favorites = useAppSelector(state => state.favorites.items);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const loadFavoritesFromStorage = async () => {
      try {
        const rawData = await AsyncStorage.getItem(STORAGE_KEY);
        if (rawData) {
          const parsed: Movie[] = JSON.parse(rawData);
          dispatch(setFavorites(parsed));
        }
      } catch (error) {
        console.warn('Error in favorites loading:', error);
      }
    };

    loadFavoritesFromStorage();
  }, [dispatch]);

  return favorites;
};
