import React, { useEffect, useState } from 'react'
import { FlatList, Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import category from '../API/category';
import Icon from 'react-native-vector-icons/FontAwesome5';
import * as axiosGetData from '../API/GetData'
import axios from 'axios'
import SearchComponent from '../screens/Search'
import { DrawerActions } from '@react-navigation/native';
import { AddCart, GetData } from '../Redux/actions'
import { connect } from 'react-redux';
import * as AsynStore from '../components/AsyncStore'

interface Food {
    _id: Object,
    Name: String,
    Cost: number,
    Category: String,
    Image: String,
}
const Home = ({ navigation, AddCart, GetData }: any) => {
    const [food, setFood] = useState([])
    const [select, setSelect] = useState(1)
    useEffect(() => {
        let a = AsynStore.getData()
        console.log('test', a)
        GetData()
        AsynStore.CheckLogin()
    }, [])

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

    let Food: Food[] = food;
    const format = (price: number) => {
        var money = '' + price;
        return money.split('').reverse().reduce((prev, next, index) => {
            return ((index % 3) ? next : (next + '.')) + prev
        })
    }
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
                        <TouchableOpacity onPress={() => { navigation.dispatch(DrawerActions.openDrawer()); }}>
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
                <View style={{ flex: 1 }} >
                    <View style={{ flex: 1 }}>
                        <FlatList horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            data={category}
                            renderItem={({ item }) => {
                                return (
                                    <TouchableOpacity onPress={() => { setSelect(item.key) }}>
                                        <View style={{
                                            marginLeft: 12, alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 10,
                                            marginTop: 20, marginRight: 10, flexDirection: 'row', backgroundColor: item.key == select ? '#00CCCC' : 'orange',
                                            borderRadius: 30,
                                        }}>
                                            <Image source={{ uri: item.image }} style={{ width: 40, height: 40, borderRadius: 20, marginLeft: 10 }}></Image>
                                            <Text style={{ fontWeight: '700', marginLeft: 5, marginRight: 10 }}> {item.title}</Text>
                                        </View>
                                    </TouchableOpacity>
                                )
                            }}>
                        </FlatList>
                    </View>
                    <View style={{ flex: 7 }}>
                        <FlatList horizontal={false}
                            showsHorizontalScrollIndicator={false}
                            data={Food}
                            numColumns={2}
                            keyExtractor={(item) => item._id.toString()}
                            renderItem={({ item }) => {
                                return (
                                    <View style={{
                                        marginHorizontal: 10, alignItems: 'center', marginTop: 15, flexDirection: 'column',
                                        backgroundColor: 'white', borderRadius: 10, flex: 1,
                                    }}>
                                        <Image source={{ uri: `${item.Image}` }}
                                            style={{ width: 150, height: 150, borderRadius: 10, marginTop: 10 }}></Image>
                                        <View style={styles.sale}>
                                            <Text style={{ color: 'black', fontWeight: '700', fontSize: 16, }}>{item.Name}</Text>
                                            <Text>{`${format(item.Cost)} VNĐ`}</Text>
                                        </View>
                                        <View style={{ marginBottom: 10 }}>
                                            <TouchableOpacity onPress={() => AddCart(item)}>
                                                <Icon name='cart-plus' size={25} color='orange'></Icon>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                )
                            }}>
                        </FlatList>
                    </View>
                </View>
            </View>

        </View>
    )
}
function mapDispatchToProps(dispatch: any) {
    return {
        AddCart: (item: any) => dispatch(AddCart(item)),
        GetData: () => dispatch(GetData())

    }
}
export default connect(mapDispatchToProps, { AddCart, GetData })(Home)

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
        alignItems: 'center',
        width: 150

    }
})

