import React, { useEffect, useState } from "react";
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
import { Formik, Form, Field } from 'formik';
import { RegisterSchema } from "../components/validate";
import { ValidationError } from "yup";

const Register = ({ navigation }: any) => {
    const [status, setStatus] = useState('')
    useEffect(() => {
        if (status === "Số điện thoại đã được dùng") {
            Alert.alert(status)
        }
        if (status === "Đăng kí thành công") {
            Alert.alert("Warning", status, [
                { text: 'OK', onPress: navigation.replace('Login') }
            ])
        }
        setStatus('')
    }, [status])
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require("../images/logo.png")} />
            <Formik
                initialValues={{
                    Name: '',
                    PhoneNumber: '',
                    PassWord: '',
                    ConfirmPass: ''
                }}
                validationSchema={RegisterSchema}
                onSubmit={values => {
                    // same shape as initial values
                    console.log(values);
                }}
            >
                {({ errors, touched, handleBlur, handleChange, handleSubmit, values }) => (
                    <View>
                        <View style={styles.inputView}>
                            <Icon name='user-alt' size={20} style={{ marginLeft: 18 }}></Icon>
                            <TextInput
                                style={styles.TextInput}
                                placeholder="Your name"
                                placeholderTextColor="#003f5c"
                                onChangeText={handleChange('Name')}
                                onBlur={handleBlur("Name")}
                                value={values.Name}
                            />
                            {errors.Name && touched.Name ? (
                                <Text style={{ color: 'red', fontSize: 12 }}>{errors.Name}</Text>
                            ) : null}
                        </View>

                        <View style={styles.inputView}>
                            <Icon name='mobile-alt' size={20} style={{ marginLeft: 18 }}></Icon>
                            <TextInput
                                style={styles.TextInput}
                                placeholder="Phone number"
                                placeholderTextColor="#003f5c"
                                keyboardType="number-pad"
                                onChangeText={handleChange('PhoneNumber')}
                                onBlur={handleBlur("PhoneNumber")}
                                value={values.PhoneNumber}
                            />
                            {errors.PhoneNumber && touched.PhoneNumber ? (
                                <Text style={{ color: 'red', fontSize: 12 }}>{errors.PhoneNumber}</Text>
                            ) : null}
                        </View>

                        <View style={styles.inputView}>
                            <Icon name='lock' size={20} style={{ marginLeft: 18 }}></Icon>
                            <TextInput
                                style={styles.TextInput}
                                placeholder="Password"
                                placeholderTextColor="#003f5c"
                                secureTextEntry={true}
                                onChangeText={handleChange('PassWord')}
                                onBlur={handleBlur("PassWord")}
                                value={values.PassWord}
                            />
                            {errors.PassWord && touched.PassWord ? (
                                <Text style={{ color: 'red', fontSize: 12 }}>{errors.PassWord}</Text>
                            ) : null}
                        </View>

                        <View style={styles.inputView}>
                            <Icon name='lock' size={20} style={{ marginLeft: 18 }}></Icon>
                            <TextInput
                                style={styles.TextInput}
                                placeholder="Confirm password"
                                placeholderTextColor="#003f5c"
                                secureTextEntry={true}
                                onChangeText={handleChange('ConfirmPass')}
                                onBlur={handleBlur("ConfirmPass")}
                                value={values.ConfirmPass}
                            />
                            {errors.ConfirmPass && touched.ConfirmPass ? (
                                <Text style={{ color: 'red', fontSize: 12 }}>{errors.ConfirmPass}</Text>
                            ) : null}
                        </View>

                        <TouchableOpacity style={styles.loginBtn}
                            onPress={() => {
                                if (values.Name == '' || values.PhoneNumber == '' || values.PassWord == '' || values.ConfirmPass == '') {
                                    Alert.alert('Error', 'Data null')
                                }
                                else {
                                    if (errors.Name || errors.PhoneNumber || errors.PassWord || errors.ConfirmPass) {
                                        Alert.alert('Error', 'Data is not valid')
                                    }
                                    else {
                                        if (values.ConfirmPass === values.PassWord) {
                                            PostData.Register(values.Name, values.PhoneNumber, values.PassWord, setStatus)
                                        }
                                        else {
                                            Alert.alert('Error', 'Password and username are not the same')
                                        }
                                    }
                                }

                            }}>
                            <Text>REGISTER</Text>
                        </TouchableOpacity>

                    </View>
                )}
            </Formik>
            <View style={styles.Register}>
                <Text> Has an account? </Text>
                <TouchableOpacity onPress={() => { navigation.replace('Login') }}>
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
        // width: "70%",
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