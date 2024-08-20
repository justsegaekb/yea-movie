import { IMovie } from "@/entities/movies";
import { MovieCard } from "@/entities/movies";
import withSkeleton from "@/shared/hoc/withSkeleton";
import cn from "classnames";
import styles from "./MoviesList.module.css";

interface Props {
  movies: IMovie[];
  isLoading: boolean;
}
export const MoviesList = ({ movies }: Props) => {
  return (
    <ul className={cn(styles.moviesList)}>
      {movies?.map(({ name, alternativeName, id, year, poster }) => {
        return (
          <li key={id}>
            <MovieCard
              name={name}
              alternativeName={alternativeName}
              id={id}
              year={year}
              poster={poster.previewUrl}
            />
          </li>
        );
      })}
    </ul>
  );
};

export const MoviesListWithSkeleton = withSkeleton(MoviesList, "movie", 8);
