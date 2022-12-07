import { createBrowserRouter } from 'react-router-dom';
import { RootLayout } from '../RootLayout';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import i18n from 'app/configs/i18n/i18n';

export const enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
}
export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
};

export const routes = createBrowserRouter([
  {
    path: RoutePath.main,
    element: <RootLayout />,
    errorElement: <div>{i18n.t('error')}</div>,

    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: RoutePath.about,
        element: <AboutPage />,
      },
    ],
  },
]);
