import React from 'react';
import {useNavigate} from "react-router-dom";

import {GenreList} from "./GenreList";

const GenresList = () => {
    const navigate = useNavigate();
    return (
        <div className={'MainGenresPage'}>
            <button className={'genresButton'} onClick={() => navigate('/genres')}>All Genres</button>
            <GenreList/>
        </div>
    );
};

export {GenresList};