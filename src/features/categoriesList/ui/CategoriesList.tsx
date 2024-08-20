import { CategoryCard } from "@/entities/categories";
import withSkeleton from "@/shared/hoc/withSkeleton";
import cn from "classnames";
import styles from "./CategoriesList.module.css";
import { useDispatch } from "react-redux";
import { setCurrentCategory } from "@/entities/movies/model/moviesSlice";
import { CategoriesTypeResponse } from "@/shared/types/types";

interface Props {
  categories: CategoriesTypeResponse[];
}

export const CategoriesList = ({ categories }: Props) => {
  const dispatch = useDispatch();
  const handleSelectCategory = (category: string) => {
    dispatch(setCurrentCategory(category));
  };
  return (
    <ul className={cn(styles.categoriesList)}>
      {categories?.map(({ name, slug }, i) => {
        return (
          <li key={i}>
            <CategoryCard
              title={name ?? slug}
              direction={i % 2 === 0 ? "left" : "right"}
              onClick={() => handleSelectCategory(name)}
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
