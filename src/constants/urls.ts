const baseURL = 'https://api.themoviedb.org/3';
const posterURL='https://image.tmdb.org/t/p/w500'

const discover = '/discover';
const movies = '/movie';


const urls = {
    movies: {
        movies: `${discover}${movies}`,
        ById: (id: number): string => `${movies}/${id}`
    },
    genres:'/genre/movie/list',
    search:'/search/movie'
}

export {
    baseURL,
    posterURL,
    urls
}