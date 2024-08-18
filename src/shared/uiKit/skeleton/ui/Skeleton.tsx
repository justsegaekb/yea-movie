import { ReactElement } from "react";
import { CategoryCardSkeleton } from "../../loaders";
import styles from "./Skeleton.module.css";
import cn from "classnames";

interface Props {
  count: number;
  type: "category" | "movie" | "actor";
  rtl?: boolean;
}
export const Skeleton = ({
  count = 1,
  type = "category",
  rtl = true,
}: Props): ReactElement => {
  const mapping = {
    category: <CategoryCardSkeleton rtl={rtl} />,
    movie: <></>,
    actor: <></>,
  };
  const classNames = cn({
    [styles.categories]: type === "category",
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
