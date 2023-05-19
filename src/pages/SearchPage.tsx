import React, {FC} from 'react';
import {useForm} from "react-hook-form";
import {FindBody, SearchForm} from "../components";

const SearchPage:FC = () => {
    return (
        <div className={"SearchPage"}>
            <div className={'LogoPages'}>Search</div>
            <SearchForm/>
            <FindBody/>
        </div>

    );
};

export {SearchPage};