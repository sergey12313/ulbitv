import ReactDOM from 'react-dom/client';

import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { routes } from 'app/configs/routes';
import './app/styles/index.scss';
import { ThemeProvider } from 'shared/context';
import { SidebarProvider } from 'app/context/SidebarContext';
import './app/configs/i18n/i18n';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <SidebarProvider>
        <RouterProvider router={routes} />
      </SidebarProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
