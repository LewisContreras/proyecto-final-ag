import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCgsrjF18DOmeDBHbd9wBkbxpqRHJu7L-w",
    authDomain: "bd-find-pet.firebaseapp.com",
    projectId: "bd-find-pet",
    storageBucket: "bd-find-pet.appspot.com",
    messagingSenderId: "649767277617",
    appId: "1:649767277617:web:09884fa40e950156a8b110"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


//Almacena la info de la DB
const db = firebase.firestore();

//Proveedor de google
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };