import { CategoryCard } from "@/entities/categories";
import withSkeleton from "@/shared/hoc/withSkeleton";
import cn from "classnames";
import styles from "./CategoriesList.module.css";

interface Props {
  categories: { name: string; slug: string }[];
  isLoading: boolean;
}
export const CategoriesList = ({ categories }: Props) => {
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
