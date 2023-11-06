import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { View, useWindowDimensions, ScrollView } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { useMovies } from '../hooks/useMovies';
import Loading from '../components/Loading';
import CardMovie from '../components/CardMovie';
import HorizontalSlider from '../components/HorizontalSlider';

const HomeMovie = () => {
    const { nowPlaying, popular, upComing, topRated, isLoading } = useMovies();
    const { top } = useSafeAreaInsets();
    const { width } = useWindowDimensions(); //Este Hook de Reeact me trae el width de la pantlala del movil

    if (isLoading) { return (<Loading />); }

    return (
        <ScrollView>
            <View style={{ marginTop: top + 20 }}>
                <View style={{ height: 440 }}>
                    <Carousel
                        data={nowPlaying}
                        renderItem={({ item }: any) => <CardMovie movie={item} />}
                        sliderWidth={width}
                        itemWidth={250}
                        inactiveSlideOpacity={1}
                    />
                </View>
                <HorizontalSlider movies={popular} title="Cartelera" />
                <HorizontalSlider movies={topRated} title="Top" />
                <HorizontalSlider movies={upComing} title="Proximamente" />
            </View>
        </ScrollView>
    );
};

export default HomeMovie;
