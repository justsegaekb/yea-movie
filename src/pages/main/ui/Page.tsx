import { Heading } from "@/shared/uiKit/heading";
import styles from "./Page.module.css";
import cn from "classnames";
import { Search } from "@/features/search";
import { CategoriesListWithData } from "@/widgets/CategoriesListWithData/ui/CategoriesListWithData";
import { MoviesListWithData } from "@/widgets/MoviesListWithData/ui/MoviesListWithData";

export const MainPage = () => {
  return (
    <>
      <div className={cn(styles.container)}>
        <div>
          <Heading size="medium">Search</Heading>
          <div className={cn(styles.search)}>
            <Search />
          </div>
          <div className={cn(styles.wrapper)}>
            <Heading size="medium">Categories</Heading>
            <CategoriesListWithData />
          </div>
          <div className={cn(styles.wrapper)}>
            <Heading size="medium">Movies</Heading>
            <MoviesListWithData />
          </div>
        </div>
      </div>
    </>
  );
};
