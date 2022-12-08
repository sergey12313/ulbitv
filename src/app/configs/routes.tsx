import { createBrowserRouter } from 'react-router-dom';
import { RootLayout } from '../RootLayout';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import i18n from 'app/configs/i18n/i18n';
import { NotFoundPage } from 'pages/NotFoundPage';
import { PageError } from 'widgets/PageError';

export const enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  NOT_FOUND = 'notFound',
}
export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.NOT_FOUND]: '*',
};

export const routes = createBrowserRouter([
  {
    path: RoutePath.main,
    element: <RootLayout />,
    errorElement: <div>{i18n.t('error')}</div>,
    children: [
      {
        errorElement: <PageError />,
        children: [
          {
            index: true,
            element: <MainPage />,
          },
          {
            path: RoutePath.about,
            element: <AboutPage />,
          },
          {
            path: RoutePath.notFound,
            element: <NotFoundPage />,
          },
          {
            path: 'hello/qwer',
            element: <div>123</div>,
          },
        ],
      },
    ],
  },
]);
