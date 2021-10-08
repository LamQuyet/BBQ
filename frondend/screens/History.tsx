import React, { useCallback, useEffect, useState } from 'react'
import { FlatList, Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View, TextInput, Dimensions } from 'react-native'

const History = () => {
    return (
        <View style={styles.container}>
            <Text>History</Text>
        </View>
    )
}
export default History

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})