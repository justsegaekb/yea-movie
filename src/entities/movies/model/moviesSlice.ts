import { createSlice } from '@reduxjs/toolkit';
import {IFilters, IMovie} from './types'
import type { PayloadAction } from '@reduxjs/toolkit';

interface State {
  movies: IMovie[];
  filters: IFilters;
}

const initialState: State = {
  movies: [],
  filters: {
    page: 1,
    limit: 10,
    category: null,
    keywords: "",
  }
}

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setMovies: (state, action: PayloadAction<IMovie[]>) => {
      state.movies = action.payload;
    },
  }
})

export const { setMovies } = moviesSlice.actions;

export default moviesSlice.reducer;