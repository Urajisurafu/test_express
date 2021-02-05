import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAd8ZPBNwpnCWyc0xuA_JdAauZdpXwikHw",
    authDomain: "fir-auth-febcc.firebaseapp.com",
    projectId: "fir-auth-febcc",
    storageBucket: "fir-auth-febcc.appspot.com",
    messagingSenderId: "301398798453",
    appId: "1:301398798453:web:2c95a3b798c25efa0a483c"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export { auth, firebase };