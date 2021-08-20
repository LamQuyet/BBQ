import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import Search from '../components/Searchbar';

const Home = () => {
    return (
        <View style={styles.container}>
            <View style={styles.Top}>
                <ImageBackground source={require('../images/banner.jpg')}
                    style={{ width: '100%', height: '100%' }}>
                    <View style={styles.searchbar}>
                        <Search></Search>
                    </View>
                </ImageBackground>
            </View>
            <View style={styles.Body}>
                <Text>Body</Text>
            </View>
            <View style={styles.Footer}>
                <Text>Footer</Text>
            </View>
        </View>
    )
}
export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    Top: {
        flex: 3,
        backgroundColor: 'orange'
    },
    Body: {
        flex: 9,
    },
    Footer: {
        flex: 1,
        backgroundColor: 'orange'
    },
    searchbar: {
        alignItems: 'center'
    }
})

