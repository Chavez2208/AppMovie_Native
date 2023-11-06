import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    marginGlobal: {
        marginHorizontal: 20,
    },
    loading: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageContainer: {
        width: 250,
        height: 420,
    },
    imageCard: {
        flex: 1,
        borderRadius: 16,
    },
    cardShadow: {
        flex: 1,
        borderRadius: 16,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.9,
        shadowRadius: 6.27,
        elevation: 10,
    },
    texto: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
    },
});

export const colors = {
    primary: '#0e7490',
};
