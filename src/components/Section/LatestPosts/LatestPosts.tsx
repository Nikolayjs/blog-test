import { FC } from 'react';

import styles from './LatestPosts.module.scss';
import WideCard from '../../Card/WideCard';
import Button from '../../Button/Button';

const LatestPosts: FC = () => {
  return (
    <section className={styles['latest-posts']}>
      <h2>Latest Posts</h2>
      <ul className={styles['latest-posts-nav']}>
        <li>
          <a className={styles['active']}>All Topics</a>
        </li>
        <li>
          <a>Digital</a>
        </li>
        <li>
          <a>Marketing</a>
        </li>
      </ul>
      <div className={styles['latest-posts-list']}>
        <WideCard />
        <WideCard />
        <WideCard />
        <WideCard />
      </div>
      <Button className={styles['latest-post-btn']}>View All</Button>
      <div className={styles['divider']}></div>
    </section>
  );
};

export default LatestPosts;
