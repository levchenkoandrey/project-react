import React, {FC} from 'react';
import {useNavigate} from "react-router-dom";

import {IGenre} from "../../interfaces";

interface IProps {
    genre: IGenre
}

const GenreBadge: FC<IProps> = ({genre}) => {
    const {name} = genre;
    const navigate = useNavigate();
    return (
        <button className={'genresButton'} onClick={() => navigate('/genreslist', {state: {...genre}})}>
            {name}
        </button>
    )
};

export {GenreBadge};