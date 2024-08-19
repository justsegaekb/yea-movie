import { useGetMoviesQuery } from "./api/moviesApi";
import moviesReducer from "./model/moviesSlice";
import type {
  Caregories,
  ParamsType,
  IMovie,
  MoviesApiResonse,
} from "../../shared/types/types";
import { MovieCard } from "./ui/movieCard/MovieCard";

export { useGetMoviesQuery, moviesReducer, MovieCard };
export type { Caregories, ParamsType, IMovie, MoviesApiResonse };

