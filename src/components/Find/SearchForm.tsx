import React, {FC, useEffect} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";

import './search.css'
import {useAppDispatch, useAppSelector} from "../../hooks";
import {searchActions} from "../../redux";
import {IForm} from "../../interfaces";

const SearchForm:FC = () => {
    const {register,handleSubmit,reset} = useForm<IForm>();
    const dispatch = useAppDispatch();
    const {page,query} = useAppSelector(state => state.searchReducer);
    useEffect(() => {
        dispatch(searchActions.triggerPage(1))
    }, [query])
    const search:SubmitHandler<IForm> = async ({query}) => {
        await dispatch(searchActions.getResult({page, query}))
       dispatch(searchActions.setQuery(query))
        reset();
    };

    return (
        <form onSubmit={handleSubmit(search)}>
            <input className={'SearchInput'} type="text" placeholder={'search movie'} {...register('query')}/>
            <button className={'SearchButton'}>Search</button>
        </form>
    );
};

export {SearchForm};