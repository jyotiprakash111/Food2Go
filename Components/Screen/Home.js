import React, { Component } from 'react';
import { View, Text, FlatList, ScrollView, TouchableOpacity, StyleSheet, TextInput, Image } from 'react-native';
import ImageSlider from '../Screen/ImageSlider';
import DemoComp from './FoodItems';
import Movie from './Movie';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ProfileData: []
        };
    }

    componentDidMount() {
        fetch('https://api.androidhive.info/json/movies_2017.json')
            .then(res => res.json())
            .then((data) => {
                this.setState({ ProfileData: data })
                // alert(JSON.stringify(data))
                console.log(data)
            })
            .catch(console.log)
    }



    render() {
        return (
            <View style={{ flex: 1 }}>
                <ImageSlider />
                <View style={{ flex: 2, backgroundColor: "#ffff" }}>
                    <View style={styles.search}>
                        <Image source={require('../../assets/search.png')} style={styles.ImageStyle} />
                        <TextInput
                            placeholder="Search"
                            // inlineImageLeft="user"
                            inlineImagePadding={20}
                        />
                        <TouchableOpacity style={styles.Filter}>
                            <Image source={require('../../assets/filter.png')} style={[styles.ImageStyle, { alignItems: "center" }]} />
                        </TouchableOpacity>
                    </View>
                    <Movie />
                </View>

            </View>
        );
    }
}

export default Home;

const styles = StyleSheet.create({
    search: {
        flexDirection: 'row',
        // justifyContent: 'center',
        alignItems: 'center',
        elevation: 3,
        backgroundColor: "#edeef0",
        height: 40,
        borderRadius: 5,
        margin: 10,
        width: "80%"
    },
    ImageStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'center'
    },
    Filter: {
        // flexDirection: 'row',
        justifyContent: 'center',
        alignItems: "center",
        elevation: 3,
        backgroundColor: "#edeef0",
        height: 40,
        borderRadius: 5,
        marginLeft: "74%",
        width: "17%"
    }
})