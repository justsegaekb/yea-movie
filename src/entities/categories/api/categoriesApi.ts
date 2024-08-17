import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ParamsType } from "../model/types";
import { setCategories } from "@/entities/movies/model/moviesSlice";
const BASE_URL = import.meta.env.VITE_KINOPOISK_BASE_URLV1;
const API_KEY = import.meta.env.VITE_X_API_KEY;

export const categoriesApi = createApi({
  reducerPath: "categoriesApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getCategories: builder.query<string[], ParamsType | null>({
      query: (params) => {
        const { field = "type" } = params || {};
        return {
          url: "movie/possible-values-by-field",
          headers: {
            "X-API-KEY": API_KEY,
          },
          params: {
            field,
          },
        };
      },
      async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
        const result = await queryFulfilled;
        const data = result.data;
        dispatch(setCategories(data));
      },
    }),
  }),
});

export const { useGetCategoriesQuery } = categoriesApi;
