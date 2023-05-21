import React, {FC, useEffect} from 'react';

import {genresActions} from "../../redux";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {topMovieActions} from "../../redux";
import {TopRatedList} from "./TopRatedList";

const TopRated: FC = () => {
    const dispatch = useAppDispatch();
    const {page} = useAppSelector(state => state.topMovieReducer);
    useEffect(() => {
        dispatch(genresActions.getAll())
    }, [dispatch])
    return (
        <div>
            <div className={'findBody'}>{page}</div>
            <div className={'MainMoviesContainer'}>
                <button className={'change'} disabled={page < 2} onClick={() => {
                    dispatch(topMovieActions.prevPage())
                }}><span>Prev Page</span><span>Prev Page</span><span>Prev Page</span></button>
                <div className={'MovieList'}><TopRatedList/></div>
                <button className={'change'} disabled={page > 20} onClick={() => {
                    dispatch(topMovieActions.nextPage())
                }}><span>Next Page</span><span>Next Page</span><span>Next Page</span></button>
            </div>
        </div>
    );
};

export {TopRated};