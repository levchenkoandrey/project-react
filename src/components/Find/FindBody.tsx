import React, {FC, useEffect} from 'react';

import {useAppDispatch, useAppLocation, useAppSelector} from "../../hooks";
import {movieActions, searchActions} from "../../redux";
import {FindMoviesList} from "./FindMoviesList";
import {IForm} from "../../interfaces";

const FindBody: FC = () => {
    const {page} = useAppSelector(state => state.searchReducer);
    const dispatch = useAppDispatch();
    return (
        <div>
            <div className={'findBody'}>{page}</div>
                <div className={'MainMoviesContainer'}>
                    <button className={'change'} disabled={page < 2} onClick={() => {
                        dispatch(searchActions.prevPage())
                    }}><span>Prev Page</span><span>Prev Page</span><span>Prev Page</span></button>

                    <div className={'MovieList'}><FindMoviesList/></div>

                    <button className={'change'} disabled={page > 400} onClick={() => {
                        dispatch(searchActions.nextPage())
                    }}><span>Next Page</span><span>Next Page</span><span>Next Page</span></button>
                </div>
        </div>
    );
};

export {FindBody};