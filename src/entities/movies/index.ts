import { useGetMoviesQuery } from "./api/moviesApi";
import moviesReducer from "./model/moviesSlice"
import type {Caregories, ParamsType, IMovie, MoviesApiResonse} from '../../shared/types/types'


export {useGetMoviesQuery, moviesReducer};
export type {Caregories, ParamsType, IMovie, MoviesApiResonse }