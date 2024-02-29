import { FC } from 'react';

import styles from './SimpleCard.module.scss';
import Badge from '../Badge/Badge';

const SimpleCard: FC = () => {
  return (
    <article className={styles['card']}>
      <div className={styles['card-header']}>
        <a></a>
        <a></a>
        <img src="/codewars.png" alt="codewars" />
      </div>
      <div className={styles['card-body']}>
        <div className={styles['card-info']}>
          <Badge color="gray">Trending</Badge>
          <span>1 day ago</span>
        </div>
        <h3>This Long-Awaited Technology May Finally Change the World</h3>
      </div>
      <div className={styles['card-footer']}>
        <a>
          <img src="/01.jpg" alt="user" />
          Niko Baby
        </a>
      </div>
    </article>
  );
};

export default SimpleCard;
