import React, { FC } from 'react';
import styles from './Sidebar.module.scss';
import { cn } from 'shared/lib/classNames';
import { useSidebarContext } from 'app/context/SidebarContext';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

export interface SidebarProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Sidebar: FC<SidebarProps> = ({ className, ...otherProps }) => {
  const { isOpened } = useSidebarContext();

  return (
    <div
      className={cn([styles.sidebar, { [styles.collapsed]: !isOpened }, className])}
      {...otherProps}
    >
      <ThemeSwitcher />
    </div>
  );
};
