import {createBrowserRouter} from "react-router-dom";

import {MainLayout} from "./layouts/MainLayout";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import React from "react";

export const router = createBrowserRouter([
    {
      path: '/',
        element: <React.Suspense fallback={<div>Loading</div>}><MainLayout/></React.Suspense>,

        errorElement: <div >error</div>,
        children: [
            {
                index: true,
                element: <MainPageAsync/>
            },
            {
                path: '/about',
                element: <AboutPageAsync/>
            }

        ]
    },



])