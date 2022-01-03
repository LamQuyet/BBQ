import React, { useCallback, useEffect, useState } from 'react'
import { FlatList, Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View, TextInput, Dimensions, Button, TouchableWithoutFeedback, Modal, Picker, Pressable, ToastAndroid } from 'react-native'
import { getBill } from '../API/GetData'

interface Bill {
    _id: Object,
    Account: string,
    Name: string,
    Addres: string,
    PhoneNumber: string,
    Foods: [{
        _id: Object,
        quantity: number,
        name: string,
        image: string,
        price: number
    }],
    TotalPrice: number,
    Status: Boolean,
    Time: Date
}
const Order = () => {
    const [data, setData] = useState([])
    const [modalVisible, setModalVisible] = useState(false);
    const [index, setIndex] = useState(0)
    const [descreption, setDescription] = useState<any>(null)


    useEffect(() => {
        getBill(setData)
    }, [])

    let bills: Bill[] = data;

    // useEffect(() => {
    //     if (bills) {
    //         setDescription(bills[index].Foods)
    //     }
    // }, [bills])

    // let food: [] = bills.Foods
    console.log("DATA", bills)
    const format = (price: number) => {
        var money = '' + price;
        return money.split('').reverse().reduce((prev, next, index) => {
            return ((index % 3) ? next : (next + '.')) + prev
        })
    }
    return (
        <View style={styles.container}>
            <View style={styles.hearder}>
                <Text style={styles.title}>Bills Manage</Text>
            </View>
            <View style={{ flex: 9 }}>
                <FlatList
                    horizontal={false}
                    showsHorizontalScrollIndicator={false}
                    data={bills}
                    keyExtractor={(item) => item._id.toString()}
                    renderItem={({ item, index }) => {
                        return (
                            <View >
                                <TouchableOpacity onPress={() => { setDescription(bills[index].Foods), setModalVisible(!modalVisible) }}>
                                    <View style={styles.flatlist}>
                                        <View style={{}}>
                                            <Text>{item.Name}</Text>
                                            <Text>{item.Addres}</Text>
                                            <Text>{item.PhoneNumber}</Text>
                                            <Text>{`${format(item.TotalPrice)} VNĐ`}</Text>
                                            <Text>{item.Time}</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        )
                    }}>
                </FlatList>
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible)
                }}
            >
                <TouchableWithoutFeedback onPress={() => {
                    setModalVisible(!modalVisible)
                    // setDescription(null)

                }}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <View>
                                <FlatList
                                    style={{ flexGrow: 0 }}
                                    horizontal={false}
                                    showsHorizontalScrollIndicator={false}
                                    data={descreption}
                                    keyExtractor={(item, index) => index.toString()}
                                    renderItem={({ item, index }) => {
                                        return (
                                            <View >
                                                <View style={styles.flatlist}>
                                                    <View style={styles.text}>
                                                        <Image source={{ uri: `${item.image}` }} style={{ width: 65, height: 65 }}></Image>
                                                        <View style={{ marginLeft: 10 }}>
                                                            <Text>{item.name}</Text>
                                                            <Text>Count: {item.quantity}</Text>
                                                            <Text>Price: {`${format(item.price)} VNĐ`}</Text>
                                                        </View>
                                                    </View>
                                                </View>
                                            </View>
                                        )
                                    }}>
                                </FlatList>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                    <TouchableOpacity>
                                        <View style={{ backgroundColor: 'orange', borderRadius: 10, width: 80, height: 50, alignItems: 'center', justifyContent: 'center' }}>
                                            <Text>Accept</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <View style={{ backgroundColor: '#E8E8E8', borderRadius: 10, width: 80, height: 50, alignItems: 'center', justifyContent: 'center' }}>
                                            <Text>Reject</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        </View>
    )
}
export default Order

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
        marginLeft: 10,
        flexDirection: 'row'
    },
    ps: {
        marginRight: 10
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    title: {
        fontSize: 30,
        fontWeight: '700',
    },
    hearder: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row'
    },
})