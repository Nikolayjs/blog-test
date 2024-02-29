import { Dispatch, forwardRef } from 'react';

import styles from './Header.module.scss';
import { NavLink } from 'react-router-dom';

type Props = {
  toggle: boolean;
  setToggle: Dispatch<React.SetStateAction<boolean>>;
};

const MobileNav = forwardRef<HTMLDivElement, Props>(({ toggle, setToggle }, ref) => {
  return (
    <>
      <div
        ref={ref}
        className={`${styles['mobile-nav']} ${toggle ? styles['end'] : styles['hidden']}`}
      >
        <div className={styles['mobile-header']}>
          <h5>Меню</h5>
          <button onClick={() => setToggle(!toggle)}>Закрыть</button>
        </div>
        <div className={styles['mobile-body']}>
          <div className={styles['mobile-link-container']}>
            <NavLink className={styles['link']} to={'/'}>
              Главная
            </NavLink>
            <NavLink className={styles['link']} to={'/'}>
              Посты
            </NavLink>
            <NavLink className={styles['link']} to={'/'}>
              Новости
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
});

export default MobileNav;
