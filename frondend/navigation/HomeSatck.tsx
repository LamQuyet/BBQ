import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import Home from "../screens/HomeScreen";
import SearchComponent from "../screens/Search";

const Stack = createStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator
            initialRouteName='HomeStack'
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="Homestack" component={Home} />
            <Stack.Screen name="Search" component={SearchComponent} />
        </Stack.Navigator>
    )
}
export default HomeStack