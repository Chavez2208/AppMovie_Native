import ImageColors from 'react-native-image-colors';

export const getImageColores = async (uri: string) => {

    const colors = await ImageColors.getColors(uri, {});

    let primary;
    let secondary;


    if (colors.platform === 'android') {
        primary = colors.dominant;
        secondary = colors.average;
    }

    return [primary, secondary];
};
