import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { colors, styles } from '../theme/StyleGlobal';

const Loading = () => {
    return (
        <View style={styles.loading}>
            <ActivityIndicator color={colors.primary} size={30} />
            <Text style={{ color: 'black', marginTop: 10 }}>Cargando...</Text>
        </View>
    );
};

export default Loading;

