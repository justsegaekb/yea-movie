import { useGetMoviesQuery } from "./api/moviesApi";
import moviesReducer from "./model/moviesSlice";
import type {
  CategoriesType,
  ParamsType,
  IMovie,
  MoviesApiResonse,
} from "../../shared/types/types";
import { MovieCard } from "./ui/movieCard/MovieCard";

export { useGetMoviesQuery, moviesReducer, MovieCard };
export type { CategoriesType, ParamsType, IMovie, MoviesApiResonse };
