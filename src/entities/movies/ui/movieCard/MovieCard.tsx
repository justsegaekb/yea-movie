import styles from "./MovieCard.module.css";
import cn from "classnames";
import { Heading } from "@/shared/uiKit/heading";
import { Paragraph } from "@/shared/uiKit/paragraph/ui/Paragraph";

interface Props {
  id: number;
  name: string | null;
  alternativeName: string | null;
  poster: string | null;
  year: number | null;
}

export const MovieCard = ({
  name,
  alternativeName,
  poster,
  year,
  ...props
}: Props) => {
  const truncate = (str: string) => {
    if (str.length > 9) {
      return `${str.slice(0, 9)}...`;
    }
    return str;
  };
  return (
    <div className={cn(styles.movieCard, styles.gradient)} {...props}>
      <div
        className={cn(styles.imageWrapper)}
        style={{ backgroundImage: `url("${poster}")` }}
      ></div>
      <Heading size="medium">
        {truncate(name) ?? truncate(alternativeName)}
      </Heading>
      <Paragraph>{year}</Paragraph>
    </div>
  );
};
