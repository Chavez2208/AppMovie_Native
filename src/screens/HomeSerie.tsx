import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { View, useWindowDimensions, ScrollView } from 'react-native';
import { useSeries } from '../hooks/useSeries';
import Loading from '../components/Loading';
import Carousel from 'react-native-snap-carousel';
import CardSerie from '../components/CardSerie';
import HorizontalSliderSerie from '../components/HorizontalSliderSerie';

const HomeSerie = () => {

    const { isLoading, airing_today, on_the_air, popular, top_rated } = useSeries();

    const { top } = useSafeAreaInsets();
    const { width } = useWindowDimensions(); //Este Hook de Reeact me trae el width de la pantlala del movil


    if (isLoading) { return (<Loading />); }

    return (
        <ScrollView>
            <View style={{ marginTop: top + 20 }}>
                <View style={{ height: 440 }}>
                    <Carousel
                        data={airing_today}
                        renderItem={({ item }: any) => <CardSerie serie={item} />}
                        sliderWidth={width}
                        itemWidth={250}
                        inactiveSlideOpacity={1}
                    />
                </View>
                <HorizontalSliderSerie serie={top_rated} title='Top 10' />
                <HorizontalSliderSerie serie={on_the_air} title='Transmisión' />
                <HorizontalSliderSerie serie={popular} title='Populares' />
            </View>
        </ScrollView>
    );
};

export default HomeSerie;
