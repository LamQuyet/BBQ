import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Modal, Button, Alert, Pressable, TextInput, TouchableWithoutFeedback, ToastAndroid } from 'react-native';
import { getAccount } from '../API/GetData';
import Icon from 'react-native-vector-icons/FontAwesome5'
import { Picker } from '@react-native-picker/picker';
import { DeleteAccount, Register, UpdateAccount } from '../API/PostData';
import Swipeout from 'react-native-swipeout';



interface Account {
    _id: Object,
    Name: string,
    PhoneNumber: string,
    Password: string,
    Type: string,
    __v: number
}
const AdmAccount = () => {
    const [account, setAccount] = useState([])
    const [modalVisible, setModalVisible] = useState(false);
    const [name, setname] = useState('');
    const [phone, setPhone] = useState('');
    const [pass, setPass] = useState('');
    const [selectedValue, setSelectedValue] = useState('');
    const [index, setIndex] = useState(-1)
    const [typeModal, setTypeModal] = useState<string | null>(null)
    const [status, setStatus] = useState('')
    const [update, setUpdate] = useState('')

    useEffect(() => {
        getAccount(setAccount);
        console.log(account)
    }, [])

    useEffect(() => {
        if (status == 'Error') {
            ToastAndroid.show('Account is not exist', ToastAndroid.SHORT)
        }
        if (status == 'done') {
            ToastAndroid.show('Deleted', ToastAndroid.SHORT)
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

    let Account: Account[] = account;

    var swipeoutBtns = [
        {
            backgroundColor: 'green',
            onPress: () => {
                setname(Account[index].Name)
                setPhone(Account[index].PhoneNumber)
                setPass(Account[index].Password)
                setSelectedValue(Account[index].Type)
                setModalVisible(true)
                setTypeModal('edit')
                setUpdate(Account[index].PhoneNumber)
            },
            text: 'Edit',
        },
        {
            backgroundColor: 'red',
            onPress: async () => {
                await DeleteAccount(Account[index].PhoneNumber, setStatus)
                getAccount(setAccount);
            },
            text: 'Delete',
        },
    ]

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.hearder}>
                <Text style={styles.title}>Account</Text>
                <View style={styles.new}>
                    <TouchableOpacity onPress={() => {
                        setTypeModal('create')
                        setModalVisible(true)
                    }}>
                        <Icon name='user-plus' size={20} color={"black"} ></Icon>
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

                }}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <TextInput placeholder='Name' onChangeText={setname} value={name} style={styles.textInput}></TextInput>
                            <TextInput placeholder='Phone number' onChangeText={setPhone} keyboardType="number-pad" value={phone} style={styles.textInput}></TextInput>
                            <TextInput placeholder='Password' onChangeText={setPass} value={pass} style={styles.textInput}></TextInput>

                            <Picker
                                selectedValue={selectedValue}
                                style={{ height: 50, width: 150 }}
                                onValueChange={(itemValue) =>
                                    setSelectedValue(itemValue)
                                }>
                                <Picker.Item label='user' value={"user"} />
                                <Picker.Item label="admin" value="admin" />
                            </Picker>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={async () => {
                                    if (name != '' && phone != '' && pass != "") {
                                        setname('')
                                        setPhone('')
                                        setPass('')
                                        setSelectedValue('user')
                                        setTypeModal(null)
                                        if (typeModal == 'create') {
                                            await Register(name, phone, pass, selectedValue)
                                            setModalVisible(!modalVisible)
                                            ToastAndroid.show('Registed', ToastAndroid.SHORT)
                                        }
                                        if (typeModal == 'edit') {
                                            await UpdateAccount(update, name, phone, pass, selectedValue, setStatus)
                                            setUpdate('')
                                            setModalVisible(!modalVisible)
                                            // ToastAndroid.show('edited', ToastAndroid.LONG)
                                        }
                                        getAccount(setAccount);
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
                    extraData={Account}
                    horizontal={false}
                    showsHorizontalScrollIndicator={false}
                    data={Account}
                    keyExtractor={(item: Account, index: number) => item._id.toString()}
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
                                <View style={{ backgroundColor: 'white', marginTop: 10, marginHorizontal: 5 }}>
                                    <View style={{ marginLeft: 10 }}>
                                        <Text style={{ fontSize: 20 }}>{item.Name}</Text>
                                        <Text>{item.PhoneNumber}</Text>
                                        <Text>{item.Password}</Text>
                                        <Text>{item.Type}</Text>
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
export default AdmAccount;
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
    }
})