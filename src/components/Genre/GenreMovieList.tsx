import React, {FC} from 'react';

import {useAppSelector} from "../../hooks";
import './genre.css'
import {MovieListCard} from "../MuviesList";

const GenreMovieList: FC = () => {
    const {movieForGenre} = useAppSelector(state => state.movieReducer);
    return (
        <div className={'genreMoviesList'}>
            {movieForGenre.map(movie => <MovieListCard key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {GenreMovieList};