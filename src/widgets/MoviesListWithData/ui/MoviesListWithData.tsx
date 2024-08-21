import { useAppSelector } from "@/app/appStore";
import { IMovie, useGetMoviesQuery } from "@/entities/movies";
import { MoviesListWithSkeleton } from "./moviesList/ui/MoviesList";

export const MoviesListWithData = () => {
  const filters = useAppSelector((state) => state.movies.filters);

  const { isLoading } = useGetMoviesQuery(filters);
  const movies: IMovie[] = useAppSelector(
    (state) => state.movies.movies.docs ?? [],
  );

  return (
    <>
      <MoviesListWithSkeleton isLoading={isLoading} movies={movies} />
    </>
  );
};
