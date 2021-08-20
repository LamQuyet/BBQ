import React from "react";
import { View, Image, StyleSheet, TextInput, } from 'react-native'

const Search = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../images/search.png')}
                style={styles.icon}></Image>
            <TextInput style={styles.input}
                placeholder='Search'></TextInput>
        </View>
    )
}
export default Search;

const styles = StyleSheet.create({
    icon: {
        width: 17,
        height: 17,
        marginLeft: 10
    },
    input: {
        marginLeft: 5
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#E8E8E8',
        borderRadius: 30,
        width: '80%',
        height: 40,
        marginTop: 10
    }
})