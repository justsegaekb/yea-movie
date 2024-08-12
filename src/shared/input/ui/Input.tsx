import cn from 'classnames';
import styles from './Input.module.css';

export const Input = () => {
  const classNames= cn(styles.input, styles.btnGradient)
  return (
    <input className={classNames} placeholder='Search' />

  )
}