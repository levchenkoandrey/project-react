import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IGenre, IPaginationGenres,} from "../../interfaces";
import {genreService} from "../../services";

interface IState {
    genres: { [key: number]: IGenre }
}

const initialState: IState = {
    genres: {}
};

const getAll = createAsyncThunk<IPaginationGenres<IGenre>, void>(
    'genresSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await genreService.getAll();
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)
const slice = createSlice({
    name: 'genresSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                const {genres} = action.payload;
                state.genres = genres.reduce((acc, cur) => {
                    return {...acc, [cur.id]: cur}
                }, {})
            })

});

const {reducer: genreReducer, actions} = slice;

const genresActions = {
    ...actions,
    getAll
}

export {
    genreReducer,
    genresActions
}