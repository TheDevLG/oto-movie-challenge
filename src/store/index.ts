import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer, { loadFavorites } from './favoritesSlice';

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer
  }
});

loadFavorites(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;