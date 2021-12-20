import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Modal, Button, Alert, Pressable, TextInput, TouchableWithoutFeedback, ToastAndroid, Dimensions, Image } from 'react-native';
import { getAccount, getAllFood } from '../API/GetData';
import Icon from 'react-native-vector-icons/FontAwesome5'
import { Picker } from '@react-native-picker/picker';
import { DeleteAccount, NewFood, Register, UpdateAccount } from '../API/PostData';
import Swipeout from 'react-native-swipeout';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';


interface Food {
    _id: Object,
    Name: string,
    Cost: number,
    Category: string,
    Image: string,
}
const FoodManage = () => {
    const [foods, setFoods] = useState([])
    const [modalVisible, setModalVisible] = useState(false);
    const [name, setname] = useState('');
    const [cost, setCost] = useState('');
    const [selectedValue, setSelectedValue] = useState('BBQ');
    const [index, setIndex] = useState(-1)
    const [typeModal, setTypeModal] = useState<string | null>(null)
    const [status, setStatus] = useState('')
    const [update, setUpdate] = useState('')
    const [image, setImage] = useState('')

    useEffect(() => {
        getAllFood(setFoods)
        console.log(foods)
    }, [])

    useEffect(() => {
        if (status == 'Error') {
            ToastAndroid.show('Error', ToastAndroid.SHORT)
        }
        if (status == 'added') {
            ToastAndroid.show('Added', ToastAndroid.SHORT)
        }
        if (status == 'Update Error') {
            ToastAndroid.show('Update error', ToastAndroid.SHORT)
        }
        if (status == 'Updated') {
            ToastAndroid.show('Updated', ToastAndroid.SHORT)
        }
        if (status == 'Đăng kí thành công') {
            ToastAndroid.show('Registed', ToastAndroid.SHORT)
        }
        if (status == 'Số điện thoại đã được dùng') {
            ToastAndroid.show('Register Error', ToastAndroid.SHORT)
        }
    }, [status])

    const format = (price: number) => {
        var money = '' + price;
        return money.split('').reverse().reduce((prev, next, index) => {
            return ((index % 3) ? next : (next + '.')) + prev
        })
    }

    let Foods: Food[] = foods;

    var swipeoutBtns = [
        {
            backgroundColor: 'green',
            onPress: () => {
                // setname(Foods[index].Name)
                // setPhone(Foods[index].Cost)
                // setPass(Account[index].Password)
                // setSelectedValue(Account[index].Type)
                // setModalVisible(true)
                // setTypeModal('edit')
                // setUpdate(Account[index].PhoneNumber)
            },
            text: 'Edit',
        },
        {
            backgroundColor: 'red',
            onPress: async () => {
                // await DeleteAccount(Account[index].PhoneNumber, setStatus)
                // getAccount(setAccount);
            },
            text: 'Delete',
        },
    ]

    const openLibrary = async () => {
        const result = await launchImageLibrary({ mediaType: 'photo', quality: 1, includeBase64: true });
        if (result.didCancel) {
            console.log('cancel')
        }
        else if (result.errorCode) {
            console.log('error')
        }
        else {
            console.log(result)
            let source: any = `data:image/jpeg;base64,${result.assets[0].base64}`
            setImage(source)
        }
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.hearder}>
                <Text style={styles.title}>Foods</Text>
                <View style={styles.new}>
                    <TouchableOpacity onPress={() => {
                        setTypeModal('create')
                        setModalVisible(true)
                        // openLibrary()
                    }}>
                        <Icon name='plus-circle' size={25} color={"black"} ></Icon>
                    </TouchableOpacity>
                </View>
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
                    setImage('')

                }}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <TextInput placeholder='Name' onChangeText={setname} value={name} style={styles.textInput}></TextInput>
                            <TextInput placeholder='Cost' onChangeText={setCost} keyboardType="number-pad" value={cost} style={styles.textInput}></TextInput>
                            <TouchableOpacity onPress={() => {
                                openLibrary()
                            }}>
                                <Image source={{ uri: image != '' ? image : 'https://cdn3.iconfinder.com/data/icons/ios-edge-glyph-1/25/Add-Image-512.png' }} style={{ width: 150, height: 150 }}></Image>
                            </TouchableOpacity>

                            <Picker
                                selectedValue={selectedValue}
                                style={{ height: 50, width: 150 }}
                                onValueChange={(itemValue) =>
                                    setSelectedValue(itemValue)
                                }>
                                <Picker.Item label='BBQ' value={"BBQ"} />
                                <Picker.Item label="Hotpot" value="Hotpot" />
                                <Picker.Item label="Drink" value="Drink" />
                            </Picker>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={async () => {
                                    if (name != '' && cost != null && image != "") {
                                        setname('')
                                        setCost('')
                                        setImage('')
                                        setSelectedValue('BBQ')
                                        setTypeModal(null)
                                        if (typeModal == 'create') {
                                            await NewFood(name, parseInt(cost), selectedValue, image, setStatus)
                                            setModalVisible(!modalVisible)
                                            ToastAndroid.show('Added', ToastAndroid.SHORT)
                                        }
                                        if (typeModal == 'edit') {
                                            // await NewFood(update, name, cost, image, selectedValue, setStatus)
                                            setUpdate('')
                                            setModalVisible(!modalVisible)
                                            // ToastAndroid.show('edited', ToastAndroid.LONG)
                                        }
                                        getAllFood(setFoods)
                                    }
                                    else {
                                        ToastAndroid.show('Data is not valid', ToastAndroid.LONG)
                                    }
                                }}
                            >
                                <Text style={styles.textStyle}>Submit</Text>
                            </Pressable>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>

            <View style={{ flex: 9 }}>
                <FlatList
                    extraData={Foods}
                    horizontal={false}
                    showsHorizontalScrollIndicator={false}
                    data={Foods}
                    keyExtractor={(item: Food, index: number) => item._id.toString()}
                    renderItem={({ item, index }) => {
                        console.disableYellowBox = true;
                        return (
                            <Swipeout
                                right={swipeoutBtns}
                                autoClose
                                backgroundColor={'#F2F2F2'}
                                onOpen={(secId, rowId, direction) => {
                                    setIndex(index)
                                }}
                            // onClose={(secId, rowId, direction) => {


                            // }}
                            >
                                <View style={{
                                    marginLeft: 10, alignItems: 'center', marginTop: 15, marginRight: 10, flexDirection: 'row',
                                    backgroundColor: 'white', borderRadius: 10,
                                }}>
                                    <Image source={{ uri: `${item.Image}` }}
                                        style={{ width: 100, height: 100, borderRadius: 10 }}></Image>
                                    <View style={styles.sale}>
                                        <Text style={{ color: 'black', fontWeight: '700', fontSize: 16 }}>{item.Name}</Text>
                                        <Text>{`${format(item.Cost)} VNĐ`}</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginLeft: 50 }}>
                                    </View>
                                </View>
                            </Swipeout>
                        )
                    }}
                >
                </FlatList>
            </View>
        </View>
    )
}
export default FoodManage;
const styles = StyleSheet.create({
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
    new: {
        position: 'absolute',
        right: 20
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",

    },
    modalView: {
        margin: 20,
        backgroundColor: "#CCCCCC",
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
    textInput: {
        color: 'black',
        borderColor: 'black',
        width: 180, height: 50
    },
    sale: {
        marginLeft: 10,
        alignItems: 'baseline',
        width: 200

    }
})