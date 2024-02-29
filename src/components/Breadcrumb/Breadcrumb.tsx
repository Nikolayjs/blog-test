import { FC } from 'react';

import styles from './Breadcrumb.module.scss';
import { UIMatch, useMatches } from 'react-router-dom';
import ChevronDoubleIcon from '../../assets/icons/ChevronDoubleIcon';

interface IMatches extends UIMatch {
  handle: { crumb: (data: unknown) => string } | undefined;
}

const Breadcrumb: FC = () => {
  const matches: IMatches[] = useMatches();
  const crumbs = matches
    .filter((match) => Boolean(match.handle))
    .map((match) => match.handle?.crumb(match.data));

  return (
    <>
      <nav className={styles['breadcrumb']}>
        <ol>
          {crumbs.map((crumb, index) => {
            if (crumbs[crumbs.length - 1] === crumb) {
              return (
                <li className={styles['breadcrumb-item']} key={index}>
                  {crumb}
                </li>
              );
            } else {
              return (
                <li className={styles['breadcrumb-item']} key={index}>
                  {crumb}
                  <ChevronDoubleIcon />
                </li>
              );
            }
          })}
        </ol>
      </nav>
    </>
  );
};

export default Breadcrumb;
