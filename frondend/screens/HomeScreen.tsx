import React, { useEffect, useState } from 'react'
import { FlatList, Image, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import Search from '../components/Searchbar';
import category from '../data/category';
import newDish from '../data/New';
import axios from 'axios'

interface Sale {
    _id: Object,
    Name: String,
    Image: String,
    Sale: String,
    OldCost: String,
    NewCost: String
}
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
                <View >
                    <FlatList horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data={category}
                        renderItem={({ item }) => {
                            return (
                                <View style={{
                                    marginLeft: 12, alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 10,
                                    marginTop: 20, marginRight: 10, flexDirection: 'row', backgroundColor: 'orange', borderRadius: 30
                                }}>
                                    <Image source={{ uri: item.image }} style={{ width: 40, height: 40, borderRadius: 20, marginLeft: 10 }}></Image>
                                    <Text style={{ fontWeight: '700', marginTop: 5, marginLeft: 5, marginRight: 10 }}> {item.title}</Text>
                                </View>
                            )
                        }}>
                    </FlatList>
                </View>
            </View>
            {/* <View style={styles.Footer}>
                <View >
                    <Text style={{ fontSize: 18, fontWeight: '700', marginLeft: 10, fontFamily: '' }}>Lâm Quyết BBQ</Text>
                    <Text style={{ fontSize: 12, fontWeight: '700', marginLeft: 10 }}>98 Đường Mỹ Đình Nam Từ Liêm Hà Nội</Text>
                </View>
                <View>
                    <Text style={{ fontSize: 12, fontWeight: '700', marginRight: 10 }}>Hotline: 0376105680</Text>
                    <Text style={{ fontSize: 12, fontWeight: '700', marginRight: 10 }}>Mr.Quyet</Text>
                </View>
            </View> */}
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
        flex: .7,
        backgroundColor: 'orange',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    searchbar: {
        alignItems: 'center'
    },
    text: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 5,
        marginHorizontal: 10
    },
    sale: {
        width: 40,
        height: 40,
        marginTop: 5,
        marginLeft: 5,
        backgroundColor: 'red',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        left: 5,
        top: 5
    }
})

