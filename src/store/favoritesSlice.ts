import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@oto:favorites';

type State = {
  items: any[];
};

const initialState: State = { items: [] };

const slice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    setFavorites(state, action: PayloadAction<any[]>) {
      state.items = action.payload;
    },
    addFavorite(state, action: PayloadAction<any>) {
      state.items.push(action.payload);
      AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(state.items));
    },
    removeFavorite(state, action: PayloadAction<number>) {
      state.items = state.items.filter(i => i.id !== action.payload);
      AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(state.items));
    },
    clearFavorites(state) {
      state.items = [];
      AsyncStorage.removeItem(STORAGE_KEY);
    }
  }
});

export const { addFavorite, removeFavorite, clearFavorites, setFavorites } = slice.actions;

export default slice.reducer;

export const loadFavorites = async (dispatch: any) => {
  try {
    const raw = await AsyncStorage.getItem(STORAGE_KEY);
    if (raw) {
      dispatch(setFavorites(JSON.parse(raw)));
    }
  } catch (e) {
    console.warn('Could not load favorites', e);
  }
};