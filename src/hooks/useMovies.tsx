import { useState, useEffect } from 'react';
import movieDB from '../api/movieDB';
import { NowPlayingResponse, Movie } from '../interfaces/NowPlaying';

interface MoviesState {
    nowPlaying: Movie[]
    popular: Movie[]
    topRated: Movie[]
    upComing: Movie[]
}

export const useMovies = () => {
    const [isLoading, setIsLoading] = useState(true); //Para validar cuando inicia el hook
    const [moviesState, setMoviesState] = useState<MoviesState>({
        nowPlaying: [],
        popular: [],
        topRated: [],
        upComing: [],
    }); //Arreglo de peliculas de API

    const getMovies = async () => {
        const now_playingPromise = movieDB.get<NowPlayingResponse>('/now_playing');
        const popularPromise = movieDB.get<NowPlayingResponse>('/popular');
        const top_ratedPromise = movieDB.get<NowPlayingResponse>('/top_rated');
        const upcomingPromise = movieDB.get<NowPlayingResponse>('/upcoming');

        const responses = await Promise.all([now_playingPromise, popularPromise, top_ratedPromise, upcomingPromise]);
        setMoviesState({
            nowPlaying: responses[0].data.results,
            popular: responses[1].data.results,
            topRated: responses[2].data.results,
            upComing: responses[3].data.results,
        });

        setIsLoading(false);
    };

    useEffect(() => {
        getMovies();
    }, []);

    return {
        ...moviesState,
        isLoading,
    };
};

