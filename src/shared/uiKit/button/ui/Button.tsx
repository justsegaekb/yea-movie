import { DetailedHTMLProps, ButtonHTMLAttributes, ReactElement, ReactNode } from "react";
import cn from 'classnames';
import styles from './Button.module.css'

interface Props extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: ReactNode;

}

export const Button = ({children, ...props}: Props): ReactElement => {
  const classNames = cn(styles.btn, styles.btnGradient, styles.btnGlow);
 
  return (
    <button className={classNames} {...props}>   
        {children}
    </button>
    
  )
}

