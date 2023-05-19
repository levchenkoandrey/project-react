import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts";
import {GenrePage, MoviesPage, MoviePage, MainPage} from "./pages";
import './App.css'
import {SearchPage} from "./pages";
import {GenreList} from "./components";

const App = () => {
    return (
        <div className={'App'}>
            <div className={'MainContainer'}>
                <Routes>
                    <Route path={'/'} element={<MainLayout/>}>
                        <Route index element={<Navigate to={'/'}/>}/>
                        <Route path={'main'} element={<MainPage/>}/>
                        <Route path={'movies'} element={<MoviesPage/>}/>
                        <Route path={'genres'} element={<GenrePage/>}>
                            <Route path={'genreList'} element={<GenreList/>}/>
                        </Route>
                        <Route path={'movieDetails'} element={<MoviePage/>}>
                        </Route>
                        <Route path={'search'} element={<SearchPage/>}/>
                    </Route>
                </Routes>
            </div>
        </div>

    );
};

export default App;
