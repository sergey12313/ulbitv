import { FC } from 'react';
import styles from './PageLoader.module.scss';
import { Loader } from 'shared/ui/Loader/ui/Loader';

export const PageLoader: FC = () => {
  return (
    <div className={styles.loaderPage}>
      <Loader />
    </div>
  );
};
