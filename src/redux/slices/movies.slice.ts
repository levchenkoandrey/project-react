import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IMovi, IPaginationMovies, IPaginationSearch, ISearchForGenre} from "../../interfaces";
import {movieService} from "../../services";


interface IState {
    movies: IMovi[];
    page: number;
    movieForGenre: IMovi[];
    pageMovieForGenre: number;

}

const initialState: IState = {
    movies: [],
    page: 1,
    movieForGenre: [],
    pageMovieForGenre: 1


};
const getAll = createAsyncThunk<IPaginationMovies<IMovi>, number>(
    'movieSlice/getAll',
    async (page, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getAll(page);
            return data
        } catch (e) {
            const err = e as AxiosError
            // return rejectWithValue(err.response.data)
        }
    }
)
const getByGenre = createAsyncThunk<IPaginationSearch<IMovi>, ISearchForGenre>(
    'movieSlice/getByGenre',
    async ({page, genre}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getByGenre(page, genre);
            return data
        } catch (e) {
            const err = e as AxiosError
            // return rejectWithValue(err.response.data)
        }
    }
)


const slice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        prevPage: state => {
            state.page -= 1
        },
        nextPage: state => {
            state.page += 1
        },
        prevPageG: state => {
            state.pageMovieForGenre -= 1
        },
        nextPageG: state => {
            state.pageMovieForGenre += 1
        },
        triggerPage:(state, action)=>{
            state.pageMovieForGenre = action.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                const {results} = action.payload;
                state.movies = results
            })
            .addCase(getByGenre.fulfilled, (state, action) => {
                const {page, results} = action.payload;
                state.movieForGenre = results
                state.page = page
            })

});

const {reducer: movieReducer, actions} = slice;

const movieActions = {
    ...actions,
    getAll,
    getByGenre
}

export {
    movieReducer,
    movieActions
}
