import { FC } from 'react';

import styles from './MainLayout.module.scss';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout: FC = () => {
  return (
    <div className={styles['page-wrapper']}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
