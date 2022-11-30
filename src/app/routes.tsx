import {createBrowserRouter} from "react-router-dom";



import React from "react";
import {RootLayout} from "./RootLayout";
import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";

export const routes = createBrowserRouter([
    {
      path: '/',
        element: <RootLayout/>,

        errorElement: <div >error</div>,
        children: [
            {
                index: true,
                element: <MainPage/>
            },
            {
                path: '/about',
                element: <AboutPage/>
            }

        ]
    },



])