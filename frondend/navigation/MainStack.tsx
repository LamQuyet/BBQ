import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import Home from "../screens/HomeScreen";
import SearchComponent from "../screens/Search";
import LoginRegister from "./LoginRegisteStack";
import DrawerTab from "./Drawer";
import Admin from "../screens/Admin";
import AdmAccount from "../screens/AccountAdmin";
import FoodManage from "../screens/FoodManage";

const Stack = createStackNavigator();

const MainStack = () => {
    return (
        <Stack.Navigator
            initialRouteName='LoginStack'
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="LoginStack" component={LoginRegister} />
            <Stack.Screen name="Main" component={DrawerTab} />
            <Stack.Screen name="Admin" component={FoodManage} />
        </Stack.Navigator>
    )
}
export default MainStack