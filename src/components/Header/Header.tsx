import React, {FC} from 'react';
import {NavLink} from "react-router-dom";

import {avatar, logo} from "../../assets/links.imge";
import './header.css'

const Header: FC = () => {
    return (
        <div className={'Header'}>
            <div className={'navigate'}>
                <NavLink to={'/'}>
                    <img className={'Logo'} src={logo} alt="Logo"/>
                </NavLink>
                <NavLink to={'main'}>Main</NavLink>
            </div>
            <NavLink to={'movies'}>Movies</NavLink>
            <NavLink to={'search'}>Search</NavLink>
            <button>light/dark</button>
            <img  className={'avatar'}src={avatar} alt="linksImg"/>
        </div>
    );
};

export {Header};