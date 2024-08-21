import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IMovie, MoviesApiResonse, ParamsType } from "@/shared/types/types";
import { setMovies } from "../model/moviesSlice";
const BASE_URL = import.meta.env.VITE_KINOPOISK_BASE_URL;
const API_KEY = import.meta.env.VITE_X_API_KEY;

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getMovies: builder.query<MoviesApiResonse, ParamsType>({
      query: (params) => {
        const { page = 1, limit = 16, query } = params || {};

        return {
          url: "movie/search",
          headers: {
            "X-API-KEY": API_KEY,
          },
          params: {
            page,
            limit,
            query,
          },
        };
      },
      async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
        const result = await queryFulfilled;
        const data = result.data;
        dispatch(setMovies(data));
      },
    }),
    getMovieById: builder.query<IMovie, number>({
      query: (id) => ({
        url: `movie/${id}`,
        headers: {
          "X-API-KEY": API_KEY,
        },
      }),
    }),
    getMoviesByCategory: builder.query<MoviesApiResonse, string>({
      query: (type) => ({
        url: `movie`,
        headers: {
          "X-API-KEY": API_KEY,
        },
        params: {
          type,
        },
      }),
      async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
        const result = await queryFulfilled;
        const data = result.data;
        dispatch(setMovies(data));
      },
    }),
  }),
});

export const {
  useGetMoviesQuery,
  useGetMovieByIdQuery,
  useGetMoviesByCategoryQuery,
} = moviesApi;
