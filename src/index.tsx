import ReactDOM from 'react-dom/client';

import React from 'react';
import {RouterProvider} from "react-router-dom";
import {routes} from "./routes";
import './styles/index.scss'
import {ThemeProvider} from "./theme/ThemeProvider";


ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ThemeProvider>
            <RouterProvider router={routes} />
        </ThemeProvider>
    </React.StrictMode>


)