interface IPaginationMovies<T> {
    total_results: number;
    total_pages: number;
    page: number;
    results: T[];

}

interface IPaginationGenres<T> {
    genres:T[];
}

interface IPaginationSearch<T> {
    page:number;
    results:T[];
}


export type {
   IPaginationMovies,
   IPaginationGenres,
    IPaginationSearch
}