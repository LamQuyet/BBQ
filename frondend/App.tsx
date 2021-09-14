import 'react-native-gesture-handler'
// import Animated from 'react-native-reanimated';
import React from "react";
import { View, Text, StyleSheet, Image } from 'react-native'
import Sale from "./screens/Sale";
import Home from "./screens/HomeScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Cart from "./screens/Cart";
import Icon from 'react-native-vector-icons/FontAwesome5';
import BottomTab from "./navigation/Tab";
import DrawerTab from "./navigation/Drawer";
import { createDrawerNavigator } from '@react-navigation/drawer';


// const Tab = createBottomTabNavigator();
// const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <BottomTab></BottomTab>
    </NavigationContainer>
  );
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: "center"
  }
})