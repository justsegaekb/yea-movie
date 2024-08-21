import { ActorsType } from "@/shared/types/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setCurrentActor } from "../model/actorsSlice";

const BASE_URL = import.meta.env.VITE_KINOPOISK_BASE_URL;
const API_KEY = import.meta.env.VITE_X_API_KEY;

export const actorsApi = createApi({
  reducerPath: "actorsApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getActor: builder.query<ActorsType, number | null>({
      query: (id) => {
        return {
          url: `person/${id}`,
          headers: {
            "X-API-KEY": API_KEY,
          },
        };
      },
      async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
        const result = await queryFulfilled;
        const data = result.data;
        dispatch(setCurrentActor(data));
      },
    }),
  }),
});

export const { useGetActorQuery } = actorsApi;
