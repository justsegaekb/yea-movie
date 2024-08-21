import { moviesApi } from "@/entities/movies/api/moviesApi";
import { combineReducers } from "@reduxjs/toolkit";
import { moviesReducer } from "@/entities/movies/";
import { categoriesReducer } from "@/entities/categories/";
import { categoriesApi } from "@/entities/categories/api/categoriesApi";

export const rootReducer = combineReducers({
  movies: moviesReducer,
  categories: categoriesReducer,
  [moviesApi.reducerPath]: moviesApi.reducer,
  [categoriesApi.reducerPath]: categoriesApi.reducer,
});
