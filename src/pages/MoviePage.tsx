import React, {FC, useEffect} from 'react';
import {Rating} from "@mui/material";

import {GenreBadge} from "../components";
import {useAppLocation} from "../hooks";
import {IMovi} from "../interfaces";
import {useAppDispatch, useAppSelector} from "../hooks";
import {genresActions, movieActions} from "../redux";
import '../index.scss'

const MoviePage: FC = () => {
    const dispatch = useAppDispatch();
    const {state: {overview, title, vote_average, release_date, poster_path, genre_ids, id}} = useAppLocation<IMovi>();
    const img = `https://image.tmdb.org/t/p/w400${poster_path}`
    const {genres} = useAppSelector(state => state.genreReducer);
    const {video:{key}} = useAppSelector(state => state.movieReducer);
    useEffect(() => {
        dispatch(genresActions.getAll())
    }, [dispatch])
    useEffect(() => {
        dispatch(movieActions.getVideo(id))
    }, [id, dispatch])
    return (
        <div className={'MovieDetailPage'}>
            <img className={'MainPoster'} src={img} alt={title}/>
            <div className={'MainPageBody'}>
                <div className={'MainTitle'}>{title}</div>
                <div className={'release'}>release_date : {release_date}</div>
                <Rating
                    name="text-feedback"
                    value={(+vote_average) / 2}
                    readOnly
                    precision={0.5}
                />
                <div className={'GenreBadges'}>{genre_ids.map((genre, index) =>
                    <GenreBadge key={index}
                                genre={genres[genre]}/>)}</div>
                <div className={'overview'}>{overview}</div>
                {
                    {key}&&
                    <iframe
                        className={'video'}
                        width={'560px'}
                        height={'315px'}
                        src={`https://www.youtube.com/embed/${key}`}
                        title={'YouTube'}
                        allowFullScreen
                    >
                    </iframe>
                }
            </div>
        </div>
    );
};

export {MoviePage};