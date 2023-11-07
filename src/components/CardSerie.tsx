import React from 'react';
import { Serie } from '../interfaces/NowSeries';
import { View, Image, TouchableOpacity } from 'react-native';
import { styles } from '../theme/StyleGlobal';
import { useNavigation } from '@react-navigation/core';

interface Props {
    serie: Serie,
    height?: number,
    width?: number,
}

const CardSerie = ({ serie, height = 420, width = 250 }: Props) => {
    const uri = `https://image.tmdb.org/t/p/w500${serie.poster_path}`;
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('DetailSerie', serie)}
            activeOpacity={0.8}
            style={{ width, height, marginHorizontal: 2, paddingBottom: 15, paddingHorizontal: 8 }}
        >
            <View style={styles.cardShadow}>
                <Image
                    source={{ uri }}
                    style={styles.imageCard}
                />
            </View>
        </TouchableOpacity>

    );
};

export default CardSerie;
