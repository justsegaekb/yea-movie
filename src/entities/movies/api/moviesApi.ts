import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IMovie, ParamsType } from "@/shared/types/types";
import { setMovies } from "../model/moviesSlice";
const BASE_URL = import.meta.env.VITE_KINOPOISK_BASE_URL;
const API_KEY = import.meta.env.VITE_X_API_KEY;

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getMovies: builder.query<IMovie[], ParamsType>({
      query: (params) => {
        const { page = 1, limit = 10, query = "" } = params || {};

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
  }),
});

export const { useGetMoviesQuery } = moviesApi;
