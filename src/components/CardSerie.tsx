import React from 'react';
import { Serie } from '../interfaces/NowSeries';
import { View, Image } from 'react-native';
import { styles } from '../theme/StyleGlobal';

interface Props {
    serie: Serie,
    height?: number,
    width?: number,
}

const CardSerie = ({ serie, height = 420, width = 250 }: Props) => {
    const uri = `https://image.tmdb.org/t/p/w500${serie.poster_path}`;

    return (
        <View style={{ width, height, marginHorizontal: 7 }}>
            <View style={styles.cardShadow}>
                <Image
                    source={{ uri }}
                    style={styles.imageCard}
                />
            </View>
        </View>
    );
};

export default CardSerie;
