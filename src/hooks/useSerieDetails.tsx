import { useState, useEffect } from 'react';
import { DetailSerie } from '../interfaces/NowSeries';
import { CastDetail, CastSerie } from '../interfaces/SerieCredits';
import serieDB from '../api/serieDB';


interface SerieDetails {
    isLoading: boolean,
    serieDetail?: DetailSerie
    cast: CastDetail[];
}


export const useSeriesDetails = (seriId: number) => {
    const [state, setstate] = useState<SerieDetails>({
        isLoading: true,
        serieDetail: undefined,
        cast: [],
    });

    const getSerieDetails = async () => {
        const serieDetailPromise = serieDB.get<DetailSerie>(`/${seriId}`);
        const castPromise = serieDB.get<CastSerie>(`/${seriId}/credits`);

        const [serieDetailRes, castPromiseRes] = await Promise.all([serieDetailPromise, castPromise]);

        setstate({
            isLoading: false,
            serieDetail: serieDetailRes.data,
            cast: castPromiseRes.data.cast,
        });
    };

    useEffect(() => {
        getSerieDetails();
    }, []);

    return {
        ...state,
    };
};
