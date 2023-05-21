import React, {FC, useEffect} from 'react';

import {useAppDispatch, useAppSelector} from "../hooks";
import {themeActions} from "../redux";
import styles from './theme.module.scss'
import cn from 'classnames'
// @ts-ignore
const Theme:FC = ({ className }) => {
    const theme = useAppSelector(state => state.themeReducer);
    const dispatch = useAppDispatch();
    useEffect(() => {
        document.documentElement.dataset.theme = theme
        localStorage.setItem('theme', theme)
    }, [theme])
    const handleChange = () => dispatch(themeActions.set(theme === 'dark' ? 'light' : 'dark'))

    return (
        <>
            <div
                className={cn(className, styles.root, theme === 'dark' ? styles.dark : styles.light)}
                onClick={handleChange}
            />
            {theme === 'dark'?'dark':'light'}
        </>
    );
};

export {Theme};
