import React, {FC} from 'react';
import styles from './LangSwitcher.module.scss'
import {cn} from "shared/lib/classNames";
import {Button, ButtonProps} from "shared/ui/Button";
import {useTranslation} from "react-i18next";
import LangIcon from  './assets/LangIcon.svg'
interface LangSwitcherProps extends  ButtonProps{

}


export const LangSwitcher: FC<LangSwitcherProps> = ({className, ...otherProps}) => {
    const {i18n, } = useTranslation()
    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en': 'ru')
    }
  return <Button className={cn([styles.switcher, className])} onClick={toggle} {...otherProps}><LangIcon width={24} height={24}/> {i18n.language === 'ru' ? 'en': 'ru'}</Button>;
};


