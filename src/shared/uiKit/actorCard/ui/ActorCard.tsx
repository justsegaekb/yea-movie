import styles from "./ActorCard.module.css";
import cn from "classnames";

interface Props {
  name: string;
  role: string;
  image: string;
}

export const ActorCard = ({ name, role, image }: Props) => {
  return (
    <div className={cn(styles.container)}>
      <div className={cn(styles.imageWrapper, styles.gradient)}>
        <img
          className={cn(styles.image)}
          src={image}
          alt="actor"
          width="100%"
        />
      </div>
      <div className={cn(styles.textWrapper)}>
        <div className={cn(styles.text)}>{name}</div>
        <div className={cn(styles.text)}>as {role}</div>
      </div>
    </div>
  );
};
