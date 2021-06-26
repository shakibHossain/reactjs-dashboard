import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYzztaATBCKZvlz4rFLIcY8RgkilzwNOo",
  authDomain: "reactjs-dashboard-firebase.firebaseapp.com",
  projectId: "reactjs-dashboard-firebase",
  storageBucket: "reactjs-dashboard-firebase.appspot.com",
  messagingSenderId: "120525196862",
  appId: "1:120525196862:web:68a57ea4cd75e3b978cb6f",
  measurementId: "G-23S0NQV51V",
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;
