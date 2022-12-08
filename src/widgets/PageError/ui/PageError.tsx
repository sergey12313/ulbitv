import { FC } from 'react';
import styles from './PageError.module.scss';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';

export const PageError: FC = () => {
  const { t } = useTranslation();
  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <div className={styles.pageError}>
      {t('error')}
      <Button onClick={reloadPage}> {t('refreshPage')} </Button>
    </div>
  );
};
