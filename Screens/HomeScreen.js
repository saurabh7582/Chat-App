import React, { useEffect, useLayoutEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Avatar } from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomeListItem from '../Component/CustomeListItem'
import { auth, db } from '../Firebase'
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons"

const HomeScreen = ({ navigation }) => {
	const signOut = () => {
		auth.signOut().then(() => navigation.replace("Login"));
	};

	const [chats, setChats] = useState([]);

	useEffect(() => {
		const unsubscribe = db.collection("chats").onSnapshot((snapshot) =>
			setChats(
				snapshot.docs.map((doc) => ({
					id: doc.id,
					data: doc.data(),
				}))
			)
		);
		return unsubscribe;
	}, []);

	useLayoutEffect(() => {
		navigation.setOptions({
			title: "  Chat app",
			headerStyle: { backgroundColor: "white" },
			headerTitleStyle: { color: "black" },
			headerTintColor: "black",
			headerLeft: () => (
				<View style={{ marginLeft: 5 }}>
					<TouchableOpacity activeOpacity={0.5} onPress={signOut}>
						<Avatar rounded source={{ uri: auth?.currentUser?.photoURL }} />
					</TouchableOpacity>
				</View>
			),
			headerRight: () => (
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						width: 80,
						marginRight: 20,
					}}
				>
					<TouchableOpacity activeOpacity={0.5} onPress={()=> navigation.navigate("AboutMe")}>
						<AntDesign name="exclamationcircleo" size={24} color="black" />
					</TouchableOpacity>
					<TouchableOpacity
						activeOpacity={0.5}
						onPress={() => navigation.navigate("AddChat")}
					>
						<SimpleLineIcons name="pencil" size={24} color="black" />
					</TouchableOpacity>
				</View>
			),
		});
	}, [navigation]);

	const enterChat = (id, chatName) => {
		navigation.navigate("Chat", { id, chatName });
	};

	return (
		<SafeAreaView>
			<ScrollView style={styles.container}>
				{chats.map(({ id, data: { chatName } }) => (
					<CustomeListItem
						key={id}
						id={id}
						chatName={chatName}
						enterChat={enterChat}
					/>
				))}
			</ScrollView>
		</SafeAreaView>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	container: {
		height: "100%",
	},
});
