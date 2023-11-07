import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { View, Text, FlatList } from 'react-native';
import { DetailSerie } from '../interfaces/NowSeries';
import { CastDetail } from '../interfaces/SerieCredits';
import { colors } from '../theme/StyleGlobal';
import CastItemSerie from '../components/CastItemSerie';

interface Props {
    serieDetail: DetailSerie,
    cast: CastDetail[]
}


const SerieDetail = ({ serieDetail, cast }: Props) => {

    return (
        <>
            {/* Detalles de pelicula  */}
            <View style={{ marginHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ color: 'black', fontSize: 12 }}>Fecha al Aire: ({serieDetail.last_air_date})</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ color: 'black', marginHorizontal: 10 }}> {serieDetail.vote_average}</Text>
                    <Icon name="star-outline" size={15} color={colors.primary} />
                </View>
            </View>

            <View style={{ marginHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
                <Text style={{ color: colors.primary, fontSize: 12, opacity: 8 }}>Categorias: </Text>
                <Text style={{ color: colors.primary, fontSize: 10 }}>{serieDetail.genres.map(g => g.name).join(' , ')}</Text>
            </View>

            <View style={{ marginHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ color: colors.primary, fontSize: 12, opacity: 8 }}>Temporadas: </Text>
                <Text style={{ color: colors.primary, fontSize: 12 }}>{serieDetail.number_of_seasons}</Text>
            </View>

            {/* Resumen de Pelicula */}
            <View style={{ marginHorizontal: 20, justifyContent: 'space-between', marginTop: 10 }}>
                <Text style={{ color: 'black', fontSize: 14, opacity: 8 }}>Sinopsis: </Text>
                <Text style={{ color: 'black', fontSize: 12, opacity: 8, textTransform: 'capitalize', textAlign: 'justify' }}>{serieDetail.overview}</Text>
            </View>


            {/* casting Flatlist */}
            <View style={{ marginTop: 10, marginHorizontal: 20, justifyContent: 'space-between', marginBottom: 20 }}>
                <Text style={{ color: 'black', fontSize: 14, opacity: 8 }}>Actores: </Text>
                <FlatList
                    data={cast}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => <CastItemSerie actor={item} />}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={{ height: 70 }}
                />
            </View>
        </>
    );
};

export default SerieDetail;
