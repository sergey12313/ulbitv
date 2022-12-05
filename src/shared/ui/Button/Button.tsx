import React, { FC } from 'react';
import styles from './Button.module.scss'
import {cn} from "shared/lib/classNames";
import {useTheme} from "shared/context";
export const enum ButtonVariant {
  DEFAULT ="default",
  PRIMARY ='primary',
}

export interface ButtonProps extends  React.DetailedHTMLProps<React.HTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
  variant?: ButtonVariant;

}


export const Button: FC<ButtonProps> = ({className, children, variant=ButtonVariant.DEFAULT, ...otherProps}) => {
  const {theme} = useTheme()
  return <button className={cn([styles.Button, styles[variant], styles[theme], theme,  className])} {...otherProps}>{children}</button>;
};


