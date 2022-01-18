import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './Screens/LoginScreen';
import Register from './Screens/Register';
import HomeScreen from './Screens/HomeScreen';
import AddChatScreen from './Screens/AddChatScreen';
import ChatScreen from './Screens/ChatScreen';
import ProfileScreen from './Screens/ProfileScreen';

const Stack = createNativeStackNavigator();

const globalScreenOptions = {
  headerStyle: {backgroundColor: "#2C6BED", },
  headerTtitleStyle: { color: "White", fontWeight: 'bold'},
  headerTintColor: "white",

}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator  screenOptions={globalScreenOptions}>
        <Stack.Screen name="Login" component={LoginScreen} /> 
        <Stack.Screen name="Register" component={Register} /> 
        <Stack.Screen name="Home" component={HomeScreen} /> 
        <Stack.Screen name="AddChat" component={AddChatScreen} /> 
        <Stack.Screen name="Chat" component={ChatScreen} /> 
        <Stack.Screen name="AboutMe" component={ProfileScreen} /> 
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

