import React, {FC} from 'react';
import styles from './Sidebar.module.scss'
import {cn} from "shared/lib/classNames";
import {useSidebarContext} from "app/context/SidebarContext";
import {Button, ButtonVariant} from "shared/ui/Button";

export interface SidebarProps extends  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>{

}



export const Sidebar: FC<SidebarProps> = ({className, ...otherProps}) => {
   const {isOpened,toggle} = useSidebarContext()


    return <div className={cn([styles.sidebar, className, ])} {...otherProps}>
        <Button variant={ButtonVariant.PRIMARY} onClick={toggle}>toggle</Button>
        {isOpened}
        {`${isOpened}`}
    </div>
};

