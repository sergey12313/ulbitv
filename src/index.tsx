import ReactDOM from 'react-dom/client';
import {Counter} from "./component/Counter";
import {App} from "./App";
import React from 'react';
import {RouterProvider} from "react-router-dom";
import {router} from "./router";


ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>


)