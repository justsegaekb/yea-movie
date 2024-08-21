import { createSlice } from "@reduxjs/toolkit";
import {
  ParamsType,
  MoviesApiResonse,
  CategoriesTypeResponse,
  CategoriesType,
} from "../../../shared/types/types";
import type { PayloadAction } from "@reduxjs/toolkit";

interface State {
  movies: MoviesApiResonse;
  categories: CategoriesTypeResponse[];
  currentCategory: CategoriesType;
  filters: ParamsType;
}

const initialState: State = {
  movies: {},
  categories: [],
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
    setCategories: (state, action: PayloadAction<CategoriesTypeResponse[]>) => {
      state.categories = action.payload;
    },
    setFilters: (state, action: PayloadAction<ParamsType>) => {
      state.filters = {
        ...state.filters,
        ...action.payload,
      };
    },
    setCurrentCategory: (state, action: PayloadAction<CategoriesType>) => {
      state.currentCategory = action.payload;
    },
  },
});

export const { setMovies, setCategories, setFilters, setCurrentCategory } =
  moviesSlice.actions;

export default moviesSlice.reducer;
