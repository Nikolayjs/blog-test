import { FC } from 'react';

import styles from './WideCard.module.scss';
import Badge from '../Badge/Badge';
import { NavLink } from 'react-router-dom';

const WideCard: FC = () => {
  return (
    <article>
      <div className={styles['card']}>
        <div className={styles['card-col']}>
          <div className={styles['card-img']}>
            <a
              href="blog-single.html"
              className="position-absolute top-0 start-0 w-100 h-100"
              aria-label="Read more"
            ></a>
          </div>
          <div className={styles['card-body']}>
            <div className={styles['card-body-container']}>
              <div className={styles['card-info']}>
                <Badge color="gray">
                  <a className={styles['badge']} href="#">
                    Processes Tools
                  </a>
                </Badge>

                <span>Sep 3, 2023</span>
              </div>
              <h3>
                <NavLink to={'/'}>5 Tips for Managing Your Team</NavLink>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Earum id aliquam libero voluptatum porro expedita voluptates
                commodi sunt, veritatis voluptatem molestiae voluptate nemo modi inventore minima.
                Hic voluptatibus eligendi deserunt.
              </p>
              <hr />
            </div>
            <div className={styles['card-footer']}>
              <a>
                <img src="01.jpg" width="48" alt="Avatar" />
                Niko Bebra
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default WideCard;
