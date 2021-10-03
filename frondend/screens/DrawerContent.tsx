import React from 'react'
import { View, StyleSheet, TextBase, Text, ImageBackground, Image } from 'react-native'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as AsyncStore from '../components/AsyncStore'
// import { Avatar, Title, Caption, Paragraph, Drawer, Text, TouchableRipple, Switch } from 'react-native-paper'
// import Feather from 'react-native-vector-icons/Feather';

const DrawerContent = (props: any, { navigation }: any) => {
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <ImageBackground
                    source={require('../images/background1.jpg')}
                    style={styles.background}
                >
                    <Image
                        source={require('../images/avatar.jpg')}
                        style={styles.avatar}
                    ></Image>
                    <Text style={styles.name}>Baby</Text>
                    <Text style={styles.phone}>0987654321</Text>
                </ImageBackground>
            </View>
            <View style={styles.body}>
                <DrawerContentScrollView>
                    <View style={styles.main}>
                        <TouchableOpacity>
                            <View style={styles.itemStyles}>
                                <Icon name='home' size={20} color='#808080'></Icon>
                                <Text style={styles.textStyles}>Home</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.itemStyles}>
                                <Icon name='id-badge' size={20} color='#808080'></Icon>
                                <Text style={styles.textStyles}>Profile</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.itemStyles}>
                                <Icon name='cog' size={20} color='#808080'></Icon>
                                <Text style={styles.textStyles}>Setting</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.itemStyles}>
                                <Icon name='phone-alt' size={20} color='#808080'></Icon>
                                <Text style={styles.textStyles}>Support</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </DrawerContentScrollView>
                <TouchableOpacity onPress={() => {
                    AsyncStore.Login(null)
                    props.navigation.replace('LoginStack')
                }}>
                    <View style={styles.LogoutStyles}>
                        <Icon name='sign-out-alt' size={20} color='#808080'></Icon>
                        <Text style={styles.textStyles}>Log out</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    item: {
        marginLeft: 10,
        marginTop: 20,
    },
    container: {
        flex: 1
    },
    top: {
        flex: 2.5,
        backgroundColor: 'orange'
    },
    body: {
        flex: 7.5,
    },
    background: {
        width: '100%',
        height: '100%'
    },
    avatar: {
        width: 85,
        height: 85,
        borderRadius: 70,
        position: 'absolute',
        bottom: 10,
        left: 10
    },
    name: {
        position: 'absolute',
        bottom: 40,
        left: 110,
        fontSize: 25,
        color: 'white'
    },
    phone: {
        position: 'absolute',
        bottom: 20,
        left: 110,
        color: 'white'
    },
    itemStyles: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 30,
        paddingBottom: 15,
        paddingTop: 15
    },
    textStyles: {
        marginLeft: 15,
        fontSize: 15,
        color: '#808080'
    },
    LogoutStyles: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 30,
        paddingBottom: 15,
        // borderTopColor: '#808088',
        // borderTopWidth: 1,
        paddingTop: 15
    },
    main: {
        // borderBottomColor: '#808088',
        // borderBottomWidth: 1,
    }
})
export { DrawerContent };