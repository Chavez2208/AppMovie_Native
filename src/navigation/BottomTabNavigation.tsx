import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '../theme/StyleGlobal';
import StackNavigation from './StackNavigation';
import StackNavigationSerie from './StackNavigationSerie';

const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigation = () => {
    return (
        <Tab.Navigator
            sceneAnimationEnabled={true}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused }) => {
                    let iconName: string = '';
                    switch (route.name) {
                        case 'StackNavigation':
                            iconName = "videocam-outline";
                            break;
                        case 'StackNavigationSerie':
                            iconName = "tv-outline";
                            break;
                    }
                    return <Icon name={iconName} size={20} color={focused ? colors.primary : colors.primary} />
                },
                headerShown: true,
                tabBarActiveTintColor: colors.primary,
                tabBarStyle: {
                    borderTopColor: colors.primary,
                    borderTopWidth: 0,
                    elevation: 0,
                },
            })}>
            <Tab.Screen name="StackNavigation" component={StackNavigation} options={{ tabBarLabel: 'Peliculas Cine' }} />
            <Tab.Screen name="StackNavigationSerie" component={StackNavigationSerie} options={{ tabBarLabel: 'Series TV' }} />
        </Tab.Navigator>
    );
};

export default BottomTabNavigation;

