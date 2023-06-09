import React, {FC} from 'react';
import {useNavigate} from "react-router-dom";
import {Rating} from "@mui/material";

import {IMovi} from "../../interfaces";

interface IProps {
    movie: IMovi
}

const MovieListCard: FC<IProps> = ({movie}) => {
    const {poster_path, release_date, vote_average, title, overview} = movie;
    const navigate = useNavigate();
    const img = `https://image.tmdb.org/t/p/w200${poster_path}`
    return (
        <button className={'MovieListCard'} onClick={() => navigate('/movieDetails', {state: {...movie}})}>
            <div className={"movieListCardBody"}>
                <div>{title}</div>
                <div>release:{release_date}</div>
                <Rating
                    name="text-feedback"
                    value={(+vote_average) / 2}
                    readOnly
                    precision={0.5}
                />
            </div>
            <p className={"OverviewListCard"}>
                <img className={'poster'}
                     src={poster_path ? img : 'https://image.tmdb.org/t/p/w200/A3ZbZsmsvNGdprRi2lKgGEeVLEH.jpg'}
                     alt={title}/>
                {overview}</p>
        </button>
    );
};

export {MovieListCard};