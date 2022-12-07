import { FC } from 'react';
import styles from './LoaderPage.module.scss';
import { Loader } from 'shared/ui/Loader/ui/Loader';

export const LoaderPage: FC = () => {
  return (
    <div className={styles.loaderPage}>
      <Loader />
    </div>
  );
};
