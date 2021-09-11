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
    const [sale, setSale] = useState([])

    useEffect(() => {
        axios({
            method: 'GET',
            url: 'http://10.0.2.2:3000/site/getsit',
            data: null
        })
            .then((res) => { setSale(res.data), console.log('res.data', res.data) })
            .catch(err => { console.log(err) })

    }, [])

    let saleData: Sale[] = sale;
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
                <ScrollView>
                    <View style={styles.text}>
                        <Text style={{ fontSize: 25, fontWeight: '700', color: 'orange' }}>Sale</Text>
                        {/* <Text style={{ color: 'orange' }}>Xem thêm</Text> */}
                    </View>
                    {console.log(saleData)}
                    <View>
                        <FlatList horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            data={saleData}
                            keyExtractor={(item) => item._id.toString()}
                            renderItem={({ item }) => {
                                return (
                                    <View style={{ marginLeft: 10, alignItems: 'center', marginTop: 5, marginRight: 10 }}>
                                        <Image source={{ uri: `${item.Image}` }}
                                            style={{ width: 120, height: 220, borderRadius: 10 }}></Image>
                                        <View style={styles.sale}>
                                            <Text style={{ color: 'white', fontWeight: '700' }}>{item.Sale}</Text>
                                        </View>
                                        <View>
                                            <Text style={{ fontWeight: '700', marginTop: 5 }}> {item.Name}</Text>
                                            <Text style={{ color: '#666', fontStyle: 'italic', textDecorationLine: 'line-through' }}>{item.OldCost}</Text>
                                            <Text>{item.NewCost}</Text>
                                        </View>
                                    </View>
                                )
                            }}>
                        </FlatList>
                    </View>
                    <View style={styles.text}>
                        <Text style={{ fontSize: 25, fontWeight: '700', color: 'orange' }}>Mới</Text>
                        {/* <Text style={{ color: 'orange' }}>Xem thêm</Text> */}
                    </View>
                    <View>
                        <FlatList horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            data={newDish}
                            renderItem={({ item }) => {
                                return (
                                    <View style={{ marginLeft: 10, alignItems: 'center', marginTop: 5, marginRight: 10 }}>
                                        <Image source={{ uri: `${item.image}` }}
                                            style={{ width: 120, height: 220, borderRadius: 10 }}></Image>
                                        <View>
                                            <Text style={{ fontWeight: '700', marginTop: 5 }}> {item.title}</Text>
                                            <Text>{item.Cost}</Text>
                                        </View>
                                    </View>
                                )
                            }}>
                        </FlatList>
                    </View>
                </ScrollView>
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

