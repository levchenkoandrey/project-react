import React, {FC, useEffect} from 'react';
import {Outlet} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../hooks";
import {genresActions} from "../redux";
import {Genre} from "../components";


const GenrePage: FC = () => {
    const dispatch = useAppDispatch();
    const {genres} = useAppSelector(state => state.genreReducer);
    useEffect(() => {
        dispatch(genresActions.getAll())
    }, [dispatch])
    return (
        <div className={'MainGenresPage'}>
            <div className={'LogoPages'}>Genres</div>
            <div className={'GenresPage'}>
                {Object.values(genres).map(genre => <Genre key={genre.id} genre={genre}/>)}
            </div>
            <Outlet/>
        </div>
    );
};

export {GenrePage};