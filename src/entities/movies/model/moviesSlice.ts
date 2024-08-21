import { createSlice } from "@reduxjs/toolkit";
import {
  ParamsType,
  MoviesApiResonse,
  CategoriesType,
} from "../../../shared/types/types";
import type { PayloadAction } from "@reduxjs/toolkit";

interface State {
  movies: MoviesApiResonse;
  currentCategory: CategoriesType;
  filters: ParamsType;
}

const initialState: State = {
  movies: {},
  currentCategory: "",
  filters: {
    page: 1,
    limit: 16,
    query: "",
  },
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setMovies: (state, action: PayloadAction<MoviesApiResonse>) => {
      state.movies = action.payload;
    },
    setFilters: (state, action: PayloadAction<ParamsType>) => {
      state.filters = {
        ...state.filters,
        ...action.payload,
      };
    },
  },
});

export const { setMovies, setFilters } = moviesSlice.actions;

export default moviesSlice.reducer;
