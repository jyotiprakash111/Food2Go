import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    TouchableOpacity,
    FlatList,
    ImageBackground,
    View,
    StyleSheet,
    Text,
    Image
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const App = () => {
    const [profileData, setProfileData] = useState([]);
    const navigation = useNavigation();
    useEffect(() => {
        fetch('https://api.androidhive.info/json/movies_2017.json')
            .then(res => res.json())
            .then((data) => {
                setProfileData(data)
                // alert(JSON.stringify(data))
                console.log(data)
            })
            .catch(console.log)
    }, [])

    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'First Item',
            photo: require('../../assets/assorted-gift-boxes-on-brown-wooden-floor-surface-1050244.jpg'),
            hname: 'The Biriyani House'
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Second Item',
            photo: require('../../assets/Hotels/1.jpg'),
            hname: 'Buffet Wala'
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Third Item',
            photo: require('../../assets/Hotels/2.jpg')
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Third Item',
            photo: require('../../assets/Hotels/3.jpg'),
            hname: 'Tanduri Junction'
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Third Item',
            photo: require('../../assets/Hotels/4.jpg'),
            hname: 'Hydrabadi Biriyani'
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Third Item',
            photo: require('../../assets/Hotels/5.jpg'),
            hname: 'Icecream Parlor'
        },
    ];


    const keyExtractor = (item, index) => index.toString();
    const renderHistory = ({ item, index }) => (
        <View style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', paddingTop: 5, justifyContent: "center" }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Moviedetails", { data: item })}
                    style={{
                        height: 115,
                        width: "96%",
                        backgroundColor: "#ffff",
                        borderRadius: 5,
                        flexDirection: "row",
                        elevation: 3
                    }}>
                    <Image source={item.photo}
                        style={{ height: "87%", width: "40%", resizeMode: "cover", borderRadius: 5, margin: 8 }}
                    />
                    <View style={{ justifyContent: "flex-start", margin: 15 }}>
                        <Text style={{ fontSize: 17, fontWeight: "bold" }}>{item.hname}</Text>
                        <Text style={{ fontSize: 13, color: "#bdc3c7" }}>Biriyani, Baverages</Text>
                        <Text style={{ fontSize: 10, color: "#9E9E9E", paddingTop: 5 }}>✔100 Per Person</Text>
                        <Text style={{ fontSize: 10, color: "#9E9E9E", paddingTop: 5 }}>🎯Live Tracking</Text>
                    </View>
                    <View style={{ flex: 1, justifyContent: "flex-end" }}>
                        <Text style={{ fontSize: 10, marginVertical: 34 }}>🚵🏿34 Minutes</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
    return (
        <View style={{ flex: 1 }}>
            <FlatList
                numColumns={1}
                showsVerticalScrollIndicator={false}
                keyExtractor={keyExtractor}
                // data={profileData}
                data={DATA}
                renderItem={renderHistory}
            />
        </View>
    );
}
export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});

