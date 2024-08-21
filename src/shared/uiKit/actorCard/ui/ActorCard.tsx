import { ActorsType } from "@/shared/types/types";
import styles from "./ActorCard.module.css";
import cn from "classnames";

export const ActorCard = ({ enName, photo, description }: ActorsType) => {
  return (
    <div className={cn(styles.container)}>
      <div className={cn(styles.imageWrapper, styles.gradient)}>
        <img
          className={cn(styles.image)}
          src={photo}
          alt="actor"
          width="100%"
        />
      </div>
      <div className={cn(styles.textWrapper)}>
        <div className={cn(styles.text)}>{enName}</div>
        <div className={cn(styles.text)}>as {description}</div>
      </div>
    </div>
  );
};
