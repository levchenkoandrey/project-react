import React, {FC, useEffect} from 'react';

import {useAppDispatch, useAppSelector} from "../../hooks";
import {searchActions} from "../../redux";
import {FindMoviesList} from "./FindMoviesList";

const FindBody: FC = () => {
    const {page, query, searchMovies} = useAppSelector(state => state.searchReducer);
    const dispatch = useAppDispatch();

    return (
        <div>
            {
                (searchMovies.length > 0)&&
                <div className={'MainMoviesContainer'}>
                    <button className={'change'} disabled={page < 2} onClick={() => {
                        dispatch(searchActions.prevPage())
                    }}><span>Prev Page</span><span>Prev Page</span><span>Prev Page</span></button>

                    <div className={'MovieList'}><FindMoviesList/></div>

                    <button className={'change'} disabled={page > 400} onClick={() => {
                        dispatch(searchActions.nextPage())
                    }}><span>Next Page</span><span>Next Page</span><span>Next Page</span></button>
                </div>
            }
        </div>
    );
};

export {FindBody};