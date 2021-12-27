import React, { useCallback, useEffect, useState } from 'react'
import { FlatList, Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View, TextInput, Dimensions } from 'react-native'
import { getBill, getHistory } from '../API/GetData'

interface Bill {
    _id: Object,
    Account: String,
    Name: String,
    Addres: String,
    PhoneNumber: String,
    Foods: Object,
    TotalPrice: number,
    Status: Boolean,
    Time: Date
}

const History = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        getHistory(setData)
    })

    let bills: Bill[] = data;

    const format = (price: number) => {
        var money = '' + price;
        return money.split('').reverse().reduce((prev, next, index) => {
            return ((index % 3) ? next : (next + '.')) + prev
        })
    }
    return (
        <View style={styles.container}>
            <FlatList horizontal={false}
                showsHorizontalScrollIndicator={false}
                data={bills}
                keyExtractor={(item) => item._id.toString()}
                renderItem={({ item, index }) => {
                    return (
                        <View >
                            <View style={styles.flatlist}>
                                <View style={styles.text}>
                                    <Text>{item.Name}</Text>
                                    <Text>{item.Addres}</Text>
                                    <Text>{item.PhoneNumber}</Text>
                                    <Text>{`${format(item.TotalPrice)} VNĐ`}</Text>
                                    <Text>{item.Time}</Text>
                                </View>
                                <Text style={styles.ps}>Ordered</Text>
                            </View>
                        </View>
                    )
                }}>
            </FlatList>
        </View>
    )
}
export default History

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    flatlist: {
        margin: 10,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    text: {
        marginLeft: 10
    },
    ps: {
        marginRight: 10
    }
})