import React, { useEffect, useState } from 'react'
import { FlatList, Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Account = () => {
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <ImageBackground source={require('../images/background1.jpg')}
                    style={{ width: '100%', height: '100%' }}>
                    <Image source={require('../images/avatar.jpg')}
                        style={styles.avatar}
                    ></Image>
                </ImageBackground>
                <View style={styles.information}>
                    <Text style={{ color: 'white', fontSize: 20 }}>Baby supper cute</Text>
                    <Text style={{ color: 'white' }}>babycute@gmail.com</Text>
                </View>
            </View>

            <View style={styles.body}></View>
        </View>
    )
}
export default Account;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    top: {
        flex: 3,
        backgroundColor: 'orange'
    },
    body: {
        flex: 7,
        backgroundColor: 'white'
    },
    avatar: {
        width: 85,
        height: 85,
        borderRadius: 70,
        position: 'absolute',
        bottom: 10,
        left: 10
    },
    information: {
        position: 'absolute',
        bottom: 30,
        left: 110
    }
})