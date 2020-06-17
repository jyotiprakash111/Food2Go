import React, { Component } from 'react';
import { View, Text, ScrollView, FlatList, TouchableOpacity, Image } from 'react-native';

const DemoHome = () => {
    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'Vanilla Icecream',
            photo: require('../../assets/assorted-gift-boxes-on-brown-wooden-floor-surface-1050244.jpg'),
            hname: 'The Biriyani House'
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Chiken Sandwich',
            photo: require('../../assets/Hotels/1.jpg'),
            hname: 'Buffet Wala'
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Butter Chiken',
            photo: require('../../assets/Hotels/2.jpg')
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Tanduri Nan',
            photo: require('../../assets/Hotels/3.jpg'),
            hname: 'Tanduri Junction'
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: "Fish Curry",
            photo: require('../../assets/Hotels/4.jpg'),
            hname: 'Paner Chilli'
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Hot Soup',
            photo: require('../../assets/Hotels/5.jpg'),
            hname: 'Icecream Parlor'
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Hot Soup',
            photo: require('../../assets/Hotels/5.jpg'),
            hname: 'Icecream Parlor'
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Hot Soup',
            photo: require('../../assets/Hotels/5.jpg'),
            hname: 'Icecream Parlor'
        },
    ];

    const keyExtractor = (item, index) => index.toString();
    const renderdata = ({ item, index }) => (
        <View style={{ flex: 1 }}>
            {/* <View style={{ flexDirection: 'row', justifyContent: "center" }}> */}
            <View
                // onPress={() => navigation.navigate("Moviedetails", { data: item })}
                style={{
                    height: "80%",
                    width: "96%",
                    backgroundColor: "#ffff",
                    borderRadius: 5,
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "row",
                    elevation: 1,
                    marginLeft: 7
                }}>
                <View style={{ justifyContent: "center", paddingLeft: 15 }}>
                    <Text style={{ fontSize: 15, marginVertical: 30 }}>{item.title}</Text>
                </View>
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <TouchableOpacity
                        onPress={() => { alert("Item Selected") }}
                        style={{ marginLeft: 100, justifyContent: "center", alignItems: "center", borderWidth: 1, borderRadius: 10, height: 20, width: 50 }}>
                        <Text style={{ color: "red" }}>Add +</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {/* </View> */}
        </View >
    );
    return (
        <View style={{ flex: 1 }}>
            <FlatList
                numColumns={1}
                showsVerticalScrollIndicator={false}
                keyExtractor={keyExtractor}
                // data={profileData}
                data={DATA}
                renderItem={renderdata}
            />
        </View>
    );
}

export default DemoHome;
