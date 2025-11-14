import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Movie } from '../types/movie';

const STORAGE_KEY = '@oto:favorites';

type FavoritesState = {
  items: Movie[];
};

const initialState: FavoritesState = { items: [] };

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    setFavorites(state, action: PayloadAction<Movie[]>) {
      state.items = action.payload;
    },
    addFavorite(state, action: PayloadAction<Movie>) {
      state.items.push(action.payload);
      AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(state.items)).catch(err =>
        console.warn('AsyncStorage add error', err)
      );
    },
    removeFavorite(state, action: PayloadAction<number>) {
      state.items = state.items.filter(i => i.id !== action.payload);
      AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(state.items)).catch(err =>
        console.warn('AsyncStorage remove error', err)
      );
    },
    clearFavorites(state) {
      state.items = [];
      AsyncStorage.removeItem(STORAGE_KEY).catch(err =>
        console.warn('AsyncStorage clear error', err)
      );
    },
  },
});

export const { addFavorite, removeFavorite, clearFavorites, setFavorites } =
  favoritesSlice.actions;

export default favoritesSlice.reducer;
