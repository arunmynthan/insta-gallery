import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAaICoMiwShiw91Z0TDxx76GGXYtqf63XU",
  authDomain: "instagallery-7ce40.firebaseapp.com",
  databaseURL: "https://instagallery-7ce40.firebaseio.com",
  projectId: "instagallery-7ce40",
  storageBucket: "instagallery-7ce40.appspot.com",
  messagingSenderId: "17558344192",
  appId: "1:17558344192:web:7ec03ee78b889132f83ee5",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let firestorage = firebase.storage();
let firestore = firebase.firestore();

let timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { firestorage, firestore, timestamp };
