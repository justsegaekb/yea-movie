import cn from 'classnames';
import styles from './Input.module.css';

import { DetailedHTMLProps, InputHTMLAttributes, ReactElement } from 'react';

interface Props extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
 placeholder: string;
 setValue: React.Dispatch<React.SetStateAction<string>>; 
}

export const Input = ({placeholder, setValue, ...props}: Props): ReactElement => {
  const classNames= cn(styles.input, styles.btnGradient)
  return (
    <input 
      className={classNames} 
      placeholder={placeholder} 
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)} 
      {...props} 
    />
  );
}