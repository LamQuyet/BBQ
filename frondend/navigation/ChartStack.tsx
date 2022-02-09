import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Chart from '../screens/Chart';
import Bills from '../screens/Bills';

const Stack = createStackNavigator();

const ChartStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Income"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Income" component={Chart} />
      <Stack.Screen name="Bills" component={Bills} />
    </Stack.Navigator>
  );
};
export default ChartStack;
