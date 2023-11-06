import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeMovie from '../screens/HomeMovie';
import DetailMovie from '../screens/DetailMovie';
import { Movie } from '../interfaces/NowPlaying';

export type RootStackParams = {
    HomeMovie: undefined,
    DetailMovie: Movie
};

const Stack = createStackNavigator<RootStackParams>();

const StackNavigation = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false, //Oculta el encabezado de las pantallas o toda la navegacion
                // cardStyle: {
                //     backgroundColor: 'white',
                // },
            }}
        >
            <Stack.Screen name="HomeMovie" component={HomeMovie} />
            <Stack.Screen name="DetailMovie" component={DetailMovie} />
        </Stack.Navigator>
    );
};

export default StackNavigation;

