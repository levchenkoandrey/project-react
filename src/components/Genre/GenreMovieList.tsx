import React, {FC} from 'react';

import {useAppSelector} from "../../hooks";
import './genre.css'
import {MovieListCard} from "../MuviesList";


interface IProps {
    name:string
}

const GenreMovieList:FC<IProps> = ({name}) => {
    const {movieForGenre} = useAppSelector(state => state.movieReducer);
    return (
        <div className={'genreMoviesList'}>
            {movieForGenre.map(movie => <MovieListCard key={movie.id} movie={movie} name={name}/>)}
        </div>
    );
};

export {GenreMovieList};