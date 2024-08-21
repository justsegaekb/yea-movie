import { MoviesApiResonse } from "@/entities/movies";
import { usePagination } from "@/shared/hooks/usePagination/usePagination";
import { Button } from "@/shared/uiKit/button";

export const Pagination = ({
  page,
  pages,
}: Pick<MoviesApiResonse, "page" | "pages">) => {
  const { nextPage, prevPage } = usePagination({ page, pages });

  return (
    <>
      <Button onClick={prevPage}>{"<"}</Button>
      <Button onClick={nextPage}>{">"}</Button>
    </>
  );
};
