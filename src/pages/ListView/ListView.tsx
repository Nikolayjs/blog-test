import { FC } from 'react';

import styles from './ListView.module.scss';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';

const ListView: FC = () => {
  return (
    <>
      <Breadcrumb />
      <div>List View</div>
    </>
  );
};

export default ListView;
