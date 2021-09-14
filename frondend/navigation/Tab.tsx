import React from "react";
import { View, Text, StyleSheet, Image } from 'react-native'
import Sale from "../screens/Sale";
import Home from "../screens/HomeScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Cart from "../screens/Cart";
import Icon from 'react-native-vector-icons/FontAwesome5';
import HomeStack from "./HomeSatck";


const Tab = createBottomTabNavigator();

const BottomTab = () => {
    return (
        <Tab.Navigator
            initialRouteName='Home'
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName: string = "";

                    if (route.name === 'Home') {
                        iconName = 'home'
                    }
                    if (route.name === 'Sale') {
                        iconName = 'tags'
                    }
                    if (route.name === 'Cart') {
                        iconName = 'shopping-cart'
                    }
                    if (route.name === 'Account') {
                        iconName = 'user-alt'
                    }

                    // You can return any component that you like here!
                    return <Icon name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'orange',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen name="Home" component={HomeStack} options={{ headerShown: false }} />
            <Tab.Screen name="Sale" component={Sale} options={{ headerShown: false }} />
            <Tab.Screen name="Cart" component={Cart} options={{ headerShown: false }} />
            <Tab.Screen name="Account" component={Cart} options={{ headerShown: false }} />
        </Tab.Navigator>
    )
}
export default BottomTab