import { moviesApi } from "@/entities/movies/api/moviesApi";
import { combineReducers } from "@reduxjs/toolkit";
import { moviesReducer } from '@/entities/movies/'

export const rootReducer = combineReducers({
  movies: moviesReducer,
  [moviesApi.reducerPath]: moviesApi.reducer,
});
