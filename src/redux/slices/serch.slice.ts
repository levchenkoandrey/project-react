import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IMovi, IPaginationSearch, IQuery, IResult} from "../../interfaces";
import {searchService} from "../../services/search.service";

interface IState {
    searchMovies:IMovi[];
    page:number;
    query:string;
}

const initialState:IState = {
    searchMovies:[],
    page:1,
    query:""
};

const getResult = createAsyncThunk<IPaginationSearch<IMovi>, IQuery>(
    'searchSlice/getResult',
    async ({page, query}, {rejectWithValue}) => {
        try {
            const {data} = await searchService.getResult(page,query);
            return data
        } catch (e) {
            const err = e as AxiosError
            // return rejectWithValue(err.response.data)
        }
    }
)

const slice = createSlice({
    name:'searchSlice',
    initialState,
    reducers:{
        prevPage: state => {
            state.page -= 1
        },
        nextPage: state => {
            state.page += 1
        },
        setQuery:(state, action) => {
            state.query = action.payload
        },
        triggerPage:(state, action)=>{
            state.page = action.payload
        }
    },
    extraReducers:builder =>
        builder
            .addCase(getResult.fulfilled, (state, action) => {

                    const {page, results} = action.payload;
                    state.page = page
                    state.searchMovies = results
            })

});

const {reducer:searchReducer, actions} = slice;

const searchActions = {
    ...actions,
    getResult
}

export {
    searchReducer,
    searchActions
}
