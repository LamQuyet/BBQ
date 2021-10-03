import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (value: any) => {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem('@storage_Key', jsonValue)
        console.log("Add", jsonValue)
    } catch (e) {
        console.log(e)
    }
}

export const getData = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem('@storage_Key')
        console.log("jsonvalue", jsonValue)
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        console.log(e)
    }
}

export const Login = async (value: any) => {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem('@login', jsonValue)
        console.log("AddLogin", jsonValue)
    } catch (e) {
        console.log(e)
    }
}

export const CheckLogin = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem('@login')
        console.log("CheckLogin", jsonValue)
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        console.log(e)
    }
}