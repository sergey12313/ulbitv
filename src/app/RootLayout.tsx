import React, { FC } from 'react';
import { cn } from 'shared/lib/classNames';
import { Outlet } from 'react-router-dom';
import { useTheme } from 'shared/context/theme-context/useTheme';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { LoaderPage } from 'widgets/LoaderPage';

interface RootLayoutProps {}

export const RootLayout: FC<RootLayoutProps> = () => {
  const { theme } = useTheme();
  return (
    <div className={cn('app', theme)}>
      <Navbar />
      <main className="main">
        <Sidebar />
        <div className="main__content">
          <React.Suspense fallback={<LoaderPage />}>
            <Outlet />
          </React.Suspense>
        </div>
      </main>
    </div>
  );
};
