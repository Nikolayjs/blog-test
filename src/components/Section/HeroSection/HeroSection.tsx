import { FC } from 'react';

import styles from './HeroSection.module.scss';
import Badge from '../../Badge/Badge';
import Button from '../../Button/Button';

import MiniCard from '../../Card/MiniCard';

const HeroSection: FC = () => {
  return (
    <section className={styles['hero']}>
      <span className={styles['overlay-bg']}>
        {/* <img
          src="/codewars.png"
          alt="Hero image"
          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
        /> */}
        <span className={styles['cover']}></span>
      </span>
      <div className={styles['hero-body']}>
        {/* Hot topic */}
        <div className={styles['hero-hot-topic']}>
          <div className={styles['hot-topic']}>
            <img src="/flame.svg" alt="codewars" />
            <span>Hot Topic</span>
          </div>
          <h1>This Long-Awaited Technology May Finally Change the World</h1>
          <div className={styles['hero-footer']}>
            <Badge color="gray">Trending</Badge>
            <div className={styles['divider']}></div>
            <span>12 hours ago</span>
            <div className={styles['divider']}></div>
            <span>8 4 2</span>
          </div>
          <div className={styles['btn-container']}>
            <Button>Learn More</Button>
          </div>
        </div>
        {/* Popular */}
        <div className={styles['hero-popular']}>
          <MiniCard
            title="Learn TypeScript"
            content="TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. It adds optional type annotations to the"
            info="8 4 2"
            badge="Popular"
          />
          <MiniCard
            title="Learn JavaScript"
            content="JavaScript is a typed superset of JavaScript that compiles to plain JavaScript. It adds optional type annotations to the"
            info="8 4 2"
            badge="Popular"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
