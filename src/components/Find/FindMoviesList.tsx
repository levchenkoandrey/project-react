import React, {FC, useEffect} from 'react';

import {useAppDispatch, useAppSelector} from "../../hooks";
import {MovieListCard} from "../MuviesList";
import {searchActions} from "../../redux";

const FindMoviesList: FC = () => {
    const {searchMovies, page, query} = useAppSelector(state => state.searchReducer);
    const dispatch = useAppDispatch();
    useEffect(() => {
        if (query.length > 0) {
            dispatch(searchActions.getResult({page, query}))
        }
    }, [query, page, dispatch])
    return (
        <div className={'MainMoviesList'}>
            {searchMovies.map(movie => <MovieListCard key={movie.id} movie={movie}/>)}
        </div>
    );
}

export {FindMoviesList};