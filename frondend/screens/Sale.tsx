import React, { useEffect, useState } from 'react'
import { Dimensions, FlatList, Image, ImageBackground, ScrollView, StyleSheet, Text, View, Animated } from 'react-native'
import Search from '../components/Searchbar';
import category from '../data/category';
import newDish from '../data/New';
import axios from 'axios'
import Icon from 'react-native-vector-icons/FontAwesome5';
import Carousel from 'react-native-banner-carousel';

const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 210;

const BannerImages = [
    "https://canhcoupon.com/images/khuyen-mai/2017/07/kingbbq-buffet-adayroi-com-banner.jpg",
    "https://canhcoupon.com/images/khuyen-mai/2017/08/buffet-nuong-lau-season-bbq-mien-phi-pepsi-khong-gioi-han-adayroi-banner.jpg",
    "https://luxuryfoods.vn/wp-content/uploads/2019/11/BANNER.jpg",
    "https://i.pinimg.com/originals/05/8e/71/058e7126b52f8e13dbfc0ef2c3c3cef9.jpg",
    "https://www.tiendauroi.com/wp-content/uploads/2020/02/header.jpg",
    "https://useful.vn/wp-content/uploads/1560309883363_3371520.jpg",

];

interface Sale {
    _id: Object,
    Name: String,
    Image: String,
    Sale: String,
    OldCost: String,
    NewCost: String
}
interface PageIndicatorConfig {
    pageNum: number;
    childrenNum: number;
    loop: boolean;
    scrollValue: Animated.Value;
}


const Sale = () => {
    const [sale, setSale] = useState([])
    const [active, setActive] = useState(0)

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

    let ActiveChange = ({ nativeEvent }: any) => {
        const slide = Math.ceil(
            nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width

        );
        if (slide !== active) {
            setActive(slide);
        }

    }

    return (
        <View style={styles.container}>
            <View style={styles.Top}>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    onScroll={ActiveChange}
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
                </ScrollView>
                <View style={{ position: 'absolute', bottom: 13, alignSelf: 'center', flexDirection: 'row' }}>
                    {
                        BannerImages.map((i, k) => (
                            <Text
                                key={k}
                                style={{ marginLeft: 10, color: k == active ? 'white' : '#888' }}
                            >●
                            </Text>
                        ))
                    }
                </View>
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
                                            <Text>{item.NewCost}</Text>
                                            <Icon name='cart-plus' size={24} color='orange'></Icon>
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
                                return (
                                    <View style={{ marginLeft: 10, alignItems: 'center', marginTop: 5, marginRight: 10 }}>
                                        <Image source={{ uri: `${item.image}` }}
                                            style={{ width: 120, height: 220, borderRadius: 10 }}></Image>
                                        <View style={{ alignItems: 'center' }}>
                                            <Text style={{ fontWeight: '700', marginTop: 5 }}> {item.title}</Text>
                                            <Text>{item.Cost}</Text>
                                            <Icon name='cart-plus' size={24} color='orange'></Icon>
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
export default Sale;

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

