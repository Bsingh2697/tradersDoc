
import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/analytics';
import 'firebase/database'
import 'firebase/storage'


var firebaseConfig = {
    apiKey: "AIzaSyDOR8DPQhCWEGimZ8yE5BGPEXF_5I1SgG0",
    authDomain: "upload-f02b4.firebaseapp.com",
    databaseURL: "https://upload-f02b4.firebaseio.com",
    projectId: "upload-f02b4",
    storageBucket: "upload-f02b4.appspot.com",
    messagingSenderId: "189776720371",
    appId: "1:189776720371:web:694a6c95e443d080cc6286",
    measurementId: "G-V4LH4YCLFY"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase