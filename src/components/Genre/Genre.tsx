import React, {FC} from 'react';
import {useNavigate} from "react-router-dom";

import {IGenre} from "../../interfaces";

interface IProps {
    genre: IGenre
}

const Genre: FC<IProps> = ({genre}) => {
    const {name} = genre;
    const navigate = useNavigate();
    return (
        <button className={'genreGP'} onClick={() => navigate('genrelist', {state: {...genre}})}>
            {name}
        </button>
    );
};

export {Genre};