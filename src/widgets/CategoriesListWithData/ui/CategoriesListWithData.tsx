import { useAppSelector } from "@/app/appStore";
import { useGetCategoriesQuery } from "@/entities/categories/api/categoriesApi";
import { CategoriesListWithSkeleton } from "@/features/categoriesList/ui/CategoriesList";

export const CategoriesListWithData = () => {
  const { isLoading } = useGetCategoriesQuery(null);
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
