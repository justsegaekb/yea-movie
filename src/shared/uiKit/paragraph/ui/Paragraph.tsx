import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import styles from "./Paragraph.module.css";
import cn from "classnames";

interface Props
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  children: ReactNode;
}

export const Paragraph = ({ children, ...props }: Props) => {
  const classNames = cn(styles.paragraph, props.className);
  return (
    <p className={classNames} {...props}>
      {children}
    </p>
  );
};
