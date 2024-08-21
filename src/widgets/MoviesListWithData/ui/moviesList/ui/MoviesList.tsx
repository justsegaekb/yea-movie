import { MovieCard } from "@/entities/movies";
import withSkeleton from "@/shared/hoc/withSkeleton";
import cn from "classnames";
import styles from "./MoviesList.module.css";
import { useAppSelector } from "@/app/appStore";
import { IMovie, MoviesApiResonse } from "@/shared/types/types";
import { Pagination } from "@/features/pagination/ui/Pagination";

interface Props {
  movies: IMovie[];
}
export const MoviesList = ({ movies }: Props) => {
  const { page, pages }: Pick<MoviesApiResonse, "page" | "pages"> =
    useAppSelector((state) => state.movies.movies);

  return (
    <div>
      <div className={cn(styles.pagination)}>
        <Pagination page={page} pages={pages} />
      </div>
      <ul className={cn(styles.moviesList)}>
        {movies?.map(({ name, alternativeName, id, year, poster }) => {
          return (
            <li key={id}>
              <MovieCard
                name={name}
                alternativeName={alternativeName}
                id={id}
                year={year}
                poster={poster?.previewUrl}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export const MoviesListWithSkeleton = withSkeleton(MoviesList, "movie", 16);
