import React, { useEffect, useState } from 'react'
import { FlatList, Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Search from '../components/Searchbar';
import category from '../data/category';
import Icon from 'react-native-vector-icons/FontAwesome5';
import * as axiosGetData from '../data/axiosGetData'
import axios from 'axios'
import SearchComponent from '../screens/Search'

interface Food {
    _id: Object,
    Name: String,
    Cost: String,
    Category: String,
    Image: String,
}
const Home = ({ navigation }: any) => {
    const [count, setCount] = useState(0)
    const [food, setFood] = useState([])
    const [select, setSelect] = useState(1)

    useEffect(() => {
        if (select == 1) {
            axiosGetData.getHotpot(setFood)
        }
        if (select == 2) {
            axiosGetData.getBBQ(setFood)
        }
        if (select == 3) {
            axiosGetData.getDrink(setFood)
        }

    }, [select])

    // useEffect(() => {
    //     axios({
    //         method: 'GET',
    //         url: 'http://10.0.2.2:3000/food/getHotpot',
    //         data: null
    //     })
    //         .then((res) => { setFood(res.data), console.log('res.data', res.data) })
    //         .catch(err => { console.log(err) })

    // }, [])

    let Food: Food[] = food;
    return (
        <View style={styles.container}>
            <View style={styles.Top}>
                <ImageBackground source={require('../images/banner/banner8.jpg')}
                    style={{ width: '100%', height: '100%' }} imageStyle={{ borderBottomRightRadius: 70 }}>
                    <View style={{ position: 'absolute', right: 15, top: 10 }}>
                        <TouchableOpacity onPress={() => { navigation.navigate("Search") }}>
                            <Icon name='search' size={27} color='orange'></Icon>
                        </TouchableOpacity>
                    </View>
                    <View style={{ position: 'absolute', left: 15, top: 10 }}>
                        <TouchableOpacity>
                            <Icon name='bars' size={27} color='orange'></Icon>
                        </TouchableOpacity>
                    </View>
                    <View style={{ paddingTop: 100, paddingLeft: 30 }}>
                        <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'white' }}>Hi Quyet</Text>
                        <Text style={{ fontSize: 15, fontWeight: 'normal', color: 'white' }}>where would you like to go today?</Text>
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
                                <TouchableOpacity onPress={() => { setSelect(item.key) }}>
                                    <View style={{
                                        marginLeft: 12, alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 10,
                                        marginTop: 20, marginRight: 10, flexDirection: 'row', backgroundColor: item.key == select ? '#00CCCC' : 'orange', borderRadius: 30
                                    }}>
                                        <Image source={{ uri: item.image }} style={{ width: 40, height: 40, borderRadius: 20, marginLeft: 10 }}></Image>
                                        <Text style={{ fontWeight: '700', marginLeft: 5, marginRight: 10 }}> {item.title}</Text>
                                    </View>
                                </TouchableOpacity>
                            )
                        }}>
                    </FlatList>
                    <View>
                        {/* <ScrollView> */}
                        <FlatList horizontal={false}
                            showsHorizontalScrollIndicator={false}
                            data={Food}
                            keyExtractor={(item) => item._id.toString()}
                            renderItem={({ item }) => {
                                return (
                                    <View style={{
                                        marginLeft: 10, alignItems: 'center', marginTop: 15, marginRight: 10, flexDirection: 'row',
                                        backgroundColor: 'white', borderRadius: 10
                                    }}>
                                        <Image source={{ uri: `${item.Image}` }}
                                            style={{ width: 70, height: 70, borderRadius: 10 }}></Image>
                                        <View style={styles.sale}>
                                            <Text style={{ color: 'black', fontWeight: '700', fontSize: 16 }}>{item.Name}</Text>
                                            <Text>{item.Cost}</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', marginLeft: 50 }}>
                                            <View>
                                                <TouchableOpacity onPress={() => {
                                                    if (count > 0) {
                                                        setCount(count - 1)
                                                    }
                                                }}>
                                                    <Icon name='minus' size={15} color='black'></Icon>
                                                </TouchableOpacity>
                                            </View>
                                            <View style={{ marginLeft: 13 }}>
                                                <Text>{count}</Text>
                                            </View>
                                            <View style={{ marginLeft: 13 }}>
                                                <TouchableOpacity onPress={() => { setCount(count + 1) }}>
                                                    <Icon name='plus' size={15} color='black'></Icon>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                        <View style={{ marginLeft: 20 }}>
                                            <Icon name='cart-plus' size={30} color='orange'></Icon>
                                        </View>
                                    </View>
                                )
                            }}>
                        </FlatList>
                        {/* </ScrollView> */}
                    </View>
                </View>
            </View>

        </View>
    )
}
export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F2F2'
    },
    Top: {
        flex: 3,
    },
    Body: {
        flex: 7,

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
        marginLeft: 10,
        alignItems: 'baseline',
        width: 100

    }
})

