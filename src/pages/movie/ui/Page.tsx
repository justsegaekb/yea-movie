import { useGetMovieByIdQuery } from "@/entities/movies/api/moviesApi";
import styles from "./Page.module.css";
import cn from "classnames";
import { Heading } from "@/shared/uiKit/heading";
import { Paragraph } from "@/shared/uiKit/paragraph/ui/Paragraph";
import { Rating } from "@/shared/uiKit/rating";
import { Button } from "@/shared/uiKit/button";
import { Link } from "react-router-dom";
import { ActorCard } from "@/shared/uiKit/actorCard";

export const MoviePage = () => {
  const id = new URLSearchParams(window.location.search).get("movie");

  const { data, isLoading, error } = useGetMovieByIdQuery(Number(id));
  if (error) throw error;

  return (
    <div className={cn(styles.container)}>
      <div
        className={cn(styles.image)}
        style={{ backgroundImage: `url("${data?.poster.url}")` }}
      ></div>
      <div>
        <div>
          <Heading size="large">{data?.name ?? data?.alternativeName}</Heading>
          <Paragraph>{data?.year}</Paragraph>
          <Rating rating={data?.rating.kp ?? 0} />
        </div>
        <Paragraph>{data?.description}</Paragraph>
      </div>
      <div className={cn(styles.actors)}>
        <ul className={cn(styles.actors)}>
          {isLoading && <div>Загрузка...</div>}
          {!isLoading &&
            data?.persons.slice(0, 6).map((p) => {
              return (
                <li key={p.id}>
                  <ActorCard
                    enName={p.enName}
                    description={p.description}
                    photo={p.photo}
                  />
                </li>
              );
            })}
        </ul>
      </div>
      <div>
        <Link to={"/"}>
          <Button>Назад</Button>
        </Link>
      </div>
    </div>
  );
};
