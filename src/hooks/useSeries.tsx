
import { useEffect, useState } from 'react';
import serieDB from '../api/serieDB';
import { NowAirSerieResponse, Serie } from '../interfaces/NowSeries';

interface SeriesState {
    on_the_air: Serie[],
    airing_today: Serie[],
    popular: Serie[],
    top_rated: Serie[]
}


export const useSeries = () => {
    const [isLoading, setIsLoading] = useState(true); //Para validar cuando inicia el hook
    const [moviesState, setMoviesState] = useState<SeriesState>({
        on_the_air: [],
        airing_today: [],
        popular: [],
        top_rated: [],
    }); //Arreglo de peliculas de API


    const getSeries = async () => {
        const on_the_airPromise = await serieDB.get<NowAirSerieResponse>('/on_the_air');
        const airing_todayPromise = await serieDB.get<NowAirSerieResponse>('/airing_today');
        const popularPromise = await serieDB.get<NowAirSerieResponse>('/popular');
        const top_ratedPromise = await serieDB.get<NowAirSerieResponse>('/top_rated');

        const responses = await Promise.all([
            on_the_airPromise,
            airing_todayPromise,
            popularPromise,
            top_ratedPromise,
        ]);
        setMoviesState({
            on_the_air: responses[0].data.results,
            airing_today: responses[1].data.results,
            popular: responses[2].data.results,
            top_rated: responses[3].data.results,
        });
        setIsLoading(false);
    };

    useEffect(() => {
        getSeries();
    }, []);

    return {
        ...moviesState,
        isLoading,
    };
};

