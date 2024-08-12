import { DetailedHTMLProps, ReactElement, ReactNode, HTMLAttributes } from "react";
import cn from 'classnames';
import styles from './Heading.module.css'

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
  children: ReactNode;
  size: 'small' | 'medium' | 'large';
}

export const Heading = ({children, size, ...props}: Props): ReactElement => {
  const classNames = cn(styles.heading, {
    [styles.large]: size === 'large',
    [styles.medium]: size === 'medium',
    [styles.small]: size === 'small',
  });

  const headings: Record<string, ReactElement> = {
      large: <h1 className={classNames} {...props}>{children}</h1>,
      medium: <h2 className={classNames} {...props}>{children}</h2>,
      small: <h3 className={classNames} {...props}>{children}</h3>,
  }
  
  return headings[size]
}

