import { Heading } from "@/shared/uiKit/heading";
import styles from "./Main.module.css";
import cn from "classnames";
import { CategoriesListWithSkeleton } from "@/widgets/categoriesList/ui/CategoriesList";
import { useGetCategoriesQuery } from "@/entities/categories/api/categoriesApi";

export const Main = () => {
  const { isLoading } = useGetCategoriesQuery(null);
  return (
    <>
      <div className={cn(styles.container)}>
        <div>
          <header>
            <Heading size="large">YeaMovie</Heading>
          </header>
          <div className={cn(styles.wrapper)}>
            <Heading size="medium">Categories</Heading>
            <CategoriesListWithSkeleton isLoading={isLoading} />
          </div>
        </div>
      </div>
    </>
  );
};
