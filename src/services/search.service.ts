import {IRes} from "../types";
import {axiosService} from "./axios.service";
import {urls} from "../constants";
import {IMovi, IPaginationSearch} from "../interfaces";


class SearchService {
    getResult(page: number, query: string): IRes<IPaginationSearch<IMovi>> {
        return axiosService.get(urls.search, {params: {query: query, page: page}})
    }

}

export const searchService = new SearchService()

