import { useAppSelector } from "@/app/appStore";
import { useGetCategoriesQuery } from "@/entities/categories/api/categoriesApi";
import { CategoriesType } from "@/entities/movies";
import { useGetMoviesByCategoryQuery } from "@/entities/movies/api/moviesApi";
import { CategoriesListWithSkeleton } from "@/features/categoriesList/ui/CategoriesList";

export const CategoriesListWithData = () => {
  const { isLoading, error } = useGetCategoriesQuery(null);
  if (error) throw error;
  const categories = useAppSelector((state) => state.movies.categories);
  const currentCategory: CategoriesType = useAppSelector(
    (state) => state.movies.currentCategory,
  );
  useGetMoviesByCategoryQuery({ type: currentCategory });
  return (
    <>
      <CategoriesListWithSkeleton
        isLoading={isLoading}
        categories={categories}
      />
    </>
  );
};
