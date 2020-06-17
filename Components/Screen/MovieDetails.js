import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DemoComp from '../Screen/FoodItems';

let Image_Http_URL = { uri: 'https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png' };


const MovieDetails = ({ navigation, route: { params } }) => {
    let { data } = params;
    // alert(JSON.stringify(data))
    return (
        <View style={{ flex: 1, alignItems: "center" }}>
            {/* <Text>{data.hname}</Text> */}
            {/* <Text>{data.price}</Text> */}
            <View style={{ flex: 1, height: 100, width: "100%", backgroundColor: "#ececec" }}>
                <Image source={data.photo} style={{ height: 200, width: "100%" }} />
                <DemoComp />
            </View>
        </View>
    );
}
export default MovieDetails;
