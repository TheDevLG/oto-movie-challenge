import axios from 'axios';
import { Movie, PaginatedResponse } from '../types/movie';

const API_KEY = 'e5f1581fc5f0f251951f85274699f1bb';
const BASE_URL = 'https://api.themoviedb.org/3';

const api = axios.create({
  baseURL: BASE_URL,
  params: { api_key: API_KEY, language: 'pt-BR' },
});

export const getTopRated = (page = 1) =>
  api.get<PaginatedResponse<Movie>>('/movie/top_rated', { params: { page } });

export const getMovieDetails = (id: number) => api.get<Movie>(`/movie/${id}`);

export default api;
