import React, {FC, useEffect} from 'react';
import {useForm} from "react-hook-form";
import {FindBody, SearchForm} from "../components";
import {useAppDispatch, useAppSelector} from "../hooks";
import {Outlet} from "react-router-dom";
import {movieActions} from "../redux";

const SearchPage:FC = () => {
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