import React, {FC} from 'react';
import {Outlet} from "react-router-dom";

import {SearchForm} from "../components";
import {useAppSelector} from "../hooks";

const SearchPage: FC = () => {
    const {searchMovies} = useAppSelector(state => state.searchReducer);
    return (
        <div className={"SearchPage"}>
            <div className={'LogoPages'}>Search</div>
            <SearchForm/>
            {(searchMovies.length > 0) &&
                <Outlet/>}
        </div>
    );
};

export {SearchPage};