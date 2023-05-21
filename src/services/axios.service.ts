import axios from "axios";

import {baseURL, posterURL} from "../constants";

const axiosService = axios.create({baseURL});
const axiosPosterService = axios.create({baseURL: posterURL});

axiosService.interceptors.request.use(res => {
    const access = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNjc4MWZjYjI3NjQ4ZjYxZTVmM2VjYTM3MGJiNDEyMiIsInN1YiI6IjY0NWY1ODNlOGM0NGI5MDExOWM5ZjczMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zRZWh6xPR3jZSNxUx0HnyC4Xc0UJXg1bOQMWiKQSExE'

    if (access) {
        res.headers.Authorization = `Bearer ${access}`
    }

    return res
})
axiosPosterService.interceptors.request.use(res => {
    const access = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNjc4MWZjYjI3NjQ4ZjYxZTVmM2VjYTM3MGJiNDEyMiIsInN1YiI6IjY0NWY1ODNlOGM0NGI5MDExOWM5ZjczMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zRZWh6xPR3jZSNxUx0HnyC4Xc0UJXg1bOQMWiKQSExE'

    if (access) {
        res.headers.Authorization = `Bearer ${access}`
    }

    return res
})


export {
    axiosService,
    axiosPosterService
}