import { DetailedHTMLProps, HtmlHTMLAttributes } from "react";
import styles from "./Rating.module.css";
import cn from "classnames";
import StarIcon from "../../../../../public/assets/star.svg?react";

interface Props
  extends DetailedHTMLProps<
    HtmlHTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  rating: number;
}

export const Rating = ({ rating, ...props }: Props) => {
  const countAvarage = (rating: number): number => Math.floor(rating / 2);
  return (
    <div {...props}>
      <ul className={cn(styles.rating)}>
        {Array(5)
          .fill(0)
          .map((_, i) => {
            const ratingClassName = cn({
              [styles.active]: i <= countAvarage(rating) - 1,
            });
            return (
              <li key={i} className={ratingClassName}>
                <StarIcon />
              </li>
            );
          })}
      </ul>
    </div>
  );
};
