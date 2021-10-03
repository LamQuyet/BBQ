import { size } from 'lodash';
import React, { useEffect, useState } from 'react'
import { Alert, FlatList, Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import * as AsynStore from '../components/AsyncStore'
import { connect } from "react-redux";
import { Order } from '../API/PostData'

const Checkout = ({ items, route, navigation }: any) => {
    const [account, setAccount] = useState('')
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [foods, setFoods] = useState({})
    const [totalprice, setTotalPrice] = useState(0)

    useEffect(() => {
        (AsynStore.CheckLogin()
            .then((res) => {
                setAccount(res.phone)
            })
        )
        setFoods(items.Carts)
        setTotalPrice(route.params.totalprice)
    }, [])
    return (
        <View style={styles.container}>
            <Image
                source={require('../images/logo.png')}
                style={styles.logo}
            ></Image>
            <View style={styles.itemStyle}>
                <Text style={styles.textStyles}>Name</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setName}
                ></TextInput>
            </View>
            <View style={styles.itemStyle}>
                <Text style={styles.textStyles}>Address</Text>
                <TextInput
                    onChangeText={setAddress}
                    style={styles.input}></TextInput>
            </View>
            <View style={styles.itemStyle}>
                <Text style={styles.textStyles}>Phone number</Text>
                <TextInput
                    onChangeText={setPhone}
                    keyboardType="number-pad"
                    style={styles.input}></TextInput>
            </View>
            <TouchableOpacity
                style={styles.checkoutBtn}
                onPress={() => {
                    if (name == '' || address == '' || phone == '') {
                        Alert.alert("Warning", "Data is not valid")
                    }
                    else {
                        Order(account, name, address, phone, foods, totalprice)
                        Alert.alert('Warning', 'Done')
                    }
                }}
            >
                <Text style={{ fontWeight: '700' }}>Order</Text>
            </TouchableOpacity>
        </View>
    )
}
const mapStateToProps = (state: any) => {
    // console.log(state)
    return {
        items: state._todoProduct
    }
}

export default connect(mapStateToProps)(Checkout)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#f6f6f6",
    },
    logo: {
        marginBottom: 60,
        width: 200,
        height: 150
    },
    itemStyle: {
        borderColor: 'orange',
        borderWidth: 1,
        width: '80%',
        marginBottom: 30
    },
    textStyles: {
        color: 'orange',
        marginLeft: 10,
        fontSize: 20,
        fontWeight: '700',

    },
    input: {
        marginLeft: 10,
        color: 'orange',
        padding: 5,
        fontSize: 15,
    },
    checkoutBtn: {
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "orange",
        width: '70%'
    }
})