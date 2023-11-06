import { useState, useEffect } from 'react';
import movieDB from '../api/movieDB';
import { DetailMovie } from '../interfaces/NowPlaying';
import { Cast, CreditResponse } from '../interfaces/MoviesCredits';


interface MovieDetails {
    isLoading: boolean,
    movieDetail?: DetailMovie
    cast: Cast[];
}

export const useMoviesDetails = (movieId: number) => {
    const [state, setstate] = useState<MovieDetails>({
        isLoading: true,
        movieDetail: undefined,
        cast: [],
    });

    const getMovieDetails = async () => {
        const movieDetailPromise = movieDB.get<DetailMovie>(`/${movieId}`);
        const castPromise = movieDB.get<CreditResponse>(`/${movieId}/credits`);

        const [movieDetailRes, castPromiseRes] = await Promise.all([movieDetailPromise, castPromise]);
        setstate({
            isLoading: false,
            movieDetail: movieDetailRes.data,
            cast: castPromiseRes.data.cast,
        });
    };

    useEffect(() => {
        getMovieDetails();
    }, []);

    return {
        ...state,
    };
};

