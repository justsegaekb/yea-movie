import { Heading } from "@/shared/uiKit/heading";
import styles from "./Page.module.css";
import cn from "classnames";
import { MoviesListWithData } from "@/widgets/MoviesListWithData/ui/MoviesListWithData";
import { CategoriesListWithData } from "@/widgets/CategoriesListWithData/ui/CategoriesListWithData";

export const Page = () => {
  return (
    <>
      <div className={cn(styles.container)}>
        <div>
          <header>
            <Heading size="large">YeaMovie</Heading>
          </header>
          <div className={cn(styles.wrapper)}>
            <Heading size="medium">Categories</Heading>
            <CategoriesListWithData />
          </div>
          <div className={cn(styles.wrapper)}>
            <Heading size="medium">Most Popular</Heading>
            <MoviesListWithData />
          </div>
        </div>
      </div>
    </>
  );
};
