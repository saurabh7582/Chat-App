import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import React, { useLayoutEffect, useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, View } from 'react-native'
import { Input, Button, Text } from 'react-native-elements'
import { auth } from '../Firebase'

export default function Register({ navigation }) {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [imageURl,setImageUrl] = useState('')

    useLayoutEffect (() => {
        navigation.setOptions({
            headerBackTitle: "Back to Login"
        })
    },[navigation]);
    
    const register = () => {
        auth
        .createUserWithEmailAndPassword(email, password)
        .then((authUser) => {
            authUser.user.updateProfile({
                displayName: name,
                photoURL : imageURl || "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
            })
        })
        .catch((error)=> alert(error.message));
    }
    return (
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <StatusBar style='light' />
          <Text h3 style={{ marginBottom: 50}}>Create a account</Text>
            <View style={styles.inputContainer}>
                <Input placeholder='Full Name'
                    autoFocus
                    type="text"
                    value={name}
                    onChangeText={(text)=> setName(text)}
                />
                <Input placeholder='Email'
                    type="text"
                    value={email}
                    onChangeText={(text)=> setEmail(text)}
                />
                <Input placeholder='Password'
                    type="text"
                    value={password}
                    onChangeText={(text)=> setPassword(text)}
                />
                <Input placeholder='imageUrl'
                    type="text"
                    value={imageURl}
                    onChangeText={(text)=> setImageUrl(text)}
                    onSubmitEditing={register}
                />

            </View>
            <Button 
                containerStyle={styles.button}
                raised 
                onPress={register} 
                title="Register" 
            />
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        backgroundColor: "white"
    },
    button: {
        width: 200,
        marginTop: 10,
    },
    inputContainer: {
        width: 300
    }
})
