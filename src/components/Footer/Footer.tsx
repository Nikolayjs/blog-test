import { FC } from 'react';

import styles from './Footer.module.scss';

const Footer: FC = () => {
  return (
    <footer>
      <div className={styles['container']}>
        <div className={styles['wrapper']}>
          <div className={styles['col']}>
            <span>Logo</span>
          </div>
          <div className={styles['col']}>
            <div className={styles['footer-links']}>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Blog</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={styles['footer-copyright']}>
        <p>© 2024. All rights reserved. Made by Niko Bebra</p>
      </div>
    </footer>
  );
};

export default Footer;
