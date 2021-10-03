import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import Home from "../screens/HomeScreen";
import SearchComponent from "../screens/Search";
import Cart from "../screens/Cart";
import Checkout from "../screens/Checkout";

const Stack = createStackNavigator();

const CartStack = () => {
    return (
        <Stack.Navigator
            initialRouteName='CartScreen'
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="CartScreen" component={Cart} />
            <Stack.Screen name="Checkout" component={Checkout} />
        </Stack.Navigator>
    )
}
export default CartStack