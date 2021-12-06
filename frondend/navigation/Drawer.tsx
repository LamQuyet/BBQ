import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTab from "./BottomTab";
import Cart from "../screens/Cart";
import { DrawerContent } from "../screens/DrawerContent";

const Drawer = createDrawerNavigator();

const DrawerTab = () => {
    return (
        <Drawer.Navigator
            drawerContent={props => <DrawerContent {...props} />}
            initialRouteName='Tab'
            screenOptions={{ headerShown: false }}
        >
            <Drawer.Screen name="Tab" component={BottomTab} />
            <Drawer.Screen name="content" component={DrawerContent} />
        </Drawer.Navigator>
    )
}
export default DrawerTab