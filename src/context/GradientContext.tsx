import React, { createContext, useState } from 'react';

interface ImageColors {
    primary: string,
    secondary: string,
}

interface ContextProps {
    colores: ImageColors,
    prevColores: ImageColors,
    setMainColors: (colors: ImageColors) => void;
    setMainPrevColors: (colors: ImageColors) => void;
}

export const GradientContext = createContext({} as ContextProps); //Todo: Define tipo

export const GradientProvider = ({ children }: any) => {

    const [colores, setColores] = useState<ImageColors>({
        primary: 'transparent',
        secondary: 'transparent',
    });

    const [prevColores, setPrevColores] = useState<ImageColors>({
        primary: 'transparent',
        secondary: 'transparent',
    });

    const setMainColors = (colors: ImageColors) => {
        setColores(colors);
    };

    const setMainPrevColors = (colors: ImageColors) => {
        setPrevColores(colors);
    };

    return (
        <GradientContext.Provider value={{ colores, prevColores, setMainColors, setMainPrevColors }} >
            {children}
        </GradientContext.Provider>
    );
};
