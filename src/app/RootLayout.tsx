import React, { FC } from 'react';
import { cn } from 'shared/lib/classNames';
import { Outlet } from 'react-router-dom';
import { useTheme } from 'shared/context/theme-context/useTheme';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { useTranslation } from 'react-i18next';

interface RootLayoutProps {}

export const RootLayout: FC<RootLayoutProps> = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();
  return (
    <div className={cn('app', theme)}>
      <Navbar />
      <main className="main">
        <Sidebar />
        <div className="main__content">
          <React.Suspense fallback={<div>{t('loading')}</div>}>
            <Outlet />
          </React.Suspense>
        </div>
      </main>
    </div>
  );
};
