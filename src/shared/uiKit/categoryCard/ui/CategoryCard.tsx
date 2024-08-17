import { DetailedHTMLProps, HTMLAttributes } from "react";
import styles from "./CategoryCard.module.css";
import cn from "classnames";

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string;
  direction: "left" | "right";
}

export const CategoryCard = ({ direction, title, ...props }: Props) => {
  return (
    <div
      className={cn(styles.categoryCard, {
        [styles.categoryCardLeft]: direction === "left",
        [styles.categoryCardRight]: direction === "right",
      })}
      {...props}
    >
      <span className={cn(styles.title)}>{title}</span>
    </div>
  );
};
