import {IRes} from "../types";
import {axiosService} from "./axios.service";
import {urls} from "../constants";
import {IMovi, IPaginationMovies, IPaginationSearch} from "../interfaces";

class MoviesService {
    getAll(page: number = 1): IRes<IPaginationMovies<IMovi>> {
        return axiosService.get(urls.movies.movies, {params: {page: page}})
    }

    getByGenre(page: number, genre: string): IRes<IPaginationSearch<IMovi>> {
        return axiosService.get(urls.movies.movies, {params: {page: page, with_genres: genre}})
    }

}

export const movieService = new MoviesService()
// with_genres=comedy