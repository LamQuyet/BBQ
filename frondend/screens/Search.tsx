import React, { useEffect, useState } from 'react'
import { FlatList, Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Search from '../components/Searchbar';
import category from '../data/category';
import Icon from 'react-native-vector-icons/FontAwesome5';

const SearchComponent = ({ navigation }: any) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => { navigation.goBack() }}>
                <View style={{ marginLeft: 10 }}>
                    <Icon name='arrow-left' size={26} color='orange'></Icon>
                </View>
            </TouchableOpacity>
            <Search></Search>

        </View>
    )
}
export default SearchComponent
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15
    }
})