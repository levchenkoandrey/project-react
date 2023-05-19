import React from 'react';
import {GenreList} from "./GenreList";
import {useNavigate} from "react-router-dom";

const GenresList = () => {
    const navigate = useNavigate();
    return (
        <div className={'MainGenresPage'}>
            <button className={'genresButton'} onClick={()=> navigate('/genres')}>All Genres</button>
            <GenreList/>
        </div>
    );
};

export {GenresList};