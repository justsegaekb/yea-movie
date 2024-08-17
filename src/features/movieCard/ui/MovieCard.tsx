import { DetailedHTMLProps, HTMLAttributes } from "react";
import styles from "./MovieCard.module.css";
import cn from "classnames";
import { Heading } from "@/shared/uiKit/heading";
import { Paragraph } from "@/shared/uiKit/paragraph/ui/Paragraph";

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  name: string | null;
  alternativeName: string | null;
  poster: string | null;
  year: string | null;
}

export const MovieCard = ({
  name = "Брат 2",
  alternativeName,
  poster = "https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/e9008e2f-433f-43b0-b9b8-2ea8e3fb6c9b/600x900",
  year = "2002",
  ...props
}: Props) => {
  return (
    <div className={cn(styles.movieCard, styles.gradient)} {...props}>
      <div
        className={cn(styles.imageWrapper)}
        style={{ backgroundImage: `url("${poster}")` }}
      ></div>
      <Heading size="medium">{name ?? alternativeName}</Heading>
      <Paragraph>{year}</Paragraph>
    </div>
  );
};
