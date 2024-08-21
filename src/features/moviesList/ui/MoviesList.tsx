import { MovieCard } from "@/entities/movies";
import withSkeleton from "@/shared/hoc/withSkeleton";
import cn from "classnames";
import styles from "./MoviesList.module.css";
import { Button } from "@/shared/uiKit/button";
import { useAppSelector } from "@/app/appStore";
import { useDispatch } from "react-redux";
import { setFilters } from "@/entities/movies/model/moviesSlice";
import { IMovie, MoviesApiResonse } from "@/shared/types/types";

interface Props {
  movies: IMovie[];
}
export const MoviesList = ({ movies }: Props) => {
  const dispatch = useDispatch();
  const { page, pages }: Pick<MoviesApiResonse, "page" | "pages"> =
    useAppSelector((state) => state.movies.movies);

  const handlePrevPage = (page = 0, pages = 0) => {
    if (pages <= 1) return;
    dispatch(setFilters({ page: page - 1 }));
  };

  const handleNextPage = (page = 1, pages = 1) => {
    if (page && pages && page >= pages) return;
    dispatch(setFilters({ page: page + 1 }));
  };
  return (
    <div>
      <div className={cn(styles.pagination)}>
        <Button onClick={() => handlePrevPage(page, pages)}>{"<"}</Button>
        <Button onClick={() => handleNextPage(page, pages)}>{">"}</Button>
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
