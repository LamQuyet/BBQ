import 'react-native-gesture-handler'
import Animated from 'react-native-reanimated';
import React from "react";
import { View, Text, StyleSheet, Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomTab from "./navigation/BottomTab";
import DrawerTab from "./navigation/Drawer";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Provider } from "react-redux";
import store from "./Redux/stores";
import Login from './screens/Login';
import Register from './screens/Register';
import LoginRegister from './navigation/LoginRegisteStack';
import MainStack from './navigation/MainStack';
import Checkout from './screens/Checkout';



const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainStack></MainStack>
      </NavigationContainer>
    </Provider>
    // <Checkout></Checkout>
  );
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})