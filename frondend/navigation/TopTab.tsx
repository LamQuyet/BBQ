import React from "react";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import History from '../screens/History';
import Waiting from '../screens/Waiting';
import Canceled from "../screens/Canceled";

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Waiting" component={Waiting} />
            <Tab.Screen name="History" component={History} />
            <Tab.Screen name="Canceled" component={Canceled} />
        </Tab.Navigator>
    );
}
export default MyTabs