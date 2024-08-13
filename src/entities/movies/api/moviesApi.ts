import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { MoviesApiResonse, ParamsType } from "../model/types";
import { setMovies } from "../model/moviesSlice";
const BASE_URL = import.meta.env.VITE_KINOPOISK_BASE_URL;
const API_KEY = import.meta.env.VITE_X_API_KEY;

export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getMovies: builder.query<MoviesApiResonse, ParamsType>({
      query: (params) => {
        const { 
          page = 1, 
          limit = 10, 
        } = params || {};
        
        return {
          url: 'movie',
          headers: {
            "X-API-KEY": API_KEY,
          },
          params: {
          page, 
          limit,
          },
        }
      },
      async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
        const result = await queryFulfilled;
        const data = result.data;
        dispatch(setMovies(data.docs))
        
        
      },
    })
  })
})

export const { useGetMoviesQuery } = moviesApi;

