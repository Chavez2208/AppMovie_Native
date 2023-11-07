import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { CastDetail } from '../interfaces/SerieCredits';
import { View, Text, Image, StyleSheet } from 'react-native';
import { colors } from '../theme/StyleGlobal';


interface Props {
    actor: CastDetail
}

const CastItemSerie = ({ actor }: Props) => {
    const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;
    return (
        <View style={styleScreen.container}>
            {
                actor.profile_path ? <Image
                    source={{ uri }}
                    style={{ width: 50, height: 50, borderRadius: 10, marginLeft: 3 }}
                /> : <Icon name="person-circle-outline" size={50} color={colors.primary} />
            }
            <View style={styleScreen.infoActor}>
                <View>
                    <Text style={{ color: 'black', fontSize: 16, fontWeight: 'bold' }}>{actor.name}</Text>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', alignContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: 'black', fontSize: 14, fontWeight: 'bold', marginLeft: 5 }}>{actor.character}</Text>
                </View>
            </View>
        </View>
    );
};


const styleScreen = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderColor: 'rgba(0, 0, 0, 0.5)',
        borderWidth: 2,
        borderRadius: 10,
        paddingVertical: 5,
        marginTop: 5,
        marginRight: 5,
    },
    infoActor: {
        marginLeft: 10,
        paddingHorizontal: 5,
    },
});

export default CastItemSerie;
