import React, {FC, useEffect} from 'react';

import {useAppLocation} from "../../hooks";
import {IGenre} from "../../interfaces";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../redux";
import {GenreMovieList} from "./GenreMovieList";

const GenreList: FC = () => {
    const {state: {id}} = useAppLocation<IGenre>();
    const dispatch = useAppDispatch();
    const {pageMovieForGenre} = useAppSelector(state => state.movieReducer);
    useEffect(() => {
        dispatch(movieActions.triggerPage(1))
    }, [id, dispatch])
    useEffect(() => {
        dispatch(movieActions.getByGenre({page: pageMovieForGenre, genre: `${id}`}))
    }, [id, pageMovieForGenre, dispatch])
    return (
        <div>
            <div className={'findBody'}>{pageMovieForGenre}</div>
            <div className={'MainMoviesContainer'}>
                <button className={'change'} disabled={pageMovieForGenre < 2} onClick={() => {
                    dispatch(movieActions.prevPageG())
                }}><span>Prev Page</span><span>Prev Page</span><span>Prev Page</span></button>
                <div className={'MovieList'}><GenreMovieList/></div>
                <button className={'change'} disabled={pageMovieForGenre > 400} onClick={() => {
                    dispatch(movieActions.nextPageG())
                }}><span>Next Page</span><span>Next Page</span><span>Next Page</span></button>
            </div>
        </div>
    );
};

export {GenreList};