import { setFilters } from "@/entities/movies/model/moviesSlice";
import { useDispatch } from "react-redux";
import { MoviesApiResonse } from "@/entities/movies";

export const usePagination = ({
  pages,
  page = 1,
}: Pick<MoviesApiResonse, "page" | "pages">) => {
  const dispatch = useDispatch();

  const handlePrevPage = () => {
    if (!page || !pages) return;
    if (page <= 1) return;
    dispatch(setFilters({ page: page - 1 }));
  };

  const handleNextPage = () => {
    if (!page || !pages) return;
    if (page >= pages) return;
    dispatch(setFilters({ page: page + 1 }));
  };

  return { nextPage: handleNextPage, prevPage: handlePrevPage };
};
