import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Button,
    TouchableOpacity,
    Alert,
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import * as PostData from '../API/PostData'

const Register = () => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState('')

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require("../images/logo.png")} />
            <View style={styles.inputView}>
                <Icon name='mobile-alt' size={20} style={{ marginLeft: 18 }}></Icon>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Your name"
                    placeholderTextColor="#003f5c"
                    onChangeText={setName}
                />
                {console.log(name)}
            </View>

            <View style={styles.inputView}>
                <Icon name='mobile-alt' size={20} style={{ marginLeft: 18 }}></Icon>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Phone number"
                    placeholderTextColor="#003f5c"
                    onChangeText={setPhoneNumber}
                />
                {console.log(phoneNumber)}
            </View>

            <View style={styles.inputView}>
                <Icon name='lock' size={20} style={{ marginLeft: 18 }}></Icon>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Password"
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    onChangeText={setPassword}
                />
                {console.log(password)}
            </View>

            <View style={styles.inputView}>
                <Icon name='lock' size={20} style={{ marginLeft: 18 }}></Icon>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Confirm password"
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    onChangeText={setConfirmPass}
                />
                {console.log(confirmPass)}
            </View>

            <TouchableOpacity style={styles.loginBtn}
                onPress={() => {
                    if (confirmPass === password) {
                        PostData.Register(name, phoneNumber, password)
                    }
                    else {
                        Alert.alert('Error', 'Password and username are not the same')
                    }
                }}>
                <Text>REGISTER</Text>
            </TouchableOpacity>
            <View style={styles.Register}>
                <Text> Has an account? </Text>
                <TouchableOpacity >
                    <Text style={{ color: 'orange' }}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
export default Register

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f6f6f6",
        alignItems: "center",
        justifyContent: "center",
    },

    image: {
        marginBottom: 60,
        width: 200,
        height: 150
    },

    inputView: {
        backgroundColor: "#DAA520",
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: "center",
    },

    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 10,
    },

    forgot_button: {
        height: 30,
        marginBottom: 30,
    },

    loginBtn: {
        width: "70%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "orange",
    },
    Register: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 5
    }
});