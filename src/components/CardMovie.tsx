import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { Movie } from '../interfaces/NowPlaying';
import { styles } from '../theme/StyleGlobal';
import { useNavigation } from '@react-navigation/core';


interface Props {
    movie: Movie,
    height?: number,
    width?: number,
}
const CardMovie = ({ movie, height = 420, width = 250 }: Props) => {
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    const navigation = useNavigation();

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('DetailMovie', movie)}
            activeOpacity={0.8}
            style={{ width, height, marginHorizontal: 2, paddingBottom: 15, paddingHorizontal: 8 }}>
            <View style={styles.cardShadow}>
                <Image
                    source={{ uri }}
                    style={styles.imageCard}
                />
            </View>
        </TouchableOpacity>
    );
};

export default CardMovie;
