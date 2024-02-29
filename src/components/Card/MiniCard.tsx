import { FC } from 'react';

import styles from './MiniCard.module.scss';
import Badge from '../Badge/Badge';

interface Props {
  title: string;
  content: string;
  info: string;
  badge?: string;
}

const MiniCard: FC<Props> = ({ title, content, info, badge }) => {
  return (
    <div className={styles['card']}>
      <div className={styles['card-header']}>
        {badge && <Badge color="gray">{badge}</Badge>}
        <span>1 day ago</span>
      </div>
      <div className={styles['card-body']}>
        <h2 className={styles['card-title']}>{title}</h2>
        <p className={styles['card-text']}>{content}</p>
      </div>
      <div className={styles['card-footer']}>
        <span>{info}</span>
      </div>
    </div>
  );
};

export default MiniCard;
