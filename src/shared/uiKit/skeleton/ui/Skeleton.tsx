import { ReactElement } from "react";
import { CategoryCardSkeleton, MovieCardSkeleton } from "../../loaders";
import styles from "./Skeleton.module.css";
import cn from "classnames";

interface Props {
  count: number;
  type: "category" | "movie" | "actor";
  rtl?: boolean;
}

export const Skeleton = ({
  count = 1,
  type,
  rtl = true,
}: Props): ReactElement => {
  const mapping = {
    category: <CategoryCardSkeleton rtl={rtl} />,
    movie: <MovieCardSkeleton />,
    actor: <></>,
  };

  const classNames = cn({
    [styles.categories]: type === "category",
    [styles.movie]: type === "movie",
  });

  return (
    <>
      {count > 1 ? (
        <ul className={classNames}>
          {[...Array(count)].map((_, index) => (
            <li key={index}>{mapping[type]}</li>
          ))}
        </ul>
      ) : (
        <li></li>
      )}
    </>
  );
};
