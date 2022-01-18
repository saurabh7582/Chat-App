import firebase from "firebase/compat/app";
import 'firebase/compat/firestore'
import "firebase/compat/auth"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBI8V1p1CCo8NL-aAuA9UR3WPwWntrp7uw",
    authDomain: "chat-app-53c9b.firebaseapp.com",
    projectId: "chat-app-53c9b",
    storageBucket: "chat-app-53c9b.appspot.com",
    messagingSenderId: "156902366758",
    appId: "1:156902366758:web:cb35b56281d54ae3ed50e7",
    measurementId: "G-1FJRHRCB0Z"
  };

  !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app() ;

  
  const db = firebase.firestore();
  const auth = firebase.auth();
  
  export { db, auth };