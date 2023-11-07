import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeSerie from '../screens/HomeSerie';
import DetailSerie from '../screens/DetailSerie';
import { Serie } from '../interfaces/NowSeries';


export type RootStackParams = {
    serie: undefined,
    DetailSerie: Serie
};

const Stack = createStackNavigator();

const StackNavigationSerie = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false, //Oculta el encabezado de las pantallas o toda la navegacion
                // cardStyle: {
                //     backgroundColor: 'white',
                // },
            }}
        >
            <Stack.Screen name="HomeSerie" component={HomeSerie} />
            <Stack.Screen name="DetailSerie" component={DetailSerie} />
        </Stack.Navigator>
    );
};

export default StackNavigationSerie;
