import React, { useContext, useEffect } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { View, useWindowDimensions, ScrollView } from 'react-native';
import { useSeries } from '../hooks/useSeries';
import Loading from '../components/Loading';
import Carousel from 'react-native-snap-carousel';
import CardSerie from '../components/CardSerie';
import HorizontalSliderSerie from '../components/HorizontalSliderSerie';
import { GradientBackground } from '../components/GradientBackground';
import { getImageColores } from '../helpers/getColores';
import { GradientContext } from '../context/GradientContext';

const HomeSerie = () => {

    const { isLoading, airing_today, on_the_air, popular, top_rated } = useSeries();

    const { top } = useSafeAreaInsets();
    const { width } = useWindowDimensions(); //Este Hook de Reeact me trae el width de la pantlala del movil
    const { setMainColors } = useContext(GradientContext);

    const gePosterColores = async (index: number) => {
        const serie = airing_today[index];
        const uri = `https://image.tmdb.org/t/p/w500${serie.poster_path}`;
        const [primary = 'green', secondary = 'orange'] = await getImageColores(uri);
        setMainColors({ primary, secondary });
    };

    useEffect(() => {
        if (airing_today.length > 0) {
            gePosterColores(0);
        }
    }, [airing_today])

    if (isLoading) { return (<Loading />); }

    return (
        <GradientBackground>
            <ScrollView>
                <View style={{ marginTop: top + 20 }}>
                    <View style={{ height: 440 }}>
                        <Carousel
                            data={airing_today}
                            renderItem={({ item }: any) => <CardSerie serie={item} />}
                            sliderWidth={width}
                            itemWidth={250}
                            inactiveSlideOpacity={1}
                            onSnapToItem={index => gePosterColores(index)} //Trae y sirve para
                        />
                    </View>
                    <HorizontalSliderSerie serie={top_rated} title='Top 10' />
                    <HorizontalSliderSerie serie={on_the_air} title='Transmisión' />
                    <HorizontalSliderSerie serie={popular} title='Populares' />
                </View>
            </ScrollView>
        </GradientBackground>

    );
};

export default HomeSerie;
