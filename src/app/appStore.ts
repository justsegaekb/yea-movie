import { configureStore } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { rootReducer } from './appReducer';
import { moviesApi } from '@/entities/movies/api/moviesApi';


export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(moviesApi.middleware, moviesApi.middleware),
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();