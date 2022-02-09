import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Sale from '../screens/Sale';
import Home from '../screens/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Cart from '../screens/Cart';
import Icon from 'react-native-vector-icons/FontAwesome5';
import HomeStack from './HomeSatck';
import {connect} from 'react-redux';
import {State} from 'react-native-gesture-handler';
import App from '../App';
import Account from '../screens/Account';
import CartStack from './CartStack';
import Order from '../screens/Order';
import FoodManage from '../screens/FoodManage';
import AdmAccount from '../screens/AccountAdmin';
import Chart from '../screens/Chart';
import ChartStack from './ChartStack';

const Tab = createBottomTabNavigator();

const AdminTab = ({numberCart}: any) => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName: string = '';

          if (route.name === 'Bills') {
            iconName = 'file-invoice';
          }
          if (route.name === 'Foods') {
            iconName = 'utensils';
          }
          if (route.name === 'Accounts') {
            iconName = 'user';
          }
          if (route.name === 'Chart') {
            iconName = 'chart-line';
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'orange',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen
        name="Bills"
        component={Order}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Foods"
        component={FoodManage}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Accounts"
        component={AdmAccount}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Chart"
        component={ChartStack}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};
const mapStateToProps = (state: any) => {
  return {
    numberCart: state._todoProduct.numberCart,
  };
};
export default connect(mapStateToProps, null)(AdminTab);
// export default BottomTab
