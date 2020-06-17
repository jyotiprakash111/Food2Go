/* eslint-disable global-require */
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Button, TouchableOpacity } from 'react-native';
import { CardSection } from "../Common/CardSection";

class Profile extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'My Profile',
        headerStyle: {
            // backgroundColor: '#f4511e',
        },
        headerTintColor: '#ea0788',
        headerTitleStyle: {
            fontWeight: 'bold',
            marginLeft: "35%",
        },
        headerRight: () => (
            <TouchableOpacity
                onPress={() => navigation.navigate('EditAcInffo')}
                style={{ marginRight: 12 }}>
                <Text style={{ color: '#ea0788', fontSize: 15, fontWeight: 'bold' }}>Edit</Text>
            </TouchableOpacity>
        ),
    });
    constructor(props) {
        super(props);
        this.state = {
            user: []
        }
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <ScrollView style={styles.container}>
                <View style={styles.wrapper}>
                    <Image style={styles.imageStyle2} source={require("../../assets/user1.png")} />
                    <Text style={styles.nameStyle}>
                        Kartik
                    </Text>
                </View>
                <View style={{ marginBottom: 10 }}>
                    <Text style={styles.profileInfoStyle}>
                        PROFILE INFO
                    </Text>
                </View>
                <CardSection>
                    <View style={styles.profileContentContainerStyle}>
                        <View style={styles.profileContentStyle}>
                            <Text>Phone Number</Text>
                        </View>
                        <View style={styles.profileContentStyle2}>
                            <Text style={styles.profileContentValueStyle}>909090</Text>
                        </View>
                    </View>
                </CardSection>
                <CardSection>
                    <View style={styles.profileContentContainerStyle}>
                        <View style={styles.profileContentStyle}>
                            <Text>Email</Text>
                        </View>
                        <View style={styles.profileContentStyle2}>
                            <Text style={styles.profileContentValueStyle}>biki@gmail.com</Text>
                        </View>
                    </View>
                </CardSection>
                <CardSection>
                    <View style={styles.profileContentContainerStyle}>
                        <View style={styles.profileContentStyle}>
                            <Text>Gender</Text>
                        </View>
                        <View style={styles.profileContentStyle2}>
                            <Text style={styles.profileContentValueStyle}>Male</Text>
                        </View>
                    </View>
                </CardSection>
                <CardSection>
                    <View style={styles.profileContentContainerStyle}>
                        <View style={styles.profileContentStyle}>
                            <Text>Date of Birth</Text>
                        </View>
                        <View style={styles.profileContentStyle2}>
                            <Text style={styles.profileContentValueStyle}>12-05-1996</Text>
                        </View>
                    </View>
                </CardSection>
            </ScrollView>
        );
    }
}

export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7F8FA',
    },
    wrapper: {
        // flex: 1,
        height: 200,
        width: '100%',
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    imageStyle2: {
        height: 80,
        width: 80,
        borderRadius: 50,
    },
    nameStyle: {
        fontWeight: '700',
        fontSize: 20
    },
    bookingTypeStyle: {
        color: '#fff',
        backgroundColor: '#ea0788',
        borderRadius: 25,
        alignSelf: 'flex-start',
        fontSize: 12,
        fontWeight: 'bold',
        paddingHorizontal: 6,
        paddingVertical: 4,
        margin: 2,
    },
    profileInfoStyle: {
        color: '#EA0788',
        fontWeight: 'bold',
        marginLeft: 10,
        // marginVertical: 10,
    },
    profileContentContainerStyle: {
        flex: 1,
        flexDirection: 'row',
        marginVertical: 15,
    },
    profileContentStyle: {
        width: '50%',
        marginHorizontal: 15,
    },
    profileContentStyle2: {
        width: '50%',
    },
    profileContentValueStyle: {
        color: '#757A87',
    },
});