import React, {FC, useEffect} from 'react';
import {useNavigate} from "react-router-dom";

import {MoviesList} from "../components";
import {useAppDispatch, useAppSelector} from "../hooks";
import {movieActions} from "../redux";
import './pages.css'
import '../index.scss';

const MoviesPage: FC = () => {
    const {page} = useAppSelector(state => state.movieReducer);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(movieActions.getAll(page))
    }, [dispatch, page])
    return (
        <div className={'moviesPage'}>
            <div className={'LogoPages'}>Movies</div>
            <button className={'genresButton'} onClick={() => navigate('/genres')}>All Genres</button>
            <div className={'findBody'}>{page}</div>
            <div className={'MainMoviesContainer'}>
                <button className={'change'} disabled={page < 2} onClick={() => {
                    dispatch(movieActions.prevPage())
                }}><span>Prev Page</span><span>Prev Page</span><span>Prev Page</span></button>
                <div className={'MovieList'}><MoviesList/></div>
                <button className={'change'} disabled={page > 400} onClick={() => {
                    dispatch(movieActions.nextPage())
                }}><span>Next Page</span><span>Next Page</span><span>Next Page</span></button>
            </div>
        </div>
    );
};

export {MoviesPage};