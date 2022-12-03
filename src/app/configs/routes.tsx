import {createBrowserRouter} from "react-router-dom";



import React from "react";
import {RootLayout} from "../RootLayout";
import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";

export const enum AppRoutes  {
    MAIN='main',
    ABOUT = 'about'
}
export const RoutePath: Record<AppRoutes,string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about'
}


export const routes = createBrowserRouter([
    {
      path: RoutePath.main,
        element: <RootLayout/>,

        errorElement: <div >error</div>,
        children: [
            {
                index: true,
                element: <MainPage/>
            },
            {
                path: RoutePath.about,
                element: <AboutPage/>
            }

        ]
    },



])