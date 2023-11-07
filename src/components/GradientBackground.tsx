import React, { useContext, useEffect } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { GradientContext } from '../context/GradientContext';
import { useFade } from '../hooks/useFade';

interface Props {
    children: JSX.Element | JSX.Element[]
}

export const GradientBackground = ({ children }: Props) => {


    const { colores, prevColores, setMainPrevColors } = useContext(GradientContext);
    const { opacity, fadeIn, fadeOut } = useFade();

    useEffect(() => {
        fadeIn(() => {
            setMainPrevColors(colores);
            fadeOut();
        });
    }, [colores]);

    return (
        <View style={{ flex: 1 }}>
            <LinearGradient
                colors={[prevColores.primary, prevColores.secondary, 'white']}
                style={{ ...StyleSheet.absoluteFillObject }}
                start={{ x: 0.1, y: 0.1 }}
                end={{ x: 1, y: 0.9 }}
            />
            <Animated.View
                style={{
                    ...StyleSheet.absoluteFillObject,
                    opacity,
                }}
            >
                <LinearGradient
                    colors={[colores.primary, colores.secondary, 'white']}
                    style={{ ...StyleSheet.absoluteFillObject }}
                    start={{ x: 0.1, y: 0.1 }}
                    end={{ x: 1, y: 0.9 }}
                />
            </Animated.View>
            {children}
        </View>
    );
};
