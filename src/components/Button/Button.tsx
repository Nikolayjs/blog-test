import { FC } from 'react';

import styles from './Button.module.scss';
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}
const Button: FC<Props> = ({ children, ...props }) => {
  return <button className={styles['btn-primary'] + ' ' + props.className}>{children}</button>;
};

export default Button;
