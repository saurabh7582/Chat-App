import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { Button, Input, Image } from "react-native-elements"
import { KeyboardAvoidingView } from 'react-native'
import { auth } from '../Firebase'

const  LoginScreen = ({navigation})=> {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser)=> {
            if (authUser) {
                navigation.replace("Home");
            }
        });

        return unsubscribe;
    },[])

    const signIn = () => {
        auth
        .signInWithEmailAndPassword(email, password)
        .catch((error) => alert(error));
    }

    return (
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <StatusBar style='light' />
            <Image 
                source={{
                    uri:"https://res.cloudinary.com/dbm7us31s/image/upload/v1642323370/Chat%20app%20/Chat%20app%20icon/chat-app-logo-icon-vector_1_f0e2va.png",
                }}
                style={{ width: 250, height: 210}}
            />
            <View style={styles.inputContainer}>
                <Input placeholder="Email" autoFoucus tyle="email" value={email} onChangeText={(text) => setEmail(text)} />
                <Input placeholder="Password" autoFoucus tyle="password" value={password} onChangeText={(text) => setPassword(text)} onSubmitEditing={signIn} />
            </View>
            <Button containerStyle={styles.button} title="Login" onPress={signIn} />
            <Button containerStyle={styles.button} type="outline" title="Register" onPress={()=> navigation.navigate('Register')} />
        </KeyboardAvoidingView>
    )
}

export default LoginScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        justifyContent:"center",
        padding: 5,         
    },
    inputContainer:{
        width: 300,
        marginTop: 10
    },
    button:{
        width:200,
        marginTop: 10
    }
})
