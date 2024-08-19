import { DetailedHTMLProps, HTMLAttributes } from "react";
import styles from "./CategoryCard.module.css";
import cn from "classnames";
import CategoryCardLeftIcon from "@/shared/assets/category.svg?react";
import CategoryCardRightIcon from "@/shared/assets/category2.svg?react";

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string;
  direction: "left" | "right";
}

export const CategoryCard = ({ direction, title, ...props }: Props) => {
  const mapping = {
    left: <CategoryCardLeftIcon />,
    right: <CategoryCardRightIcon />,
  };
  return (
    <div className={styles.wrapper} {...props}>
      <div className={styles.card}>
        {mapping[direction]}
        <span className={cn(styles.title)}>{title}</span>
      </div>
    </div>
  );
};
