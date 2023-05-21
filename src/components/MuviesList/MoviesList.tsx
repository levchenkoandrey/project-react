import React, {FC, useEffect} from 'react';

import './moviesList.css'
import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../redux";
import {MovieListCard} from "./MovieListCard";

const MoviesList: FC = () => {
    const {page, movies} = useAppSelector(state => state.movieReducer);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(movieActions.getAll(page))
    }, [page, dispatch])
    return (
        <div className={'MainMoviesList'}>
            {movies.map(movie => <MovieListCard key={movie.id} movie={movie}/>)}
        </div>
    );
};


export {MoviesList};