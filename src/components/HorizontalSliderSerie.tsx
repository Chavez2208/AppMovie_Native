import React from 'react';
import { View, Text, FlatList } from 'react-native';
import CardSerie from './CardSerie';
import { Serie } from '../interfaces/NowSeries';
import { styles } from '../theme/StyleGlobal';


interface Props {
    title?: string,
    serie: Serie[]
}

const HorizontalSliderSerie = ({ serie, title }: Props) => {
    return (
        <View style={{ height: (title) ? 260 : 220 }}>
            {title && <Text style={{ ...styles.texto, marginBottom: 4 }}>{title}</Text>}
            <FlatList
                data={serie}
                renderItem={({ item }: any) => (
                    <CardSerie serie={item} width={140} height={200} />
                )}
                keyExtractor={(item) => item.id.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};

export default HorizontalSliderSerie;
