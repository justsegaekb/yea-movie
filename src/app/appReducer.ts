import { moviesApi } from "@/entities/movies/api/moviesApi";
import { combineReducers } from "@reduxjs/toolkit";
import { moviesReducer } from "@/entities/movies/";
import { categoriesApi } from "@/entities/categories/api/categoriesApi";

export const rootReducer = combineReducers({
  movies: moviesReducer,
  [moviesApi.reducerPath]: moviesApi.reducer,
  [categoriesApi.reducerPath]: categoriesApi.reducer,
});
