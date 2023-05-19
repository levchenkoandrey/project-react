import React, {FC, useEffect} from 'react';

import {MoviesList} from "../components";
import './pages.css'
import {useAppDispatch, useAppSelector} from "../hooks";
import {useNavigate} from "react-router-dom";
import {genresActions, movieActions} from "../redux";

const MoviesPage:FC = () => {

    const {page} = useAppSelector(state => state.movieReducer);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    console.log(page);
    useEffect(() => {
        dispatch(movieActions.getAll(page))
    }, [dispatch, page])
    useEffect(() => {
            dispatch(genresActions.getAll())
    }, [dispatch])
    return (
        <div className={'moviesPage'}>
            <div className={'LogoPages'}>Movies</div>
            <button className={'genresButton'} onClick={()=> navigate('/genres')}>All Genres</button>

            <div className={'MainMoviesContainer'}>
                <button className={'change'}  disabled={page < 2} onClick={()=>{dispatch(movieActions.prevPage())}}><span>Prev Page</span><span>Prev Page</span><span>Prev Page</span></button>

                <div className={'MovieList'}><MoviesList/></div>

                <button className={'change'} disabled={page > 400} onClick={()=>{dispatch(movieActions.nextPage())}}><span>Next Page</span><span>Next Page</span><span>Next Page</span></button>
            </div>
        </div>
    );
};

export {MoviesPage};