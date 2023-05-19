import React, {FC} from 'react';

import {IGenre} from "../../../interfaces";

interface IProps {
    genre:IGenre
}

const GenreBadge:FC<IProps> = ({genre}) => {
    return (
        <button className={'genresButton'}>
            {genre.name}
        </button>
    );
};

export {GenreBadge};