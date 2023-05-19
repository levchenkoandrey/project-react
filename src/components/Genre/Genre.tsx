import React, {FC} from 'react';

import {IGenre, ISearchForGenre} from "../../interfaces";
import {useAppDispatch} from "../../hooks";
import {movieActions} from "../../redux";
import {SubmitHandler} from "react-hook-form";
import {useNavigate} from "react-router-dom";

interface IProps {
    genre:IGenre
}

const Genre:FC<IProps> = ({genre}) => {
    const {name} = genre;
    const navigate = useNavigate();

    return (
        <button className={'genreGP'} onClick={() => navigate('genrelist', {state: {...genre}})}>
            {name}
        </button>
    );
};

export {Genre};