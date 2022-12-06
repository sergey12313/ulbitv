import React, {FC} from 'react';
import styles from './Navbar.module.scss'
import {cn} from "shared/lib/classNames";
import {AppLink} from "shared/ui/AppLink";
import {RoutePath} from "app/configs/routes";
import {Button, ButtonVariant} from "shared/ui/Button";
import MenuIcon from '../assets/Menu.svg'
import {useSidebarContext} from "app/context/SidebarContext";

interface NavbarProps extends  React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>{

}



export const Navbar: FC<NavbarProps> = ({className, ...otherProps}) => {
  const {toggle} = useSidebarContext()


  return <header className={cn([styles.navbar, className, ])} {...otherProps}>
    <div className={styles.leftBlock}>
      <Button variant={ButtonVariant.OUTLINE} className={styles.menuButton}> <MenuIcon width={36} height={36} onClick={toggle}/></Button>
      <h1 >
        Ulbi TV
      </h1>
    </div>

    <div className={styles.links}>

      <AppLink to={RoutePath.main} >
        Home
      </AppLink>
      <AppLink to={RoutePath.about} >
        About
      </AppLink>
    </div>

  </header>
};


