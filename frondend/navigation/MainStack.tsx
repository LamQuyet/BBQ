import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import Home from "../screens/HomeScreen";
import SearchComponent from "../screens/Search";
import LoginRegister from "./LoginRegisteStack";
import DrawerTab from "./Drawer";
import Admin from "../screens/Admin";
import AdmAccount from "../screens/AccountAdmin";
import FoodManage from "../screens/FoodManage";
import Chart from "../screens/Chart";
import Order from "../screens/Order";
import AdminTab from "./AdminTab";

const Stack = createStackNavigator();

const MainStack = () => {
    return (
        <Stack.Navigator initialRouteName='LoginStack'screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="LoginStack" component={LoginRegister} />
            <Stack.Screen name="Main" component={DrawerTab} />
            <Stack.Screen name="Admin" component={AdminTab} />
        </Stack.Navigator>
    )
}
export default MainStack