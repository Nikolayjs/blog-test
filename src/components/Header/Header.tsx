import { FC, MouseEventHandler, useRef, useState } from 'react';

import styles from './Header.module.scss';
import { useResize } from '../../hooks/useResize';
import MenuIcon from '../../assets/icons/MenuIcon';
import MobileNav from './MobileNav';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';
import useOnClickOutside from '../../hooks/useClickOutside';
import { usePosition } from '../../hooks/usePosition';

const Header: FC = () => {
  const [toggle, setToggle] = useState(false);
  const { theme, setTheme } = useTheme();
  const position = usePosition();
  const ref = useRef(null);

  useOnClickOutside(ref, () => setToggle(false));

  const handleTheme: MouseEventHandler<HTMLInputElement> = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  const width = useResize();
  const handleToggle = () => setToggle(!toggle);

  return (
    <header
      className={styles['header'] + !position.isScrollDown ? ' ' + styles['sticky'] : ''}
      style={!position.isScrollDown ? { top: 0 } : { top: -100 }}
    >
      <div className={styles['container']}>
        <a>Logo</a>
        <div className={styles['navbar']}>
          {width.isScreenMd && (
            <div className={styles['nav-body']}>
              <div className={styles['link-container']}>
                <NavLink className={styles['link']} to={'/'}>
                  Главная
                </NavLink>
                <NavLink className={styles['link']} to={'/'}>
                  Блог
                </NavLink>
                <NavLink className={styles['link']} to={'/'}>
                  Новости
                </NavLink>
              </div>
            </div>
          )}
        </div>
        <div className={styles['form-wrapper']}>
          <div className={styles['form-container']}>
            <div className={styles['switcher']}>
              <input className="form-check" type="checkbox" id="theme-mode" onClick={handleTheme} />
              <label className="form-check-label" htmlFor="theme-mode"></label>
            </div>
          </div>
          {width.isScreenSm && !width.isScreenMd && (
            <div className={styles['nav-body']}>
              <button className="icon-btn" onClick={handleToggle}>
                <MenuIcon />
              </button>
            </div>
          )}
          {width.isScreenSm && !width.isScreenMd && (
            <>
              <MobileNav toggle={toggle} setToggle={setToggle} ref={ref} />
            </>
          )}
        </div>
      </div>
      <div className={toggle ? styles['backdrop'] : ''}></div>
    </header>
  );
};

export default Header;
