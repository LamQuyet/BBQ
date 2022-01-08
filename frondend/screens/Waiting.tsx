import React, { useCallback, useEffect, useState } from 'react'
import { FlatList, Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View, TextInput, Dimensions, TouchableWithoutFeedback, Modal } from 'react-native'
import { getBill } from '../API/GetData'

interface Bill {
    _id: Object,
    Account: String,
    Name: String,
    Addres: String,
    PhoneNumber: String,
    Foods: Object,
    TotalPrice: number,
    Status: String,
    Time: Date
}
const Waiting = () => {
    const [data, setData] = useState([])
    const [modalVisible, setModalVisible] = useState(false);
    const [descreption, setDescription] = useState<any>(null)

    useEffect(() => {
        getBill(setData)
    }, [])

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
                            <TouchableOpacity onPress={() => { setDescription(bills[index].Foods), setModalVisible(!modalVisible) }}>
                                <View style={styles.flatlist}>
                                    <View style={{}}>
                                        <Text>{item.Name}</Text>
                                        <Text>{item.Addres}</Text>
                                        <Text>{item.PhoneNumber}</Text>
                                        <Text>{`${format(item.TotalPrice)} VNĐ`}</Text>
                                        <Text>{new Date(`${item.Time}`).toISOString().slice(0, 16).replace("T", ' ')}</Text>
                                    </View>
                                    <Text style={{ marginRight: 10, color: item.Status == 'Processing' ? '#00CC99' : 'orange' }}>{item.Status}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    )
                }}>
            </FlatList>
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
                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        </View>
    )
}
export default Waiting

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
        marginRight: 10,
        color: 'orange'
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
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
})