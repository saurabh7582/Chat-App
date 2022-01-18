import React from 'react'
import { StyleSheet, Text, View, Image, FlatList, Linking, Platform, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Button, Input, Card } from "react-native-elements"
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
const ProfileScreen = () => {
    return (
        <View style={styles.root}>
            <LinearGradient
                colors={['#0076f5', '#0076f5']}
                style={{
                height: "20%"
                 }}
            />
            <View style={{alignItems:"center"}}>
                 <Image
                style={{width:150,height:150,borderRadius:70,alignItems:"center",marginTop:-80}}
                source={{uri:"https://res.cloudinary.com/dbm7us31s/image/upload/v1642441408/Chat%20app%20/about%20me%20icon/photo_2022-01-17_23-12-53_ytelfd.jpg"}}
                ></Image>
            </View>
        <View style={{alignItems:"center",margin:10}}>
        <Text style={{fontSize:24}} >Saurabh Shinde</Text>
        <Text style={{fontSize:16,fontWeight:"bold"}} >App Devloper</Text>
        </View>
        
        <Card style={styles.myCard}>
            <View style={styles.myCardContainer}    onPress={()=>{
            Linking.openURL(`mailto:${email}`)
        }}>
                <MaterialIcons name="email" size={32} color="#00b4e0" />
                <Text style={styles.cardInnerText}>saurabh.k.shinde7582@gmail.com</Text>
            </View>
        </Card>
        <Card style={styles.myCard} >
            <View style={styles.myCardContainer}>
                <MaterialIcons name="attach-money" size={32} color="#00b4e0" />
                <Text style={styles.cardInnerText}>FreeLancer</Text>
            </View>
        </Card>
        <View style={{flexDirection:"row",justifyContent:"center",marginTop:10}}>
            <Text style={{fontSize:20}} >Follow me</Text>
        </View>
        
        <View style={{flexDirection:"row",justifyContent:"space-around",marginTop:30}}>
        <AntDesign name="instagram" size={40} color="#8a3ab9" onPress={ ()=> Linking.openURL('https://www.instagram.com/saurabh_shinde7582/') } />
        <AntDesign name="linkedin-square" size={40} color="#0077b5" onPress={ ()=> Linking.openURL('https://www.linkedin.com/in/saurabh-shinde-5a40b5174/') } />
        <AntDesign name="github" size={40} color="black" onPress={ ()=> Linking.openURL('https://github.com/saurabh7582') } />
        </View>
        </View>
    )
}

export default ProfileScreen

const theme = {
	colors:{
		primary:"#00b4e0"
	}
}
const styles=StyleSheet.create({

    root:{
        flex:1
    },
    myCard:{
        marginTop:20,
        margin:3
    },
    myCardContainer:{
        flexDirection:"row",
        padding:10
    },
    cardInnerText:{
        fontSize:18,
        marginLeft:5
    }
})
