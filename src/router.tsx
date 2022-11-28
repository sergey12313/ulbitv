import {createBrowserRouter, Outlet} from "react-router-dom";
import {Main} from "./pages/Main";
import {About} from "./pages/About";

export const router = createBrowserRouter([

            {
                index: true,
                element: <About/>
            },
            {
                path: '/about',
                element: <Main/>
            }



])