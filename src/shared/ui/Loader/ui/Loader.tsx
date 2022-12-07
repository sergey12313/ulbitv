import React, { FC } from 'react';
import styles from './Loader.module.scss';
import { cn } from 'shared/lib/classNames';

export interface LoaderProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Loader: FC<LoaderProps> = ({ className, ...otherProps }) => {
  return (
    <div className={cn([styles.loader, className])} {...otherProps}>
      <div />
      <div />
      <div />
      <div />
    </div>
  );
};
