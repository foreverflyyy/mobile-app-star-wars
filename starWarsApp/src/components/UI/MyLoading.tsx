import React from 'react';

import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';

const MyLoading = () => {
    return (
        <View style={styles.loading}>
            <ActivityIndicator size={"large"}/>
        </View>
    );
};

const styles = StyleSheet.create({
    loading: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: 10
    }
})

export default MyLoading;
