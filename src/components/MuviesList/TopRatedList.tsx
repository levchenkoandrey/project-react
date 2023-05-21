import React, {FC, useEffect} from 'react';

import {useAppDispatch, useAppSelector} from "../../hooks";
import {topMovieActions} from "../../redux";
import {MovieListCard} from "./MovieListCard";

const TopRatedList: FC = () => {
    const {page, movies} = useAppSelector(state => state.topMovieReducer);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(topMovieActions.getTop(page))
    }, [page, dispatch])
    return (
        <div>
            <div className={'MainMoviesList'}>
                {movies.map(movie => <MovieListCard key={movie.id} movie={movie}/>)}
            </div>
        </div>
    );
};

export {TopRatedList};

