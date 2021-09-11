import React from "react";
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ListFood = () => {
    return (
        <View style={styles.contrainer}>
            <View style={styles.baner}>
                <Image source={require('../images/banner.jpg')}
                    style={{ width: '100%', height: '100%' }}>
                </Image>
            </View>
            <View style={styles.body}>
                <Text>Body</Text>
                <Icon name="rocket" size={30} color="#900" />
            </View>
            <View style={styles.footer}>
                <View >
                    <Text style={{ fontSize: 18, fontWeight: '700', marginLeft: 10, fontFamily: '' }}>Lâm Quyết BBQ</Text>
                    <Text style={{ fontSize: 12, fontWeight: '700', marginLeft: 10 }}>98 Đường Mỹ Đình Nam Từ Liêm Hà Nội</Text>
                </View>
                <View>
                    <Text style={{ fontSize: 12, fontWeight: '700', marginRight: 10 }}>Hotline: 0376105680</Text>
                    <Text style={{ fontSize: 12, fontWeight: '700', marginRight: 10 }}>Mr.Quyet</Text>
                </View>
            </View>
        </View>
    )
}
export default ListFood;

const styles = StyleSheet.create({
    contrainer: {
        flex: 1
    },
    baner: {
        flex: 2,
        backgroundColor: 'red'
    },
    body: {
        flex: 7
    },
    footer: {
        flex: .7,
        backgroundColor: 'orange',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
})