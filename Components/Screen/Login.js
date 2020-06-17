import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, StyleSheet, Image } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1 }}>
            <LinearGradient colors={['#f8444d', '#e7314a', '#d2184a']} style={{ height: "100%" }}>
                <View style={{ justifyContent: "center", alignItems: "center", paddingTop: "30%" }}>
                    <Text style={{ fontSize: 30, color: "#fff" }}>Food2Go</Text>
                </View>
                <View style={styles.card}>
                    <View style={[styles.InputField, { borderColor: "#ea0788", borderWidth: 0.5 }]}>
                        {/* <View style={{ height: 10, width: 50 }}> */}
                        {/* <Image source={required('../')}/> */}
                        {/* </View> */}
                        <TextInput
                            // inlineImageLeft="user"
                            keyboardType="email-address"
                            placeholder="Email"
                            // onChangeText={()=>}
                            style={{ width: "100%" }}>

                        </TextInput>
                    </View>
                    <View style={[styles.InputField2, { borderColor: "#ea0788", borderWidth: 0.5 }]}>
                        <TextInput
                            placeholder="Password"
                            style={{ width: "100%" }}>
                        </TextInput>
                    </View>
                    <LinearGradient colors={['#f8444d', '#e7314a', '#d2184a']} style={styles.submit}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Home')}
                        >
                            <Text style={{ fontSize: 15, color: "#fff" }}>Sign in</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>
            </LinearGradient >
        </View >
    );
}

export default Login;

const styles = StyleSheet.create({
    InputField: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: "30%",
        backgroundColor: "#fff",
        width: "65%",
        marginHorizontal: "15%",
        borderRadius: 4,
        elevation: 4
    },
    InputField2: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: "5%",
        backgroundColor: "#fff",
        width: "65%",
        marginHorizontal: "15%",
        borderRadius: 4,
        elevation: 4

    },
    card: {
        height: "50%",
        backgroundColor: "#fff",
        width: "80%",
        alignItems: "center",
        borderRadius: 10,
        marginHorizontal: "10%",
        marginVertical: "7%"
    },
    submit: {
        justifyContent: "center",
        alignItems: "center",
        height: "18%",
        width: "65%",
        borderRadius: 5,
        marginTop: "5%"
    }
})