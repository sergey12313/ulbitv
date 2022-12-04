import React, { FC } from 'react';
import styles from './AppLink.module.scss'
import {cn} from "shared/lib/classNames";
import {Link, LinkProps} from "react-router-dom";
interface AppLinkProps extends  LinkProps{

}


export const AppLink: FC<AppLinkProps> = ({className, ...otherProps}) => {

  return <Link className={cn([styles.link, className])} {...otherProps}></Link>;
};


