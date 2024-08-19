import { useAppSelector } from "@/app/appStore";
import { useGetCategoriesQuery } from "@/entities/categories/api/categoriesApi";
import { CategoriesListWithSkeleton } from "@/features/categoriesList/ui/CategoriesList";

export const CategoriesListWithData = () => {
  const { isLoading, error } = useGetCategoriesQuery(null);
  if (error) throw error.data;
  const categories = useAppSelector((state) => state.movies.categories);

  return (
    <>
      <CategoriesListWithSkeleton
        isLoading={isLoading}
        categories={categories}
      />
    </>
  );
};
