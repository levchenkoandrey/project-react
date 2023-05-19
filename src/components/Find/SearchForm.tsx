import React, {FC, useEffect} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";

import './search.css'
import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions, searchActions} from "../../redux";
import {IForm} from "../../interfaces";
import {useNavigate} from "react-router-dom";

const SearchForm: FC = () => {
    const {register, handleSubmit, reset} = useForm<IForm>();
    const dispatch = useAppDispatch();
    const {page,query} = useAppSelector(state => state.searchReducer);
    const navigate = useNavigate();
    const search: SubmitHandler<IForm> = async ({query}) => {
        await dispatch(searchActions.getResult({page, query}))
        dispatch(searchActions.setQuery(query))
        dispatch(searchActions.triggerPage(1))
        reset();
    };

    return (
        <form onSubmit={handleSubmit(search)}>
            <input className={'SearchInput'} type="text" placeholder={'search movie'} {...register('query')}/>
            <button className={'SearchButton'}
                    onClick={() => navigate('findBody')}>Search</button>
        </form>
    );
};

export {SearchForm};