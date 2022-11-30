import ReactDOM from 'react-dom/client';

import React from 'react';
import {RouterProvider} from "react-router-dom";
import {routes} from "app/routes";
import './app/styles/index.scss'
import {ThemeProvider} from "shared/context";



ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ThemeProvider>
            <RouterProvider router={routes} />
        </ThemeProvider>
    </React.StrictMode>


)