import React, { useCallback, useEffect, useState } from 'react'
import { FlatList, Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View, TextInput, Dimensions } from 'react-native'
import Search from '../components/Searchbar';
import category from '../API/category';
import Icon from 'react-native-vector-icons/FontAwesome5';
import axios from 'axios'
import * as GetData from '../API/GetData'
import { AddCart } from '../Redux/actions'
import { connect } from 'react-redux';
import * as PostData from '../API/PostData'
import _, { debounce } from "lodash";

interface Food {
    _id: Object,
    Name: String,
    Cost: String,
    Category: String,
    Image: String,
}

const SearchComponent = ({ navigation, AddCart }: any) => {
    const [search, setSearch] = useState('')
    const [data, setData] = useState([]);

    useEffect(() => {
        PostData.Search(search, setData)
    }, [search])

    let searchdata: Food[] = data;
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={() => { navigation.goBack() }}>
                    <View style={{ marginLeft: 10 }}>
                        <Icon name='arrow-left' size={26} color='orange'></Icon>
                    </View>
                </TouchableOpacity>
                <View style={styles.search}>
                    <Image source={require('../images/search.png')}
                        style={styles.icon}></Image>
                    <TextInput
                        style={styles.input}
                        placeholder='Search'
                        onChangeText={_.debounce(setSearch, 500)}
                    >
                    </TextInput>
                    {console.log(search)}
                </View>
            </View>
            <FlatList horizontal={false}
                showsHorizontalScrollIndicator={false}
                data={searchdata}
                keyExtractor={(item) => item._id.toString()}
                renderItem={({ item }) => {
                    return (
                        <View style={{
                            marginLeft: 10, alignItems: 'center', marginTop: 15, marginRight: 10, flexDirection: 'row',
                            backgroundColor: 'white', borderRadius: 10, width: Dimensions.get('screen').width - 40
                        }}>
                            <Image source={{ uri: `${item.Image}` }}
                                style={{ width: 70, height: 70, borderRadius: 10 }}></Image>
                            <View style={styles.sale}>
                                <Text style={{ color: 'black', fontWeight: '700', fontSize: 16 }}>{item.Name}</Text>
                                <Text>{item.Cost}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginLeft: 50 }}>
                            </View>
                            <View style={{ marginLeft: 70 }}>
                                <TouchableOpacity onPress={() => AddCart(item)}>
                                    <Icon name='cart-plus' size={30} color='orange'></Icon>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )
                }}>
            </FlatList>
        </View>

    )
}
function mapDispatchToProps(dispatch: any) {
    return {
        AddCart: (item: any) => dispatch(AddCart(item))

    }
}
export default connect(mapDispatchToProps, { AddCart })(SearchComponent)
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 15,
        flexDirection: 'column'
    },
    icon: {
        width: 17,
        height: 17,
        marginLeft: 10
    },
    input: {
        marginLeft: 5
    },
    search: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#E8E8E8',
        borderRadius: 30,
        width: '85%',
        height: 40,
        marginLeft: 20
    },
    sale: {
        marginLeft: 10,
        alignItems: 'baseline',
        width: 100

    }
})