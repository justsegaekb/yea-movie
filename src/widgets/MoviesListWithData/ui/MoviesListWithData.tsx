import { useAppSelector } from "@/app/appStore";
import { useGetMoviesQuery } from "@/entities/movies";
import { MoviesListWithSkeleton } from "@/features/moviesList/ui/MoviesList";

export const MoviesListWithData = () => {
  const { isLoading } = useGetMoviesQuery(null);
  const movies = useAppSelector((state) => state.movies.movies.docs) ?? [];

  return (
    <>
      <MoviesListWithSkeleton isLoading={isLoading} movies={movies} />
    </>
  );
};
