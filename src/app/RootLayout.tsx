import React, { FC } from 'react';
import {classNames} from "shared/lib/classNames";
import {Link, Outlet} from "react-router-dom";
import {useTheme} from "shared/context/theme-context/useTheme";


interface RootLayoutProps {}


export const RootLayout: FC<RootLayoutProps> = () => {
    const {theme, toggleTheme} = useTheme()
  return <div className={ classNames('app', theme) }>
      <header>
          <Link to="/" >
              Home
          </Link>
          <Link to="/about" >
              About
          </Link>
          <button onClick={toggleTheme}> toggle theme </button>
      </header>
      <main>
          <React.Suspense fallback={<div>Loading</div>}>
                <Outlet/>
          </React.Suspense>
      </main>
  </div>
};


