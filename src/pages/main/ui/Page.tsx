import { Heading } from "@/shared/uiKit/heading";
import styles from "./Page.module.css";
import cn from "classnames";
import { MoviesListWithData } from "@/widgets/MoviesListWithData/ui/MoviesListWithData";
import { CategoriesListWithData } from "@/widgets/CategoriesListWithData/ui/CategoriesListWithData";
import { Search } from "@/features/search";
import { Link } from "react-router-dom";
export const Page = () => {
  return (
    <>
      <div className={cn(styles.container)}>
        <div>
          <header className={cn(styles.header)}>
            <Link to="/">
              <Heading size="large">YeaMovie</Heading>
            </Link>
          </header>
          <main className={cn(styles.main)}>
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
          </main>
        </div>
      </div>
    </>
  );
};
