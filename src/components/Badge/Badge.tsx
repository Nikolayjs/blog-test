import { FC } from 'react';

import styles from './Badge.module.scss';

type Props = {
  style?: React.CSSProperties;
  color?: string;
  children?: React.ReactNode;
};
const Badge: FC<Props> = ({ children, style, color }) => {
  return (
    <div className={styles.badge} style={style}>
      <span className={styles['badge-content']} style={{ backgroundColor: color }}>
        {children}
      </span>
    </div>
  );
};

export default Badge;
