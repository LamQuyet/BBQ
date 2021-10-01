import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import Home from "../screens/HomeScreen";
import SearchComponent from "../screens/Search";
import Login from "../screens/Login";
import Register from "../screens/Register";

const Stack = createStackNavigator();

const LoginRegister = () => {
    return (
        <Stack.Navigator
            initialRouteName='Login'
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
    )
}
export default LoginRegister