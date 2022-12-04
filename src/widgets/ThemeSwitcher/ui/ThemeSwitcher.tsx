import React, { FC } from 'react';
import styles from './ThemeSwitcher.module.scss'
import {cn} from "shared/lib/classNames";
import {useTheme} from "shared/context/theme-context/useTheme";
interface ThemeSwitcherProps extends  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>{

}


export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({className, ...otherProps}) => {
  const { toggleTheme} = useTheme()
  return <button onClick={toggleTheme}> toggle theme </button>;
};


