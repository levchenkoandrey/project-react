import React, {FC, useEffect} from 'react';
import {GenreBadge} from "../components";
import {useAppLocation} from "../hooks/router.hooks";
import {IMovi} from "../interfaces";
import {useAppDispatch, useAppSelector} from "../hooks";
import {genresActions} from "../redux";
import {Rating} from "@mui/material";

const MoviePage:FC = () => {
    const dispatch = useAppDispatch();
    const {state:{overview,title,vote_average,release_date,poster_path,genre_ids,}} = useAppLocation<IMovi>();
    const img = `https://image.tmdb.org/t/p/w400${poster_path}`
    const {genres} = useAppSelector(state => state.genreReducer);
    useEffect(() => {
        dispatch(genresActions.getAll())
    }, [dispatch])
    return (
        <div className={'MovieDetailPage'}>
            <img className={'MainPoster'} src={img} alt={title}/>
            <div className={'MainPageBody'}>
                <div className={'MainTitle'}>{title}</div>
                <div className={'release'}>release_date : {release_date}</div>
                <Rating
                    name="text-feedback"
                    value={(+vote_average)/2}
                    readOnly
                    precision={0.5}
                />
                <div>{genre_ids.map((genre,index) => <GenreBadge key={index} genre={genres[genre]}/>)}</div>
                <div className={'overview'}>{overview}</div>
            </div>
        </div>
    );
};

export {MoviePage};