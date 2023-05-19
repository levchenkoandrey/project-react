import React, {FC} from 'react';
import {mainLogo} from "../assets/links.imge";

const MainPage:FC = () => {
    return (
        <div className={'MainPage'}>
            <div className={'LogoPages'}>Main</div>
            <img src={mainLogo} alt="Logo"/>
        </div>
    );
};

export {MainPage};