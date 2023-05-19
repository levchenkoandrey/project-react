import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts";
import {GenrePage, MoviesPage, MoviePage, MainPage} from "./pages";
import './App.css'
import {SearchPage} from "./pages";
import {FindBody, GenreList, GenresList} from "./components";

const App = () => {
    return (
        <div className={'App'}>
            <div className={'MainContainer'}>
                <Routes>
                    <Route path={'/'} element={<MainLayout/>}>
                        <Route index element={<Navigate to={'main'}/>}/>
                        <Route path={'main'} element={<MainPage/>}/>
                        <Route path={'movies'} element={<MoviesPage/>}/>
                        <Route path={'genres'} element={<GenrePage/>}>
                            <Route path={'genreList'} element={<GenreList/>}/>
                        </Route>
                        <Route path={'genresList'} element={<GenresList/>}/>
                        <Route path={'movieDetails'} element={<MoviePage/>}/>
                        <Route path={'search'} element={<SearchPage/>}>
                            <Route path={'findBody'} element={<FindBody/>}/>
                        </Route>
                    </Route>
                </Routes>
            </div>
        </div>

    );
};

export default App;
