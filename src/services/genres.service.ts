import {IRes} from "../types";
import {axiosService} from "./axios.service";
import {urls} from "../constants";
import {IGenre, IPaginationGenres} from "../interfaces";

class GenresService {
    getAll():IRes<IPaginationGenres<IGenre>>{
        return axiosService.get(urls.genres)
    }
}

export const genreService = new GenresService()