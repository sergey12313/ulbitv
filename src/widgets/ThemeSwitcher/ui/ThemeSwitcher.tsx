import React, {FC} from 'react';
import {cn} from "shared/lib/classNames";
import styles from './ThemeSwitcher.module.scss'
import Moon from './assets/Moon.svg'
import Sun from './assets/Sun.svg'
import {Theme, useTheme} from "shared/context";
import {Button, ButtonProps, ButtonVariant} from "shared/ui/Button";

interface ThemeSwitcherProps extends  ButtonProps{

}


export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({className, ...otherProps}) => {
  const {theme, toggleTheme} = useTheme()
  return <Button variant={ButtonVariant.PRIMARY} className={cn(styles.switcher, className) } onClick={toggleTheme}>{theme === Theme.LIGHT ? <Sun/> : <Moon/>}</Button>;
};


