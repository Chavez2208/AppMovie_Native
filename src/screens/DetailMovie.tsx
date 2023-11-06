import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { View, Image, StyleSheet, useWindowDimensions, ScrollView, Text, TouchableOpacity } from 'react-native';
import { RootStackParams } from '../navigation/StackNavigation';
import { useMoviesDetails } from '../hooks/useMoviesDetails';
import Loading from '../components/Loading';
import MovieDetail from './MovieDetail';
import { colors } from '../theme/StyleGlobal';

interface Props extends StackScreenProps<RootStackParams, 'DetailMovie'> { }

const DetailMovie = ({ route, navigation }: Props) => {
    const { height } = useWindowDimensions();
    //Este Hook de Reeact me trae el width de la pantlala del movil

    const movie = route.params;
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    const { isLoading, cast, movieDetail } = useMoviesDetails(movie.id);

    return (
        <ScrollView>
            <View style={{ ...stylesScreen.imgContainer, height: height * 0.7 }}>
                <View style={stylesScreen.imgBorder}>
                    <Image
                        source={{ uri }}
                        style={stylesScreen.posterImg}
                    />
                </View>
            </View>
            <View style={stylesScreen.titleContainer}>
                <Text style={stylesScreen.title}>{movie.title} ( <Text style={stylesScreen.subtitle}>{movie.original_title}</Text> )</Text>
            </View>
            {isLoading ? <Loading /> : <MovieDetail movieDetail={movieDetail!} cast={cast} />}
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={stylesScreen.BtnBack}>
                <Icon name="chevron-back-outline" size={35} color="white" />
            </TouchableOpacity>
        </ScrollView>
    );
};


const stylesScreen = StyleSheet.create({
    imgContainer: {
        width: '100%',
        // overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,
        elevation: 9,
    },
    imgBorder: {
        flex: 1,
        overflow: 'hidden',
        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25,
    },
    posterImg: {
        flex: 1,
    },
    titleContainer: {
        marginHorizontal: 20,
        marginTop: 5,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
    },
    subtitle: {
        fontSize: 16,
        opacity: 0.7,
        color: 'black',
    },
    BtnBack: {
        position: 'absolute',
        zIndex: 999,
        elevation: 9,
        top: 40,
        marginHorizontal: 10,
        backgroundColor: colors.primary,
        borderRadius: 50,
    },
});

export default DetailMovie;

