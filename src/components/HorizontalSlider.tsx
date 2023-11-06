import React from 'react';
import { Movie } from '../interfaces/NowPlaying';
import { View, Text, FlatList } from 'react-native';
import CardMovie from './CardMovie';
import { styles } from '../theme/StyleGlobal';

interface Props {
    title?: string,
    movies: Movie[]
}

const HorizontalSlider = ({ movies, title }: Props) => {
    return (
        <View style={{ height: (title) ? 260 : 220 }}>
            {title && <Text style={{ ...styles.texto, marginBottom: 4 }}>{title}</Text>}
            <FlatList
                data={movies}
                renderItem={({ item }: any) => (
                    <CardMovie movie={item} width={140} height={200} />
                )}
                keyExtractor={(item) => item.id.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};

export default HorizontalSlider;

