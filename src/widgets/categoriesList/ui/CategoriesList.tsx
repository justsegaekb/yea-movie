import { useAppSelector } from "@/app/appStore";
import { CategoryCard } from "@/shared/uiKit/categoryCard";
import withSkeleton from "@/shared/hoc/withSkeleton";
import cn from "classnames";
import styles from "./CategoriesList.module.css";

interface Props {
  isLoading: boolean;
}
export const CategoriesList = ({ isLoading }: Props) => {
  const categories = useAppSelector((state) => state.movies.categories);

  return (
    <ul className={cn(styles.categoriesList)}>
      {categories?.map(({ name, slug }, i) => {
        return (
          <li key={i}>
            <CategoryCard
              title={name ?? slug}
              direction={i % 2 === 0 ? "left" : "right"}
            />
          </li>
        );
      })}
    </ul>
  );
};

export const CategoriesListWithSkeleton = withSkeleton(
  CategoriesList,
  "category",
  5,
);
