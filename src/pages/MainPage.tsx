import React, {FC} from 'react';

import {mainLogo} from "../assets/links.imge";
import {TopRated} from "../components";

const MainPage: FC = () => {
    return (
        <div className={'MainPage'}>
            <div className={'LogoPages'}>Top Rated</div>
            <img src={mainLogo} width={'700px'} alt="Logo"/>
            <TopRated/>
        </div>
    );
};

export {MainPage};