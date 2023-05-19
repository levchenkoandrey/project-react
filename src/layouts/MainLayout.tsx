import React, { FC } from 'react';
import {Outlet} from "react-router-dom";

import {Header} from "../components";
import './MainLayout.css'

const MainLayout:FC = () => {
    return (
        <div className={'MainLayout'}>
            <Header/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};