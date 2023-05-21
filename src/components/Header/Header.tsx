import React, {FC} from 'react';
import {NavLink} from "react-router-dom";

import {avatar, logo} from "../../assets/links.imge";
import './header.css'
import {Theme} from "../../Theme";
import '../../index.scss';


const Header: FC = () => {
    return (
        <div className={'Header'}>
            <div className={'navigate'}>
                <button className={"buttonTheme"}><Theme/></button>
                <NavLink to={'/'} className={'Logo'}>
                    <img src={logo} width={'95%'} height={'100%'} alt="Logo"/>
                </NavLink>
                <NavLink to={'main'}>Top Rated</NavLink>
            </div>
            <NavLink to={'movies'}>Movies</NavLink>
            <NavLink to={'search'}>Search</NavLink>
            <img className={'avatar'} src={avatar} alt="linksImg"/>
        </div>
    );
};

export {Header};