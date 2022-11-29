import {createBrowserRouter} from "react-router-dom";

import {MainLayout} from "./layouts/MainLayout";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import React from "react";

export const routes = createBrowserRouter([
    {
      path: '/',
        element: <MainLayout/>,

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