import React, { useEffect, useState } from 'react'
import { Dimensions, FlatList, Image, ImageBackground, ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Search from '../components/Searchbar';
import category from '../API/category';
import newDish from '../API/New';
import axios from 'axios'
import Icon from 'react-native-vector-icons/FontAwesome5';
import Swiper from 'react-native-swiper'
import { AddCart } from '../Redux/actions'
import { connect } from 'react-redux';

const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 210;

const BannerImages = [
    "https://canhcoupon.com/images/khuyen-mai/2017/07/kingbbq-buffet-adayroi-com-banner.jpg",
    "https://canhcoupon.com/images/khuyen-mai/2017/08/buffet-nuong-lau-season-bbq-mien-phi-pepsi-khong-gioi-han-adayroi-banner.jpg",
    "https://luxuryfoods.vn/wp-content/uploads/2019/11/BANNER.jpg",
    "https://i.pinimg.com/originals/05/8e/71/058e7126b52f8e13dbfc0ef2c3c3cef9.jpg",
    "https://www.tiendauroi.com/wp-content/uploads/2020/02/header.jpg",
    "https://useful.vn/wp-content/uploads/1560309883363_3371520.jpg"

];

interface Sale {
    _id: Object,
    Name: String,
    Image: String,
    Sale: String,
    OldCost: String,
    Cost: number
}

interface Food {
    _id: Object,
    Name: String,
    Cost: String,
    Category: String,
    Image: String,
}

const format = (price: number) => {
    var money = '' + price;
    return money.split('').reverse().reduce((prev, next, index) => {
        return ((index % 3) ? next : (next + '.')) + prev
    })
}

const Sale = ({ AddCart }: any) => {
    const [sale, setSale] = useState([]);
    const [newFood, setNewFood] = useState([])

    useEffect(() => {
        axios({
            method: 'GET',
            url: 'http://10.0.2.2:3000/site/getsit',
            data: null
        })
            .then((res) => { setSale(res.data), console.log('res.data', res.data) })
            .catch(err => { console.log(err) })

    }, [])

    // useEffect(() => {
    //     axios({
    //         method: 'GET',
    //         url: 'http://10.0.2.2:3000/food/getAllFood',
    //         data: null
    //     })
    //         .then((res) => { setSale(res.data) })
    //         .catch(err => { console.log(err) })

    // }, [])

    let saleData: Sale[] = sale;
    let newfood: Food[] = newFood;

    newFood.reverse();

    return (
        <View style={styles.container}>
            <View style={styles.Top}>
                <Swiper
                    autoplay
                    loop
                >
                    {
                        BannerImages.map((item, index) => (
                            <Image
                                key={index}
                                source={{ uri: item }}
                                style={{ width: BannerWidth, height: BannerHeight }}
                                resizeMode="stretch"
                            >
                            </Image>
                        ))
                    }
                </Swiper>
            </View>
            <View style={styles.Body}>
                <ScrollView>
                    <View style={styles.text}>
                        <Text style={{ fontSize: 25, fontWeight: '700', color: 'orange' }}>Sale</Text>
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
                                        <View style={{ alignItems: 'center' }}>
                                            <Text style={{ fontWeight: '700', marginTop: 5 }}> {item.Name}</Text>
                                            <Text style={{ color: '#666', fontStyle: 'italic', textDecorationLine: 'line-through' }}>{item.OldCost}</Text>
                                            <Text>{`${format(item.Cost)} VNĐ`}</Text>
                                            <TouchableOpacity onPress={() => AddCart(item)}>
                                                <Icon name='cart-plus' size={24} color='orange'></Icon>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                )
                            }}>
                        </FlatList>
                    </View>
                    <View style={styles.text}>
                        <Text style={{ fontSize: 25, fontWeight: '700', color: 'orange' }}>Mới</Text>
                    </View>
                    <View>
                        <FlatList horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            data={newDish}
                            renderItem={({ item }) => {
                                { console.log(newfood) }
                                return (
                                    <View style={{ marginLeft: 10, alignItems: 'center', marginTop: 5, marginRight: 10 }}>
                                        <Image source={{ uri: `${item.image}` }}
                                            style={{ width: 120, height: 220, borderRadius: 10 }}></Image>
                                        <View style={{ alignItems: 'center' }}>
                                            <Text style={{ fontWeight: '700', marginTop: 5 }}> {item.title}</Text>
                                            <Text>{item.Cost}</Text>
                                            <TouchableOpacity onPress={() => AddCart(item)}>
                                                <Icon name='cart-plus' size={24} color='orange'></Icon>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                )
                            }}>
                        </FlatList>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}
function mapDispatchToProps(dispatch: any) {
    return {
        AddCart: (item: any) => dispatch(AddCart(item))

    }
}
export default connect(mapDispatchToProps, { AddCart })(Sale)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F2F2'
    },
    Top: {
        flex: 3.3,
        width: BannerWidth,
        height: BannerHeight
    },
    Body: {
        flex: 6.7,

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

