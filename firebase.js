// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import firebase from "firebase"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDMU9xxzYXpQ08tV6_I4SC8seO-f-WbpE0",
    authDomain: "emazonproject-937b1.firebaseapp.com",
    projectId: "emazonproject-937b1",
    storageBucket: "emazonproject-937b1.appspot.com",
    messagingSenderId: "167683930621",
    appId: "1:167683930621:web:a93d473265146646660194"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore()

export default db;