import React, { FC } from 'react';
import {cn} from "shared/lib/classNames";
import { Outlet} from "react-router-dom";
import {useTheme} from "shared/context/theme-context/useTheme";
import {Navbar} from "widgets/Navbar";


interface RootLayoutProps {}


export const RootLayout: FC<RootLayoutProps> = () => {
    const {theme} = useTheme()
  return <div className={ cn('app', theme) }>
  <Navbar/>
      <main>
          <React.Suspense fallback={<div>Loading</div>}>
                <Outlet/>
          </React.Suspense>
      </main>
  </div>
};


