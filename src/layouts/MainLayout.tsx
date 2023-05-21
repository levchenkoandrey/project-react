import React, {FC, useEffect} from 'react';
import {Outlet} from "react-router-dom";

import {Header} from "../components";
import './MainLayout.css'
import {useAppDispatch} from "../hooks";
import {movieActions} from "../redux";


const MainLayout: FC = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(movieActions.getAll(1))
    }, [dispatch])
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};