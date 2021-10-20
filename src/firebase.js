import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

const config = {
  apiKey: "AIzaSyC9EiPY0-viF6cdA6D-4_UHxlZILzmLWOg",
  authDomain: "slack-42ea8.firebaseapp.com",
  projectId: "slack-42ea8",
  storageBucket: "slack-42ea8.appspot.com",
  messagingSenderId: "360616170604",
  appId: "1:360616170604:web:57b02c1470b1b0fc89f449",
  measurementId: "G-5CGQ1CJHN4",
};

// Initialize Firebase

firebase.initializeApp(config);

export default firebase;
