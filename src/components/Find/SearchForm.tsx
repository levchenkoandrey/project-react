import React, {FC} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";

import './search.css'
import {useAppDispatch, useAppSelector} from "../../hooks";
import {searchActions} from "../../redux";
import {IForm} from "../../interfaces";

const SearchForm: FC = () => {
    const {register, handleSubmit, reset} = useForm<IForm>();
    const dispatch = useAppDispatch();
    const {page, total_results} = useAppSelector(state => state.searchReducer);
    const navigate = useNavigate();
    const search: SubmitHandler<IForm> = async ({query}) => {
        await dispatch(searchActions.getResult({page, query}))
        dispatch(searchActions.setQuery(query))
        dispatch(searchActions.triggerPage(1))
        reset();
    };
    return (
        <div>
            <form className={'SearchForm'} onSubmit={handleSubmit(search)}>
                <input className={'SearchInput'} type="text" placeholder={'search movie'} {...register('query')}/>
                <button className={'SearchButton'}
                        onClick={() => navigate('findBody')}>Search
                </button>
            </form>
            <div className={'TotalResults'}>search results : {total_results}</div>
        </div>
    );
};

export {SearchForm};