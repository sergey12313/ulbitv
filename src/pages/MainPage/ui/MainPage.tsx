import { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const MainPage: FC = () => {
  const { t } = useTranslation();
  useEffect(() => {
    if (Math.random() < 0.5) {
      throw new Error();
    }
  }, []);
  return <div>{t('mainPageText')}</div>;
};
export default MainPage;
