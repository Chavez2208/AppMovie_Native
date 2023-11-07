import React, { useContext, useEffect } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { View, useWindowDimensions, ScrollView } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { useMovies } from '../hooks/useMovies';
import Loading from '../components/Loading';
import CardMovie from '../components/CardMovie';
import HorizontalSlider from '../components/HorizontalSlider';
import { GradientBackground } from '../components/GradientBackground';
import { getImageColores } from '../helpers/getColores';
import { GradientContext } from '../context/GradientContext';

const HomeMovie = () => {
    const { nowPlaying, popular, upComing, topRated, isLoading } = useMovies();
    const { top } = useSafeAreaInsets();
    const { width } = useWindowDimensions(); //Este Hook de Reeact me trae el width de la pantlala del movil
    const { setMainColors } = useContext(GradientContext);

    const gePosterColores = async (index: number) => {
        const movie = nowPlaying[index];
        const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
        const [primary = 'green', secondary = 'orange'] = await getImageColores(uri);
        setMainColors({ primary, secondary });
    };

    useEffect(() => {
        if (nowPlaying.length > 0) {
            gePosterColores(0);
        }
    }, [nowPlaying])

    if (isLoading) { return (<Loading />); }
    return (
        <GradientBackground >
            <ScrollView>
                <View style={{ marginTop: top + 20 }}>
                    <View style={{ height: 440 }}>
                        <Carousel
                            data={nowPlaying}
                            renderItem={({ item }: any) => <CardMovie movie={item} />}
                            sliderWidth={width}
                            itemWidth={250}
                            inactiveSlideOpacity={1}
                            onSnapToItem={index => gePosterColores(index)} //Trae y sirve para
                        />
                    </View>
                    <HorizontalSlider movies={popular} title="Cartelera" />
                    <HorizontalSlider movies={topRated} title="Top" />
                    <HorizontalSlider movies={upComing} title="Proximamente" />
                </View>
            </ScrollView>
        </GradientBackground>
    );
};

export default HomeMovie;
