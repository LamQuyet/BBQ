import React, { useEffect } from "react";
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity, Touchable, Dimensions, Button, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from "react-redux";
import { IncreaseQuantity, DecreaseQuantity, DeleteCart } from '../Redux/actions';

const Cart = ({ items, IncreaseQuantity, DecreaseQuantity, DeleteCart }: any) => {

    let TotalCart = 0;

    items.Carts.forEach((item: any) => {
        TotalCart += item.price * item.quantity
    });
    useEffect(() => {
        console.log(items.Carts)
    })

    const format = (price: number) => {
        var money = '' + price;
        return money.split('').reverse().reduce((prev, next, index) => {
            return ((index % 3) ? next : (next + '.')) + prev
        })
    }
    return (
        <View style={styles.contrainer}>
            <FlatList horizontal={false}
                showsHorizontalScrollIndicator={false}
                data={items.Carts}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    return (
                        <View style={{
                            marginLeft: 10, alignItems: 'center', marginTop: 15, marginRight: 10, flexDirection: 'row',
                            backgroundColor: 'white', borderRadius: 10
                        }}>
                            <Image source={{ uri: `${item.image}` }}
                                style={{ width: 70, height: 70, borderRadius: 10 }}></Image>
                            <View style={styles.sale}>
                                <Text style={{ color: 'black', fontWeight: '700', fontSize: 16 }}>{item.name}</Text>
                                <Text>{`${format(item.price)} VNĐ`}</Text>
                            </View>
                            <View style={{ marginLeft: 100, flexDirection: 'row', alignItems: 'center' }}>
                                <View style={{ marginRight: 5 }}>
                                    <TouchableOpacity onPress={() => { DecreaseQuantity(item) }}>
                                        <Icon name='minus' size={15}></Icon>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ marginRight: 5 }}>
                                    <Text>{item.quantity}</Text>
                                </View>
                                <TouchableOpacity onPress={() => { IncreaseQuantity(item) }}>
                                    <Icon name='plus' size={15}></Icon>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )
                }}>
            </FlatList>
            <View style={{ backgroundColor: 'white', height: 60, justifyContent: 'center' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={{ fontSize: 20, fontWeight: '700', marginLeft: 10, }}>Total:</Text>
                    <View style={{ marginRight: 10, justifyContent: 'center' }}>
                        <Text style={{ fontSize: 15 }}>{`${format(TotalCart)} VNĐ`}</Text>
                    </View>
                    <View style={{ justifyContent: 'center', }}>
                        <TouchableHighlight
                            style={{
                                backgroundColor: 'orange', width: 110, height: 40, alignItems: 'center',
                                justifyContent: 'center', marginRight: 10, borderRadius: 70
                            }}
                            onPress={() => { }}
                            underlayColor='#fff'>
                            <Text style={{ fontSize: 20, fontWeight: '700', color: 'white' }}>Checkout</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
        </View>
    )
}
const mapStateToProps = (state: any) => {
    // console.log(state)
    return {
        items: state._todoProduct
    }
}

export default connect(mapStateToProps, { IncreaseQuantity, DecreaseQuantity, DeleteCart })(Cart)

const styles = StyleSheet.create({
    contrainer: {
        flex: 1
    },
    baner: {
        flex: 2,
        backgroundColor: 'red'
    },
    body: {
        flex: 7
    },
    footer: {
        flex: .7,
        backgroundColor: 'orange',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    sale: {
        marginLeft: 10,
        alignItems: 'baseline',
        width: 100

    }
})