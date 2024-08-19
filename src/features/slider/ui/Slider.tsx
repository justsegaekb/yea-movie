import { ReactNode } from "react";
import styles from "./Slider.module.css";
import cn from "classnames";

interface Props {
  children: ReactNode;
}
export const Slider = ({ children }: Props) => {
  return (
    <div className={cn(styles.slider)}>
      <button>{"<"}</button>
      {children}
      <button>{">"}</button>
    </div>
  );
};
