import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTab from "./Tab";
import Cart from "../screens/Cart";

const Drawer = createDrawerNavigator();

const DrawerTab = () => {
    return (
        <Drawer.Navigator initialRouteName='Tab'>
            <Drawer.Screen name="Tab" component={BottomTab} />
            {/* <Drawer.Screen name="Article" component={Cart} /> */}
        </Drawer.Navigator>
    )
}
export default DrawerTab