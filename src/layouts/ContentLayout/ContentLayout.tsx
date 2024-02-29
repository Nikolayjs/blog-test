import { FC } from 'react';
import styles from './ContentLayout.module.scss';
import { Outlet } from 'react-router-dom';

const ContentLayout: FC = () => {
  return (
    <div className={styles['content-wrapper']}>
      <div className={styles['content']}>
        <Outlet />
      </div>
    </div>
  );
};

export default ContentLayout;
