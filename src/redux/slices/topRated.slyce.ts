import {AxiosError} from "axios";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {IMovi, IPaginationSearch} from "../../interfaces";
import {movieService} from "../../services";

interface IState {
    movies: IMovi[];
    page: number;
}

const initialState: IState = {
    movies: [],
    page: 1,
};

const getTop = createAsyncThunk<IPaginationSearch<IMovi>, number>(
    'topMovieSlice/getByGenre',
    async (page, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getTop(page);
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)


const slice = createSlice({
    name: 'topMovieSlice',
    initialState,
    reducers: {
        prevPage: state => {
            state.page -= 1
        },
        nextPage: state => {
            state.page += 1
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getTop.fulfilled, (state, action) => {
                const {results} = action.payload;
                state.movies = results
            })

});

const {reducer: topMovieReducer, actions} = slice;

const topMovieActions = {
    ...actions,
    getTop
}

export {
    topMovieActions,
    topMovieReducer
}
