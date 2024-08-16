import { Url } from "@/shared/types/types";
import { DetailedHTMLProps, HTMLAttributes } from "react";
import { Heading } from "../../heading";
import styles from './MovieCard.module.css'
import cn from 'classnames'
interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  id?: number;
  poster?: Record<Url, string | null>,
  name?: string | null,
  alternativeName?: string | null,
  year?: number,
  rating?: Record<string, number | null>,
}

export const MovieCard = ({
  id,
  poster, 
  alternativeName, 
  name, 
  year, 
  rating, 
  ...props
}: Props) => {

  const classNames = cn(styles.movieCard);

  return (
    <div className={classNames} {...props}>
      <img  className={cn(styles.gradient)} src={poster?.previewUrl} alt="poster" />
      <div className={cn(styles.title)}>{name ?? alternativeName}</div>
      <div className={cn(styles.year)}>{year}</div>
    </div>
  );
}