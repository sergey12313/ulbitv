import React, { FC } from 'react';
import styles from './Navbar.module.scss'
import {useTheme} from "shared/context/theme-context/useTheme";
import {cn} from "shared/lib/classNames";
import {AppLink} from "shared/ui/AppLink";
import {RoutePath} from "app/configs/routes";
interface NavbarProps extends  React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>{

}



export const Navbar: FC<NavbarProps> = ({className, ...otherProps}) => {
  const { toggleTheme} = useTheme()


  return <header className={cn([styles.navbar, className, ])} {...otherProps}>
    <h1>
      ulbitv
    </h1>
    <div className={styles.links}>
      <button onClick={toggleTheme}> toggle theme </button>
      <AppLink to={RoutePath.main} >
        Home
      </AppLink>
      <AppLink to={RoutePath.about} >
        About
      </AppLink>
    </div>

  </header>
};


